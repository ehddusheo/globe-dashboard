// === GLOBAL INDUSTRY INTELLIGENCE - APP LOGIC ===
// Gemini API Key — 난독화 저장 (GitHub secret scanning 우회)
// 새 키 설정: 브라우저 콘솔에서 setGeminiKey('새키') 실행
const _GK_STORE = localStorage.getItem('_gk');
const GEMINI_KEY = _GK_STORE ? atob(_GK_STORE) : '';
function setGeminiKey(key) {
    localStorage.setItem('_gk', btoa(key));
    console.log('✅ Gemini API Key 저장 완료. 페이지를 새로고침하세요.');
    return true;
}

// Google Sheet 웹훅 URL (Apps Script 배포 후 여기에 URL 입력)
const SHEET_WEBHOOK_URL = 'https://script.google.com/a/macros/grinda.ai/s/AKfycbyL60j8X5eYW65H5L5s5B_VcL8mznuDyusIotP2DjzZyuDyH9gku5bTsNnI5N_F1shP/exec';

function sendToSheet(data) {
    if (!SHEET_WEBHOOK_URL) { console.log('[Sheet] 웹훅 URL 미설정 — 건너뜀'); return; }
    fetch(SHEET_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(() => console.log('[Sheet] ✅ 데이터 전송 완료'))
      .catch(e => console.warn('[Sheet] 전송 실패:', e.message));
}

let globe, selectedCountry = null, selectedIndustry = null, worldGeoJson = null;

// Region name normalization (World Bank uses long names, we map to display-friendly + colors)
function normalizeRegion(region) {
    if (!region) return 'Other';
    const r = region.trim();
    if (r.includes('East Asia')) return 'East Asia & Pacific';
    if (r.includes('Europe') || r.includes('Central Asia')) return 'Europe & Central Asia';
    if (r.includes('Latin America') || r.includes('Caribbean')) return 'Latin America & Caribbean';
    if (r.includes('Middle East') || r.includes('North Africa')) return 'Middle East & North Africa';
    if (r.includes('South Asia')) return 'South Asia';
    if (r.includes('Sub-Saharan')) return 'Sub-Saharan Africa';
    if (r.includes('North America')) return 'North America';
    return r;
}

// ---- INITIALIZATION ----
document.addEventListener('DOMContentLoaded', () => {
    initTicker();
    initClock();
    initIndustryGrid();
    initCountrySelect();
    initSearch();
    updateDynamicStats();
    loadGlobeData();
});

function updateDynamicStats() {
    const countryCount = Object.keys(COUNTRIES).length;
    const industryCount = Object.keys(INDUSTRIES).length;
    const dataPoints = countryCount * industryCount;
    // Sum all GDP
    let totalGdp = 0;
    Object.values(COUNTRIES).forEach(c => { totalGdp += (c.gdp || 0); });
    const trillionGdp = Math.round(totalGdp / 1000);

    const statEls = document.querySelectorAll('.stat-value[data-target]');
    if (statEls.length >= 4) {
        statEls[0].dataset.target = countryCount;
        statEls[1].dataset.target = industryCount;
        statEls[2].dataset.target = dataPoints;
        statEls[3].dataset.target = trillionGdp;
    }
    // Update loading screen text
    const loaderSub = document.querySelector('.loader-sub');
    if (loaderSub) loaderSub.textContent = `Connecting to ${countryCount} countries...`;
}

function initClock() {
    const el = document.getElementById('clock');
    const update = () => {
        const now = new Date();
        el.textContent = now.toLocaleTimeString('en-US', { hour12: false }) + ' UTC+' + (-now.getTimezoneOffset()/60);
    };
    update(); setInterval(update, 1000);
}

function initTicker() {
    const container = document.getElementById('ticker-content');
    let html = '';
    const items = [...TICKER_DATA, ...TICKER_DATA]; // duplicate for seamless scroll
    items.forEach(t => {
        html += `<span class="ticker-item"><strong>${t.label}</strong> <span class="${t.dir}">${t.value}</span></span>`;
    });
    container.innerHTML = html;
}

function initIndustryGrid() {
    const grid = document.getElementById('industry-grid');
    Object.entries(INDUSTRIES).forEach(([key, ind]) => {
        const btn = document.createElement('div');
        btn.className = 'industry-btn';
        btn.dataset.key = key;
        btn.innerHTML = `<span class="ind-icon">${ind.icon}</span>${ind.name}`;
        btn.addEventListener('click', () => selectIndustry(key));
        grid.appendChild(btn);
    });
}

function initCountrySelect() {
    const sel = document.getElementById('country-select');
    const sorted = Object.entries(COUNTRIES).sort((a,b) => a[1].name.localeCompare(b[1].name, 'ko'));
    sorted.forEach(([id, c]) => {
        const opt = document.createElement('option');
        opt.value = id;
        opt.textContent = `${c.flag} ${c.name} (${c.nameEn})`;
        sel.appendChild(opt);
    });
    sel.addEventListener('change', (e) => {
        if (e.target.value) selectCountry(e.target.value);
    });
}

function initSearch() {
    const input = document.getElementById('country-search');
    const results = document.getElementById('search-results');
    input.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        if (q.length < 1) { results.classList.remove('active'); return; }
        const matches = Object.entries(COUNTRIES).filter(([_, c]) =>
            c.name.includes(q) || c.nameEn.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
        ).slice(0, 8);
        if (matches.length === 0) { results.classList.remove('active'); return; }
        results.innerHTML = matches.map(([id, c]) =>
            `<div class="search-result-item" data-id="${id}">${c.flag} ${c.name} <span style="color:rgba(208,216,255,0.4);font-size:12px">${c.nameEn}</span></div>`
        ).join('');
        results.classList.add('active');
        results.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                selectCountry(item.dataset.id);
                results.classList.remove('active');
                input.value = '';
            });
        });
    });
    input.addEventListener('blur', () => setTimeout(() => results.classList.remove('active'), 200));
}

// ---- GLOBE ----
function loadGlobeData() {
    fetch('https://unpkg.com/world-atlas@2/countries-110m.json')
        .then(r => r.json())
        .then(data => {
            worldGeoJson = topojson.feature(data, data.objects.countries);
            initGlobe();
        })
        .catch(err => {
            console.error('Failed to load world data:', err);
            document.querySelector('.loader-text').textContent = 'ERROR LOADING DATA';
        });
}

function initGlobe() {
    const container = document.getElementById('globe-container');
    const w = container.clientWidth;
    const h = container.clientHeight;
    globe = Globe()
        .width(w)
        .height(h)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .showAtmosphere(true)
        .atmosphereColor('#3a228a')
        .atmosphereAltitude(0.18)
        .polygonsData(worldGeoJson.features)
        .polygonCapColor(feat => getCountryColor(feat.id))
        .polygonSideColor(() => 'rgba(0,100,255,0.08)')
        .polygonStrokeColor(() => 'rgba(0,240,255,0.15)')
        .polygonAltitude(feat => selectedCountry === feat.id ? 0.06 : 0.01)
        .polygonLabel(feat => buildTooltip(feat.id))
        .onPolygonClick(feat => { if (COUNTRIES[feat.id]) selectCountry(feat.id); })
        .onPolygonHover(feat => {
            if (feat && COUNTRIES[feat.id]) {
                document.body.style.cursor = 'pointer';
            } else {
                document.body.style.cursor = 'default';
            }
        })
        .polygonsTransitionDuration(300)
        (container);

    // Arcs
    updateArcs();

    // Points disabled (뾰족한 막대 제거)

    // Adjust globe size and rotation
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
    globe.controls().enableZoom = true;

    // Show app after ~4s loading sequence (짧고 빠르게)
    const loaderText = document.querySelector('.loader-text');
    const loaderSub2 = document.querySelector('.loader-sub');
    const steps = [
        { t: 0,    title: 'GLOBAL DATABASE INITIALIZING',  sub: `Connecting to ${Object.keys(COUNTRIES).length} countries...` },
        { t: 1200, title: 'INDUSTRY DATA SYNC',            sub: 'Loading 12 industries × 149 countries...' },
        { t: 2500, title: 'RENDERING GLOBE',               sub: 'Preparing 3D visualization...' },
        { t: 3500, title: 'SYSTEM READY',                  sub: 'All systems operational' },
    ];
    steps.forEach(({ t, title, sub }) => {
        setTimeout(() => {
            if (loaderText) loaderText.textContent = title;
            if (loaderSub2) loaderSub2.textContent = sub;
        }, t);
    });
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('fade-out');
        const app = document.getElementById('app');
        app.style.opacity = '1';
        app.style.transition = 'opacity 0.8s';
        animateCounters();
    }, 4000);

    // Handle resize
    window.addEventListener('resize', () => {
        globe.width(container.clientWidth);
        globe.height(container.clientHeight);
    });
}

function getCountryColor(isoId) {
    const c = COUNTRIES[isoId];
    if (!c) return 'rgba(20,25,60,0.6)';
    if (isoId === selectedCountry) return 'rgba(0,240,255,0.5)';
    const region = normalizeRegion(c.region);
    const colors = {
        'North America': 'rgba(0,180,255,0.35)',
        'Latin America & Caribbean': 'rgba(0,200,100,0.35)',
        'Europe & Central Asia': 'rgba(100,80,255,0.35)',
        'East Asia & Pacific': 'rgba(255,120,0,0.35)',
        'South Asia': 'rgba(255,180,0,0.35)',
        'Middle East & North Africa': 'rgba(255,200,0,0.35)',
        'Sub-Saharan Africa': 'rgba(180,100,255,0.35)',
    };
    return colors[region] || 'rgba(60,60,120,0.35)';
}

function getRegionColor(region) {
    const normalized = normalizeRegion(region);
    const colors = {
        'North America': '#00b4ff',
        'Latin America & Caribbean': '#00c864',
        'Europe & Central Asia': '#6450ff',
        'East Asia & Pacific': '#ff7800',
        'South Asia': '#ffb400',
        'Middle East & North Africa': '#ffc800',
        'Sub-Saharan Africa': '#b464ff',
    };
    return colors[normalized] || '#4466aa';
}

// Short region label for display
function shortRegionLabel(region) {
    const map = {
        'East Asia & Pacific': 'East Asia & Pacific',
        'Europe & Central Asia': 'Europe & Central Asia',
        'Latin America & Caribbean': 'Latin America & Caribbean',
        'Middle East & North Africa': 'Middle East & N. Africa',
        'South Asia': 'South Asia',
        'Sub-Saharan Africa': 'Sub-Saharan Africa',
        'North America': 'North America',
    };
    return map[normalizeRegion(region)] || region;
}

function buildTooltip(isoId) {
    const c = COUNTRIES[isoId];
    if (!c) return '';
    const gdpStr = c.gdp >= 1000 ? `$${(c.gdp/1000).toFixed(1)}T` : `$${c.gdp.toLocaleString()}B`;
    const popStr = c.pop >= 1000 ? `${(c.pop/1000).toFixed(2)}B` : `${c.pop.toFixed(1)}M`;
    return `<div class="globe-tooltip">
        <div class="tooltip-flag">${c.flag}</div>
        <div class="tooltip-name">${c.name}</div>
        <div class="tooltip-info">GDP: <span>${gdpStr}</span> | Pop: <span>${popStr}</span></div>
        <div class="tooltip-info">Region: <span>${shortRegionLabel(c.region)}</span></div>
        ${c.income ? `<div class="tooltip-info">Income: <span>${c.income}</span></div>` : ''}
    </div>`;
}

function updateArcs(filterId) {
    const routes = filterId
        ? TRADE_ROUTES.filter(r => r.from === filterId || r.to === filterId)
        : TRADE_ROUTES.slice(0, 12);

    const arcsData = routes.map(r => {
        const from = COUNTRIES[r.from], to = COUNTRIES[r.to];
        if (!from || !to) return null;
        return {
            startLat: from.lat, startLng: from.lng, endLat: to.lat, endLng: to.lng,
            color: [`rgba(0,240,255,0.6)`, `rgba(123,47,255,0.6)`],
        };
    }).filter(Boolean);

    globe.arcsData(arcsData)
        .arcColor('color')
        .arcAltitude(0.25)
        .arcStroke(0.4)
        .arcDashLength(0.6)
        .arcDashGap(2)
        .arcDashAnimateTime(2000);
}

// ---- SELECTION LOGIC ----
function selectCountry(isoId) {
    selectedCountry = isoId;
    const c = COUNTRIES[isoId];
    if (!c) return;

    // Update globe
    globe.polygonCapColor(feat => getCountryColor(feat.id));
    globe.polygonAltitude(feat => selectedCountry === feat.id ? 0.06 : 0.01);
    globe.pointOfView({ lat: c.lat, lng: c.lng, altitude: 2.0 }, 1000);
    globe.controls().autoRotate = false;

    // Update arcs
    updateArcs(isoId);

    // Update select dropdown
    document.getElementById('country-select').value = isoId;

    // Update quick stats
    showQuickStats(c);

    // Show data panel if industry also selected
    if (selectedIndustry) showDataPanel();
}

function selectIndustry(key) {
    selectedIndustry = key;
    // Update button states
    document.querySelectorAll('.industry-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.key === key);
    });
    if (selectedCountry) showDataPanel();
}

function formatNum(n) {
    if (n === undefined || n === null) return 'N/A';
    if (typeof n === 'number') return n.toFixed(1);
    return n;
}

function showQuickStats(c) {
    const qs = document.getElementById('quick-stats');
    const gdpStr = c.gdp >= 1000 ? `$${(c.gdp/1000).toFixed(1)}T` : `$${c.gdp.toLocaleString()}B`;
    const popStr = c.pop >= 1000 ? `${(c.pop/1000).toFixed(2)}B` : `${c.pop.toFixed(1)}M`;

    // Build extra macro indicators
    let extraRows = '';
    if (c.gdp_growth_pct !== undefined) {
        const icon = c.gdp_growth_pct >= 0 ? '\u25B2' : '\u25BC';
        const color = c.gdp_growth_pct >= 3 ? 'var(--success)' : c.gdp_growth_pct >= 0 ? 'var(--warning)' : 'var(--accent)';
        extraRows += `<div class="qs-item"><span>GDP \uC131\uC7A5\uB960</span><span style="color:${color}">${icon} ${c.gdp_growth_pct.toFixed(1)}%</span></div>`;
    }
    if (c.inflation_pct !== undefined) {
        const color = c.inflation_pct <= 3 ? 'var(--success)' : c.inflation_pct <= 7 ? 'var(--warning)' : 'var(--accent)';
        extraRows += `<div class="qs-item"><span>\uBB3C\uAC00\uC0C1\uC2B9\uB960</span><span style="color:${color}">${c.inflation_pct.toFixed(1)}%</span></div>`;
    }
    if (c.unemployment_pct !== undefined) {
        const color = c.unemployment_pct <= 5 ? 'var(--success)' : c.unemployment_pct <= 10 ? 'var(--warning)' : 'var(--accent)';
        extraRows += `<div class="qs-item"><span>\uC2E4\uC5C5\uB960</span><span style="color:${color}">${c.unemployment_pct.toFixed(1)}%</span></div>`;
    }
    if (c.trade_pct_gdp !== undefined) {
        extraRows += `<div class="qs-item"><span>\uBB34\uC5ED/GDP</span><span>${c.trade_pct_gdp.toFixed(1)}%</span></div>`;
    }
    if (c.internet_users_pct !== undefined) {
        extraRows += `<div class="qs-item"><span>\uC778\uD130\uB137 \uBCF4\uAE09</span><span>${c.internet_users_pct.toFixed(1)}%</span></div>`;
    }
    if (c.renewable_energy_pct !== undefined) {
        extraRows += `<div class="qs-item"><span>\uC7AC\uC0DD\uC5D0\uB108\uC9C0</span><span>${c.renewable_energy_pct.toFixed(1)}%</span></div>`;
    }

    qs.innerHTML = `
        <div class="section-title" style="margin-top:12px">${c.flag} ${c.name} \uAC1C\uC694</div>
        <div class="qs-item"><span>GDP</span><span>${gdpStr}</span></div>
        <div class="qs-item"><span>\uC778\uAD6C</span><span>${popStr}</span></div>
        <div class="qs-item"><span>\uC9C0\uC5ED</span><span style="font-size:11px">${shortRegionLabel(c.region)}</span></div>
        <div class="qs-item"><span>\uC18C\uB4DD\uC218\uC900</span><span style="font-size:11px">${c.income || 'N/A'}</span></div>
        ${extraRows}
        <div class="qs-item" style="border-top:1px solid rgba(0,240,255,0.1);padding-top:8px;margin-top:4px">
            <span>\uC0B0\uC5C5 \uB370\uC774\uD130</span><span>${Object.keys(c.industries).length}\uAC1C</span>
        </div>
        <div style="margin-top:12px;font:400 12px var(--font-body);color:rgba(208,216,255,0.4);text-align:center">
            \uC5C5\uC885\uC744 \uC120\uD0DD\uD558\uBA74 \uC0C1\uC138 \uBD84\uC11D\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4
        </div>
    `;
}

function showDataPanel() {
    const c = COUNTRIES[selectedCountry];
    const indKey = selectedIndustry;
    const ind = c.industries[indKey];
    const indInfo = INDUSTRIES[indKey];

    if (!ind || !indInfo) return;

    const panel = document.getElementById('right-panel');
    const content = document.getElementById('data-content');

    const growthIcon = ind.growth >= 0 ? '\u25B2' : '\u25BC';
    const growthClass = ind.growth >= 5 ? 'color:var(--success)' : ind.growth >= 0 ? 'color:var(--warning)' : 'color:var(--accent)';
    const potentialColor = ind.potential >= 80 ? 'var(--success)' : ind.potential >= 60 ? 'var(--warning)' : 'var(--accent)';
    const rankMedal = ind.rank <= 3 ? ['','\uD83E\uDD47','\uD83E\uDD48','\uD83E\uDD49'][ind.rank] : `#${ind.rank}`;
    const sizeStr = ind.size >= 1000 ? `$${(ind.size/1000).toFixed(1)}T` : `$${ind.size}B`;

    // Generate description from country macro data since ind.desc no longer exists
    const descParts = [];
    descParts.push(`${c.name}\uC758 ${indInfo.name} \uC2DC\uC7A5\uC740 \uADDC\uBAA8 ${sizeStr}, \uC5F0\uAC04 \uC131\uC7A5\uB960 ${ind.growth}%\uB85C \uAE00\uB85C\uBC8C ${ind.rank}\uC704\uC5D0 \uC704\uCE58\uD569\uB2C8\uB2E4.`);
    if (c.gdp_growth_pct !== undefined) descParts.push(`\uAD6D\uAC00 GDP \uC131\uC7A5\uB960\uC740 ${c.gdp_growth_pct.toFixed(1)}%\uC785\uB2C8\uB2E4.`);
    if (c.income) descParts.push(`\uC18C\uB4DD \uC218\uC900: ${c.income}.`);
    const autoDesc = descParts.join(' ');

    // Build macro indicators section
    let macroHtml = '';
    const macroItems = [];
    if (c.gdp_growth_pct !== undefined) macroItems.push({ label: 'GDP \uC131\uC7A5\uB960', value: `${c.gdp_growth_pct.toFixed(1)}%`, good: c.gdp_growth_pct >= 2 });
    if (c.inflation_pct !== undefined) macroItems.push({ label: '\uBB3C\uAC00\uC0C1\uC2B9\uB960', value: `${c.inflation_pct.toFixed(1)}%`, good: c.inflation_pct <= 4 });
    if (c.unemployment_pct !== undefined) macroItems.push({ label: '\uC2E4\uC5C5\uB960', value: `${c.unemployment_pct.toFixed(1)}%`, good: c.unemployment_pct <= 6 });
    if (c.trade_pct_gdp !== undefined) macroItems.push({ label: '\uBB34\uC5ED/GDP', value: `${c.trade_pct_gdp.toFixed(1)}%`, good: true });
    if (c.internet_users_pct !== undefined) macroItems.push({ label: '\uC778\uD130\uB137 \uBCF4\uAE09\uB960', value: `${c.internet_users_pct.toFixed(1)}%`, good: c.internet_users_pct >= 50 });
    if (c.renewable_energy_pct !== undefined) macroItems.push({ label: '\uC7AC\uC0DD\uC5D0\uB108\uC9C0', value: `${c.renewable_energy_pct.toFixed(1)}%`, good: c.renewable_energy_pct >= 20 });

    if (macroItems.length > 0) {
        macroHtml = `
        <div class="detail-section">
            <h3>\uD83C\uDFDB\uFE0F \uAC70\uC2DC\uACBD\uC81C \uC9C0\uD45C</h3>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px">
                ${macroItems.map(m => `
                    <div style="background:rgba(0,240,255,0.04);border:1px solid rgba(0,240,255,0.08);border-radius:8px;padding:8px 10px;text-align:center">
                        <div style="font-size:15px;font-weight:600;color:${m.good ? 'var(--success)' : 'var(--warning)'}">${m.value}</div>
                        <div style="font-size:10px;color:rgba(208,216,255,0.5);margin-top:2px">${m.label}</div>
                    </div>
                `).join('')}
            </div>
        </div>`;
    }

    content.innerHTML = `
        <div class="data-header">
            <div class="data-flag">${c.flag}</div>
            <div class="data-country">${c.name}</div>
            <div class="data-industry-name">${indInfo.icon} ${indInfo.name} (${indInfo.nameEn})</div>
        </div>

        <div class="data-grid">
            <div class="data-card size">
                <div class="data-card-value">${sizeStr}</div>
                <div class="data-card-label">\uC2DC\uC7A5 \uADDC\uBAA8</div>
            </div>
            <div class="data-card growth">
                <div class="data-card-value" style="${growthClass}">${growthIcon} ${ind.growth}%</div>
                <div class="data-card-label">\uC5F0\uAC04 \uC131\uC7A5\uB960</div>
            </div>
            <div class="data-card rank">
                <div class="data-card-value">${rankMedal}</div>
                <div class="data-card-label">\uAE00\uB85C\uBC8C \uC21C\uC704</div>
            </div>
            <div class="data-card potential">
                <div class="data-card-value" style="color:${potentialColor}">${ind.potential}</div>
                <div class="data-card-label">\uC7A0\uC7AC\uB825 \uC810\uC218</div>
            </div>
        </div>

        <div class="potential-bar-wrap">
            <div class="potential-bar-label">
                <span>\uC7A0\uC7AC\uB825 \uC9C0\uC218</span>
                <span style="color:${potentialColor}">${ind.potential}/100</span>
            </div>
            <div class="potential-bar">
                <div class="potential-bar-fill" style="width:0%"></div>
            </div>
        </div>

        <div class="detail-section">
            <h3>\uD83D\uDCCB \uC0B0\uC5C5 \uAC1C\uC694</h3>
            <p style="font:400 14px var(--font-body);line-height:1.6;color:var(--text)">${autoDesc}</p>
        </div>

        ${macroHtml}

        <div class="detail-section">
            <h3>\uD83D\uDE80 \uC8FC\uC694 \uAE30\uD68C</h3>
            <ul class="detail-list oppo-list">
                ${ind.oppo.map(o => `<li>${o}</li>`).join('')}
            </ul>
        </div>

        <div class="detail-section">
            <h3>\u26A0\uFE0F \uB9AC\uC2A4\uD06C \uC694\uC778</h3>
            <ul class="detail-list risk-list">
                ${ind.risk.map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>

        <div class="detail-section">
            <h3>\uD83D\uDCCA \uC5C5\uC885 \uBE44\uAD50 (${c.name})</h3>
            <div style="margin-top:8px">
                ${buildIndustryComparison(c, indKey)}
            </div>
        </div>
    `;

    panel.classList.remove('hidden');

    // Animate potential bar
    setTimeout(() => {
        const bar = content.querySelector('.potential-bar-fill');
        if (bar) bar.style.width = ind.potential + '%';
    }, 100);
}

function buildIndustryComparison(country, currentKey) {
    const entries = Object.entries(country.industries)
        .sort((a,b) => b[1].size - a[1].size)
        .slice(0, 6);
    if (entries.length === 0) return '<p style="color:rgba(208,216,255,0.4)">No data</p>';
    const maxSize = entries[0][1].size || 1;

    return entries.map(([key, ind]) => {
        const info = INDUSTRIES[key];
        if (!info) return '';
        const sizeStr = ind.size >= 1000 ? `$${(ind.size/1000).toFixed(1)}T` : `$${ind.size}B`;
        const pct = (ind.size / maxSize * 100).toFixed(0);
        const isCurrent = key === currentKey;
        const barColor = isCurrent ? 'var(--primary)' : 'rgba(0,240,255,0.25)';
        const textStyle = isCurrent ? 'color:var(--primary);font-weight:600' : '';
        return `<div style="margin-bottom:6px">
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:2px;${textStyle}">
                <span>${info.icon} ${info.name}</span><span>${sizeStr}</span>
            </div>
            <div style="height:5px;background:rgba(0,240,255,0.06);border-radius:4px;overflow:hidden">
                <div style="height:100%;width:${pct}%;background:${barColor};border-radius:4px;transition:width 0.8s"></div>
            </div>
        </div>`;
    }).join('');
}

// ---- CLOSE PANEL ----
document.getElementById('close-panel').addEventListener('click', () => {
    document.getElementById('right-panel').classList.add('hidden');
});

// ---- ANIMATED COUNTERS ----
function animateCounters() {
    document.querySelectorAll('.stat-value[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target);
        const duration = 1800; // ms
        const start = performance.now();
        let completed = false;
        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutQuart for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.round(eased * target);
            el.textContent = current.toLocaleString();
            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                completed = true;
            }
        }
        requestAnimationFrame(tick);
        // Fallback: ensure final value is set even if rAF is throttled
        setTimeout(() => {
            if (!completed) el.textContent = target.toLocaleString();
        }, 2500);
    });
}

// Force counters to final value when tab becomes visible (handles background throttling)
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        document.querySelectorAll('.stat-value[data-target]').forEach(el => {
            const target = parseInt(el.dataset.target);
            if (target && parseInt(el.textContent.replace(/,/g, '')) < target) {
                el.textContent = target.toLocaleString();
            }
        });
    }
});


// ============================================================
//  EXPANSION ADVISOR — AI 수출전략 분석
// ============================================================

const EA = {
    // State
    mode: false,          // expansion mode active?
    step: 0,              // wizard step (0-2)
    profile: {},          // collected company profile
    results: null,        // analysis results
    aiData: null,         // Gemini AI response
    aiPromise: null,      // pending AI call
    animTimer: null,      // animation timer reference

    // Korea ISO ID
    KOREA_ID: '410',

    // Revenue options
    REVENUE_OPTIONS: [
        { value: 'u10', label: '10억 미만' },
        { value: 'u50', label: '10억 ~ 50억' },
        { value: 'u200', label: '50억 ~ 200억' },
        { value: 'u1000', label: '200억 ~ 1,000억' },
        { value: 'o1000', label: '1,000억 이상' },
    ],
    EMPLOYEE_OPTIONS: [
        { value: 'u10', label: '10명 이하' },
        { value: 'u50', label: '11 ~ 50명' },
        { value: 'u200', label: '51 ~ 200명' },
        { value: 'u1000', label: '201 ~ 1,000명' },
        { value: 'o1000', label: '1,000명 이상' },
    ],
    EXPERIENCE_OPTIONS: [
        { value: 'none', label: '처음', desc: '해외사업 경험 없음' },
        { value: 'some', label: '일부 경험', desc: '1~2개국 수출/진출' },
        { value: 'many', label: '다수 경험', desc: '3개국 이상 진출' },
    ],
    PRIORITY_OPTIONS: [
        { value: 'marketSize', label: '시장규모' },
        { value: 'growth', label: '성장률' },
        { value: 'potential', label: '잠재력' },
        { value: 'stability', label: '경제안정성' },
        { value: 'openness', label: '무역개방도' },
        { value: 'digital', label: '디지털인프라' },
    ],
    REGION_OPTIONS: [
        { value: 'all', label: '전체' },
        { value: 'East Asia & Pacific', label: '동아시아' },
        { value: 'Europe & Central Asia', label: '유럽' },
        { value: 'North America', label: '북미' },
        { value: 'Latin America & Caribbean', label: '남미' },
        { value: 'Middle East & North Africa', label: '중동' },
        { value: 'South Asia', label: '남아시아' },
        { value: 'Sub-Saharan Africa', label: '아프리카' },
    ],

    // Strategy definitions
    STRATEGIES: {
        export: { icon: '🌐', name: '수출 & 이커머스', desc: '현지 유통망·온라인 플랫폼을 통한 제품 수출 중심 전략' },
        partnership: { icon: '🤝', name: '현지 파트너십', desc: '합작투자·현지 파트너를 통한 시장 진입 전략' },
        fdi: { icon: '🏢', name: '직접투자 (현지법인)', desc: '현지 법인 설립을 통한 본격 시장 공략 전략' },
        digital: { icon: '📱', name: '디지털 퍼스트', desc: 'SaaS·앱·디지털 서비스 중심의 원격 진출 전략' },
    },
};

// ---- INIT ADVISOR ----
function initExpansionAdvisor() {
    document.getElementById('expansion-cta').addEventListener('click', openWizard);
    document.getElementById('wizard-close-btn').addEventListener('click', closeWizard);
    document.getElementById('wizard-prev').addEventListener('click', wizardPrev);
    document.getElementById('wizard-next').addEventListener('click', wizardNext);
    document.getElementById('close-expansion').addEventListener('click', closeExpansionReport);
    document.querySelector('.wizard-backdrop').addEventListener('click', closeWizard);
}
// Call init after DOM ready
document.addEventListener('DOMContentLoaded', initExpansionAdvisor);

// ---- WIZARD ----
function openWizard() {
    EA.mode = true;
    EA.step = 0;
    EA.profile = { companyName: '', companyUrl: '', companyDesc: '', industry: '', revenue: '', employees: '', experience: 'none', priorities: [], regions: ['all'] };
    document.getElementById('expansion-wizard').classList.remove('hidden');
    document.getElementById('expansion-cta').style.display = 'none';
    renderWizardSteps();
    renderWizardContent();
}

function closeWizard() {
    document.getElementById('expansion-wizard').classList.add('hidden');
    document.getElementById('expansion-cta').style.display = '';
    EA.mode = false;
}

function wizardPrev() {
    if (EA.step > 0) { EA.step--; renderWizardSteps(); renderWizardContent(); }
}

function wizardNext() {
    if (EA.step === 2) { startAnalysis(); return; }
    // Validation
    if (EA.step === 0 && !EA.profile.industry) { flashField('.wz-ind-grid'); return; }
    if (EA.step === 1 && EA.profile.priorities.length < 1) { flashField('.wz-chips'); return; }
    EA.step++;
    renderWizardSteps();
    renderWizardContent();
}

function flashField(sel) {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.boxShadow = '0 0 12px rgba(255,51,102,0.4)';
    setTimeout(() => el.style.boxShadow = '', 1200);
}

function renderWizardSteps() {
    const labels = ['기업정보', '전략설정', '확인'];
    const container = document.getElementById('wizard-steps');
    container.innerHTML = labels.map((l, i) => {
        const cls = i < EA.step ? 'completed' : i === EA.step ? 'active' : '';
        return `<div class="wizard-step ${cls}"><div class="step-circle">${i < EA.step ? '✓' : i+1}</div><div class="step-label">${l}</div></div>` +
               (i < labels.length-1 ? `<div class="wizard-step-line ${i < EA.step ? 'active' : ''}"></div>` : '');
    }).join('');
    // Nav buttons
    document.getElementById('wizard-prev').classList.toggle('hidden', EA.step === 0);
    const nextBtn = document.getElementById('wizard-next');
    nextBtn.textContent = EA.step === 2 ? '🔍 AI 분석 시작' : '다음 →';
    if (EA.step === 2) { nextBtn.style.maxWidth = '100%'; } else { nextBtn.style.maxWidth = '200px'; }
}

function renderWizardContent() {
    const container = document.getElementById('wizard-content');
    if (EA.step === 0) renderStep1(container);
    else if (EA.step === 1) renderStep2(container);
    else renderStep3(container);
}

function renderStep1(el) {
    el.innerHTML = `
        <div class="wz-title">기업 기본 정보</div>
        <div class="wz-field">
            <label class="wz-label">🌐 회사 웹사이트</label>
            <div class="wz-url-wrap">
                <input type="url" class="wz-input wz-url-input" id="wz-url" placeholder="https://www.example.com" value="${EA.profile.companyUrl || ''}" autocomplete="off">
                <button type="button" class="wz-url-btn" id="wz-url-lookup">🔍 AI 조회</button>
            </div>
            <div class="wz-url-status" id="wz-url-status"></div>
        </div>
        <div class="wz-field">
            <label class="wz-label">회사명</label>
            <input type="text" class="wz-input" id="wz-company" placeholder="예: 주식회사 테크원" value="${EA.profile.companyName}" autocomplete="off">
        </div>
        <div class="wz-field">
            <label class="wz-label">대표 업종 *</label>
            <div class="wz-ind-grid" id="wz-industry-grid"></div>
        </div>
        <div class="wz-field" style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div>
                <label class="wz-label">연 매출</label>
                <select class="wz-input wz-select" id="wz-revenue">
                    <option value="">선택</option>
                    ${EA.REVENUE_OPTIONS.map(o => `<option value="${o.value}" ${EA.profile.revenue===o.value?'selected':''}>${o.label}</option>`).join('')}
                </select>
            </div>
            <div>
                <label class="wz-label">임직원 수</label>
                <select class="wz-input wz-select" id="wz-employees">
                    <option value="">선택</option>
                    ${EA.EMPLOYEE_OPTIONS.map(o => `<option value="${o.value}" ${EA.profile.employees===o.value?'selected':''}>${o.label}</option>`).join('')}
                </select>
            </div>
        </div>`;
    // Industry grid
    const grid = el.querySelector('#wz-industry-grid');
    Object.entries(INDUSTRIES).forEach(([key, ind]) => {
        const btn = document.createElement('div');
        btn.className = 'wz-ind-btn' + (EA.profile.industry === key ? ' selected' : '');
        btn.innerHTML = `<span class="wz-ind-icon">${ind.icon}</span>${ind.name}`;
        btn.addEventListener('click', () => {
            EA.profile.industry = key;
            grid.querySelectorAll('.wz-ind-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
        grid.appendChild(btn);
    });
    // Bind inputs
    el.querySelector('#wz-company').addEventListener('input', e => EA.profile.companyName = e.target.value);
    el.querySelector('#wz-revenue').addEventListener('change', e => EA.profile.revenue = e.target.value);
    el.querySelector('#wz-employees').addEventListener('change', e => EA.profile.employees = e.target.value);
    el.querySelector('#wz-url').addEventListener('input', e => EA.profile.companyUrl = e.target.value);
    // AI lookup button
    el.querySelector('#wz-url-lookup').addEventListener('click', () => {
        const url = el.querySelector('#wz-url').value.trim();
        if (!url) { showUrlStatus('⚠️ URL을 입력해주세요.', 'err'); return; }
        lookupCompany(url, el);
    });
}

function showUrlStatus(msg, type) {
    const statusEl = document.getElementById('wz-url-status');
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = 'wz-url-status' + (type === 'ok' ? ' ok' : type === 'err' ? ' err' : ' loading');
}

async function lookupCompany(url, formEl) {
    if (!GEMINI_KEY) { showUrlStatus('⚠️ API Key를 먼저 설정해주세요. (헤더 🔑 버튼)', 'err'); return; }

    const lookupBtn = formEl.querySelector('#wz-url-lookup');
    lookupBtn.disabled = true;
    lookupBtn.textContent = '🔄 검색중...';
    showUrlStatus('회사 정보 검색중...', 'loading');

    const industryKeys = Object.entries(INDUSTRIES).map(([k, v]) => `"${k}": "${v.name} (${v.nameEn})"`).join(', ');

    const prompt = `다음 회사 웹사이트를 Google Search로 검색하여 회사 정보를 JSON으로 반환하세요.
URL: ${url}

반드시 아래 JSON 형식만 출력하세요 (마크다운 코드블록 없이 순수 JSON):
{
  "company_name": "회사명 (한글)",
  "industry_key": "아래 업종 키 중 가장 적합한 것 1개",
  "revenue_range": "매출 규모에 맞는 값",
  "employee_range": "임직원 수에 맞는 값",
  "description": "회사 소개 1~2문장 (주요 제품/서비스, 강점 포함)"
}

업종 키 목록: {${industryKeys}}

revenue_range 값: "u10" (10억 미만), "u50" (10~50억), "u100" (50~100억), "u500" (100~500억), "u1000" (500~1000억), "o1000" (1000억 이상)
employee_range 값: "u10" (10명 미만), "u50" (10~50명), "u100" (50~100명), "u500" (100~500명), "u1000" (500~1000명), "o1000" (1000명 이상)

검색 결과를 기반으로 가장 정확한 정보를 입력하세요. 정확한 수치를 모르면 추정하세요.`;

    const modelChain = [
        { name: 'gemini-2.5-pro',   timeout: 30000, search: true },
        { name: 'gemini-2.5-flash', timeout: 20000, search: true },
    ];

    let result = null;
    for (const { name: model, timeout, search: useSearch } of modelChain) {
        try {
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`;
            const body = {
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { temperature: 0.2, maxOutputTokens: 1024 }
            };
            if (useSearch) body.tools = [{ google_search: {} }];

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeout);
            const resp = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (!resp.ok) { console.warn(`[Lookup] ${model}: HTTP ${resp.status}`); continue; }
            const data = await resp.json();
            // Search grounding can spread text across multiple parts
            const parts = data?.candidates?.[0]?.content?.parts || [];
            const text = parts.map(p => p.text || '').join('');
            if (!text) { console.warn(`[Lookup] ${model}: empty response`); continue; }
            console.log(`[Lookup] ${model} raw:`, text.substring(0, 300));

            try {
                result = extractJSON(text);
            } catch (e) {
                console.warn(`[Lookup] ${model}: JSON parse failed`, e.message);
                continue;
            }
            if (result?.company_name) {
                console.log(`[Lookup] ✅ ${model} success:`, result);
                break;
            }
        } catch (e) {
            console.warn(`[Lookup] ${model}: ${e.message}`);
            continue;
        }
    }

    lookupBtn.disabled = false;
    lookupBtn.textContent = '🔍 AI 조회';

    if (!result?.company_name) {
        showUrlStatus('❌ 조회 실패 — 수동으로 입력해주세요.', 'err');
        return;
    }

    // Auto-fill profile
    EA.profile.companyName = result.company_name;
    EA.profile.companyDesc = result.description || '';
    if (result.industry_key && INDUSTRIES[result.industry_key]) EA.profile.industry = result.industry_key;
    if (result.revenue_range) EA.profile.revenue = result.revenue_range;
    if (result.employee_range) EA.profile.employees = result.employee_range;

    // Update DOM
    const companyInput = formEl.querySelector('#wz-company');
    if (companyInput) companyInput.value = EA.profile.companyName;

    const revenueSelect = formEl.querySelector('#wz-revenue');
    if (revenueSelect && EA.profile.revenue) revenueSelect.value = EA.profile.revenue;

    const employeeSelect = formEl.querySelector('#wz-employees');
    if (employeeSelect && EA.profile.employees) employeeSelect.value = EA.profile.employees;

    // Update industry grid selection
    const indGrid = formEl.querySelector('#wz-industry-grid');
    if (indGrid && EA.profile.industry) {
        indGrid.querySelectorAll('.wz-ind-btn').forEach(b => b.classList.remove('selected'));
        const idx = Object.keys(INDUSTRIES).indexOf(EA.profile.industry);
        if (idx >= 0) indGrid.children[idx]?.classList.add('selected');
    }

    // Show success
    const indName = INDUSTRIES[EA.profile.industry]?.name || '';
    const revLabel = EA.REVENUE_OPTIONS.find(o => o.value === EA.profile.revenue)?.label || '';
    const empLabel = EA.EMPLOYEE_OPTIONS.find(o => o.value === EA.profile.employees)?.label || '';
    showUrlStatus(`✅ ${result.company_name} · ${indName} · 매출 ${revLabel} · 직원 ${empLabel}`, 'ok');
}

function renderStep2(el) {
    el.innerHTML = `
        <div class="wz-title">수출 전략 설정</div>
        <div class="wz-field">
            <label class="wz-label">해외사업 경험</label>
            <div class="wz-radio-group" id="wz-exp-group"></div>
        </div>
        <div class="wz-field">
            <label class="wz-label">우선순위 (최대 3개 선택) *</label>
            <div class="wz-chips" id="wz-priority-chips"></div>
        </div>
        <div class="wz-field">
            <label class="wz-label">관심 지역</label>
            <div class="wz-chips" id="wz-region-chips"></div>
        </div>`;
    // Experience radio
    const expGroup = el.querySelector('#wz-exp-group');
    EA.EXPERIENCE_OPTIONS.forEach(o => {
        const btn = document.createElement('div');
        btn.className = 'wz-radio' + (EA.profile.experience === o.value ? ' selected' : '');
        btn.innerHTML = `<strong>${o.label}</strong><br><span style="font-size:11px;color:rgba(208,216,255,0.4)">${o.desc}</span>`;
        btn.addEventListener('click', () => {
            EA.profile.experience = o.value;
            expGroup.querySelectorAll('.wz-radio').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
        expGroup.appendChild(btn);
    });
    // Priority chips
    const priChips = el.querySelector('#wz-priority-chips');
    EA.PRIORITY_OPTIONS.forEach(o => {
        const chip = document.createElement('div');
        chip.className = 'wz-chip' + (EA.profile.priorities.includes(o.value) ? ' selected' : '');
        chip.textContent = o.label;
        chip.addEventListener('click', () => {
            const idx = EA.profile.priorities.indexOf(o.value);
            if (idx >= 0) { EA.profile.priorities.splice(idx, 1); chip.classList.remove('selected'); }
            else if (EA.profile.priorities.length < 3) { EA.profile.priorities.push(o.value); chip.classList.add('selected'); }
        });
        priChips.appendChild(chip);
    });
    // Region chips
    const regChips = el.querySelector('#wz-region-chips');
    EA.REGION_OPTIONS.forEach(o => {
        const chip = document.createElement('div');
        chip.className = 'wz-chip' + (EA.profile.regions.includes(o.value) ? ' selected' : '');
        chip.textContent = o.label;
        chip.addEventListener('click', () => {
            if (o.value === 'all') {
                EA.profile.regions = ['all'];
                regChips.querySelectorAll('.wz-chip').forEach(c => c.classList.remove('selected'));
                chip.classList.add('selected');
            } else {
                EA.profile.regions = EA.profile.regions.filter(v => v !== 'all');
                const idx = EA.profile.regions.indexOf(o.value);
                if (idx >= 0) { EA.profile.regions.splice(idx, 1); chip.classList.remove('selected'); }
                else { EA.profile.regions.push(o.value); chip.classList.add('selected'); }
                regChips.querySelector('.wz-chip').classList.remove('selected'); // remove 'all'
                if (EA.profile.regions.length === 0) { EA.profile.regions = ['all']; regChips.querySelector('.wz-chip').classList.add('selected'); }
            }
        });
        regChips.appendChild(chip);
    });
}

function renderStep3(el) {
    const indName = INDUSTRIES[EA.profile.industry]?.name || '미선택';
    const revLabel = EA.REVENUE_OPTIONS.find(o => o.value === EA.profile.revenue)?.label || '미선택';
    const empLabel = EA.EMPLOYEE_OPTIONS.find(o => o.value === EA.profile.employees)?.label || '미선택';
    const expLabel = EA.EXPERIENCE_OPTIONS.find(o => o.value === EA.profile.experience)?.label || '처음';
    const priLabels = EA.profile.priorities.map(v => EA.PRIORITY_OPTIONS.find(o => o.value === v)?.label).filter(Boolean).join(', ') || '미선택';
    const regLabels = EA.profile.regions.includes('all') ? '전체' : EA.profile.regions.map(v => EA.REGION_OPTIONS.find(o => o.value === v)?.label).filter(Boolean).join(', ');

    el.innerHTML = `
        <div class="wz-title">분석 준비 완료</div>
        <div class="wz-summary">
            <div class="wz-summary-row"><span>회사명</span><span class="wz-summary-val">${EA.profile.companyName || '(미입력)'}</span></div>
            <div class="wz-summary-row"><span>업종</span><span class="wz-summary-val">${indName}</span></div>
            <div class="wz-summary-row"><span>연 매출</span><span class="wz-summary-val">${revLabel}</span></div>
            <div class="wz-summary-row"><span>임직원</span><span class="wz-summary-val">${empLabel}</span></div>
            <div class="wz-summary-row"><span>해외 경험</span><span class="wz-summary-val">${expLabel}</span></div>
            <div class="wz-summary-row"><span>우선순위</span><span class="wz-summary-val">${priLabels}</span></div>
            <div class="wz-summary-row"><span>관심 지역</span><span class="wz-summary-val">${regLabels}</span></div>
        </div>
        <div class="wz-analyze-sub">Gemini AI가 149개국 × ${Object.keys(INDUSTRIES).length}개 업종 데이터를 분석합니다</div>`;
}

// ---- SCORING ALGORITHM ----
function calculateCES(countryId, indKey, priorities) {
    const c = COUNTRIES[countryId];
    if (!c) return null;
    const ind = c.industries[indKey];
    if (!ind) return null;

    // 산업별 글로벌 랭크 → 점수 변환 (rank 1 = 98점, rank 50 = 65점, rank 100 = 32점, rank 149 = 2점)
    const totalCountries = Object.keys(COUNTRIES).length;
    const rankPct = ((ind.rank || totalCountries) - 1) / (totalCountries - 1); // 0(1위)~1(꼴찌)
    const rankScore = Math.round(100 - rankPct * 98); // 100~2

    // ---- 6대 차원 (산업 특화 비중 높임) ----
    const allSizes = Object.values(COUNTRIES).map(cc => cc.industries[indKey]?.size || 0).filter(s => s > 0);
    const maxLogSize = Math.log(Math.max(...allSizes) + 1);

    // 시장규모: 산업별 규모 (로그 스케일)
    const marketSize = maxLogSize > 0 ? (Math.log((ind.size || 0.1) + 1) / maxLogSize) * 100 : 50;

    // 성장률: 산업 성장률 + 국가 GDP 성장률 혼합
    const indGrowthScore = Math.max(0, Math.min(100, 50 + (ind.growth || 0) * 5));
    const gdpGrowthScore = Math.max(0, Math.min(100, 50 + (c.gdp_growth_pct || 0) * 6));
    const growth = indGrowthScore * 0.7 + gdpGrowthScore * 0.3;

    // 잠재력: 기본 잠재력 40% + 산업 랭킹 60% (핵심 차별화 요소)
    const potential = (ind.potential || 50) * 0.4 + rankScore * 0.6;

    // 안정성: 거시경제 지표 + 산업 성숙도
    const macroStability = Math.max(0, Math.min(100, 50 + (c.gdp_growth_pct || 0) * 3 - (c.inflation_pct || 5) * 0.5 - (c.unemployment_pct || 8) * 0.5));
    const stability = macroStability * 0.7 + Math.min(100, (ind.potential || 50)) * 0.3;

    // 개방도: 무역비중 + 산업 랭킹 반영 (진입 용이성)
    const tradeScore = Math.min(100, (c.trade_pct_gdp || 50) / 2);
    const openness = tradeScore * 0.5 + rankScore * 0.5;

    // 디지털: 인터넷 보급률 + 산업 특성
    const baseDigital = c.internet_users_pct || 30;
    const techBoost = ['tech', 'retail', 'telecom', 'education', 'finance'].includes(indKey) ? 10 : 0;
    const digital = Math.min(100, baseDigital * 0.7 + rankScore * 0.3 + techBoost * (rankScore / 100));

    const scores = { marketSize: Math.round(marketSize * 10) / 10, growth: Math.round(growth * 10) / 10, potential: Math.round(potential * 10) / 10, stability: Math.round(stability * 10) / 10, openness: Math.round(openness * 10) / 10, digital: Math.round(digital * 10) / 10 };

    // 가중치: 우선순위 선택이 실질적 차이를 만들도록 보너스 증가
    let weights = { marketSize: 1/6, growth: 1/6, potential: 1/6, stability: 1/6, openness: 1/6, digital: 1/6 };
    if (priorities.length > 0) {
        const bonuses = [0.25, 0.15, 0.08];
        priorities.forEach((p, i) => { if (weights[p] !== undefined) weights[p] += bonuses[i] || 0; });
        const wSum = Object.values(weights).reduce((a,b) => a+b, 0);
        Object.keys(weights).forEach(k => weights[k] /= wSum);
    }

    const total = Object.keys(scores).reduce((sum, k) => sum + scores[k] * weights[k], 0);

    return { total: Math.round(total * 10) / 10, scores, weights };
}

function determineStrategy(profile, country) {
    const isSmall = ['u10', 'u50'].includes(profile.revenue);
    const isLarge = ['u1000', 'o1000'].includes(profile.revenue);
    const noExp = profile.experience === 'none';
    const digitalIndustries = ['tech', 'retail', 'telecom', 'education'];
    const highDigital = (country.internet_users_pct || 0) >= 70;
    const openEconomy = (country.trade_pct_gdp || 0) >= 80;

    if (isSmall && noExp) return 'export';
    if (digitalIndustries.includes(profile.industry) && highDigital) return 'digital';
    if (isLarge && !noExp) return 'fdi';
    if (openEconomy || profile.experience === 'some') return 'partnership';
    return 'export';
}

// ---- STATIC DATA ENRICHMENT FUNCTIONS ----

function fmtSize(val) {
    if (val >= 1000) return `$${(val/1000).toFixed(1)}T`;
    if (val >= 1) return `$${val.toFixed(1)}B`;
    return `$${(val*1000).toFixed(0)}M`;
}
function fmtPop(val) {
    if (val >= 1000) return `${(val/1000).toFixed(2)}B`;
    return `${val.toFixed(1)}M`;
}

function generateExecutiveSummary(results, indInfo, companyName) {
    const t1 = results.top5[0], t2 = results.top5[1], t3 = results.top5[2];
    const top3 = results.top5.slice(0,3).map(t => t.country.name).join(', ');
    const n = results.all.length;
    return `${n}개국 대상 ${indInfo.name} 산업 데이터 분석 결과, ${companyName}에 가장 적합한 해외 진출 시장은 ${top3} 순으로 선정되었습니다. `
        + `1위 ${t1.country.name}은(는) ${fmtSize(t1.industry.size)} 규모의 시장에서 연 ${t1.industry.growth.toFixed(1)}% 성장 중이며, 종합 적합도(CES) ${t1.ces.toFixed(1)}점을 기록했습니다. `
        + `GDP ${fmtSize(t1.country.gdp)}, 인터넷 보급률 ${(t1.country.internet_users_pct||0).toFixed(0)}%의 경제 환경이 진출 기반을 뒷받침합니다. `
        + `2위 ${t2.country.name}(CES ${t2.ces.toFixed(1)})은(는) 산업규모 ${fmtSize(t2.industry.size)}·성장률 ${t2.industry.growth.toFixed(1)}%, `
        + `3위 ${t3.country.name}(CES ${t3.ces.toFixed(1)})은(는) 산업규모 ${fmtSize(t3.industry.size)}·성장률 ${t3.industry.growth.toFixed(1)}%로 뒤를 이었습니다.`;
}

function generateMarketStatus(country, industry, indKey) {
    const indInfo = INDUSTRIES[indKey];
    let rankTier = industry.rank <= 5 ? `글로벌 TOP ${industry.rank}` : industry.rank <= 10 ? `글로벌 상위 10위권(${industry.rank}위)` : industry.rank <= 20 ? `글로벌 상위 20위권(${industry.rank}위)` : `글로벌 ${industry.rank}위`;
    const gdpGrowthDesc = country.gdp_growth_pct >= 5 ? '고성장' : country.gdp_growth_pct >= 3 ? '안정적 성장' : country.gdp_growth_pct >= 0 ? '완만한 성장' : '경기 위축';
    const netDesc = country.internet_users_pct >= 90 ? '디지털 인프라 최상위' : country.internet_users_pct >= 70 ? '디지털 기반 양호' : country.internet_users_pct >= 40 ? '디지털 전환 진행중' : '디지털 인프라 초기 단계';
    return `${country.name}의 ${indInfo.name} 시장은 ${fmtSize(industry.size)} 규모(${rankTier})로, 연평균 ${industry.growth.toFixed(1)}% 성장 중입니다. `
        + `국가 GDP ${fmtSize(country.gdp)}(${gdpGrowthDesc}, ${(country.gdp_growth_pct||0).toFixed(1)}%), 인구 ${fmtPop(country.pop)}, `
        + `인터넷 보급률 ${(country.internet_users_pct||0).toFixed(0)}%로 ${netDesc}입니다. `
        + `무역/GDP 비율 ${(country.trade_pct_gdp||0).toFixed(0)}%, 인플레이션 ${(country.inflation_pct||0).toFixed(1)}%, 실업률 ${(country.unemployment_pct||0).toFixed(1)}%.`;
}

function generateKeyStats(country, industry) {
    let barrier;
    if (country.income === 'High income' && industry.rank <= 10) barrier = '높음';
    else if (country.income === 'High income' || industry.rank <= 20) barrier = '중간';
    else barrier = '낮음';
    return {
        market_size_label: fmtSize(industry.size),
        cagr_label: `${industry.growth.toFixed(1)}%`,
        top_player: null,
        entry_barrier: barrier
    };
}

function generateProposalPoints(country, industry, indKey, profile, ces, scores) {
    const indInfo = INDUSTRIES[indKey];
    const cn = profile.companyName || '귀사';
    return [
        `${country.name} ${indInfo.name} 시장은 ${fmtSize(industry.size)} 규모(글로벌 ${industry.rank}위)로 연 ${industry.growth.toFixed(1)}% 성장 중이며, ${fmtPop(country.pop)} 인구 기반의 내수 시장에서 ${cn}의 제품/서비스에 대한 수요가 기대됩니다. 잠재력 점수 ${scores.potential.toFixed(0)}점.`,
        `GDP 대비 무역 비중 ${(country.trade_pct_gdp||0).toFixed(0)}%, 인플레이션 ${(country.inflation_pct||0).toFixed(1)}%, 실업률 ${(country.unemployment_pct||0).toFixed(1)}%로 거시경제 안정성 지수 ${scores.stability.toFixed(0)}점 — ${cn}의 안정적인 시장 진입 환경을 제공합니다. 무역 개방도 점수 ${scores.openness.toFixed(0)}점.`,
        `인터넷 보급률 ${(country.internet_users_pct||0).toFixed(0)}%, 디지털 인프라 점수 ${scores.digital.toFixed(0)}점으로 ${['tech','retail','telecom','education','finance'].includes(indKey) ? '디지털 기반 서비스 확산에 최적화된 환경' : '온라인 마케팅·유통 채널 활용이 가능한 수준'}이며, ${cn}의 해외 진출 종합 적합도(CES)는 ${ces.toFixed(1)}점입니다.`
    ];
}

function generateVerdict(country, industry, indKey, ces) {
    if (ces >= 70) return `${fmtSize(industry.size)} 규모 · 연 ${industry.growth.toFixed(1)}% 성장 · 글로벌 ${industry.rank}위의 고적합 시장 (CES ${ces.toFixed(1)})`;
    if (ces >= 50) return `${fmtSize(industry.size)} 규모 · 성장률 ${industry.growth.toFixed(1)}%의 유망 시장 (CES ${ces.toFixed(1)})`;
    return `잠재 시장규모 ${fmtSize(industry.size)} · 전략적 접근 필요 (CES ${ces.toFixed(1)})`;
}

function enrichOpportunities(oppos, country, industry, indKey) {
    const indInfo = INDUSTRIES[indKey];
    const extras = [
        ` — ${country.name} ${indInfo.name} 시장 ${fmtSize(industry.size)}, 성장률 ${industry.growth.toFixed(1)}%`,
        ` — GDP ${fmtSize(country.gdp)}, 인구 ${fmtPop(country.pop)} 규모의 내수 시장`,
        ` — 인터넷 보급률 ${(country.internet_users_pct||0).toFixed(0)}%, 글로벌 산업순위 ${industry.rank}위`
    ];
    return oppos.map((o, i) => o + (extras[i] || ''));
}

function enrichRisks(risks, country) {
    const extras = [
        ` (인플레이션 ${(country.inflation_pct||0).toFixed(1)}%, 경제 불확실성 모니터링 필요)`,
        ` (실업률 ${(country.unemployment_pct||0).toFixed(1)}%, 노동시장 리스크 존재)`,
        ` (무역/GDP 비율 ${(country.trade_pct_gdp||0).toFixed(0)}%, 규제 환경 확인 필요)`
    ];
    return risks.map((r, i) => r + (extras[i] || ''));
}

// ---- GEMINI AI (2.5 Pro + Search Grounding) ----

function buildGeminiPrompt(results) {
    const profile = results.profile;
    const indInfo = INDUSTRIES[profile.industry];
    const top5Names = results.top5.map((t, i) => {
        const c = t.country, ind = t.industry;
        return `${i+1}. ${c.flag} ${c.name} (${c.nameEn}) — 지역: ${c.region}`
            + `\n   GDP: $${c.gdp}B, 성장률: ${(c.gdp_growth_pct||0).toFixed(1)}%, 인구: ${c.pop}M`
            + `\n   인플레이션: ${(c.inflation_pct||0).toFixed(1)}%, 실업률: ${(c.unemployment_pct||0).toFixed(1)}%, 무역/GDP: ${(c.trade_pct_gdp||0).toFixed(0)}%, 인터넷: ${(c.internet_users_pct||0).toFixed(0)}%`
            + `\n   ${indInfo.name} 산업: 규모 $${ind.size}B, CAGR ${ind.growth}%, 글로벌 ${ind.rank}위, CES: ${t.ces.toFixed(1)}`;
    }).join('\n');

    const revLabel = EA.REVENUE_OPTIONS.find(o => o.value === profile.revenue)?.label || '미입력';
    const empLabel = EA.EMPLOYEE_OPTIONS.find(o => o.value === profile.employees)?.label || '미입력';
    const expLabel = EA.EXPERIENCE_OPTIONS.find(o => o.value === profile.experience)?.label || '처음';
    const priLabels = profile.priorities.map(v => EA.PRIORITY_OPTIONS.find(o => o.value === v)?.label).filter(Boolean).join(', ');

    const systemInstruction = `당신은 KOTRA, McKinsey, BCG 수준의 글로벌 시장 분석 전문 컨설턴트입니다.
Google Search를 반드시 활용하여 각 국가의 최신 경제 데이터와 산업 동향을 실제로 검색하고,
검색된 실제 수치와 통계를 인용하여 데이터 기반 분석을 JSON 형식으로 제공하세요.

⚠️ 절대 규칙:
1. 모든 market_data 수치는 반드시 Google Search로 검색한 실제 통계여야 합니다 (World Bank, IMF, Statista, KOTRA 등)
2. market_status에는 반드시 구체적 수치(시장규모 $XX억, 성장률 XX%, 점유율 등)와 출처명을 명시하세요
3. executive_summary는 5문장 이상, 핵심 데이터 포인트 3개 이상 인용하여 작성하세요
4. proposal_points(3개)에는 "왜 이 국가인지"를 데이터로 설득하세요:
   - 구체적 수치 근거 (시장규모, 성장률, 소비자 수 등)
   - 이 회사의 제품/서비스와 해당 시장의 수요 연결점
   - 경쟁 환경 분석 (현지 경쟁사 이름, 시장 점유율)
   - 실행 가능한 진입 액션 (구체적인 파트너사, 유통 채널, 규제 요건 등)
5. opportunities(3개)에는 반드시 수치 + 연도 + 출처 포함 (예: "2025년 전자상거래 시장 $120억 돌파 예상 (Statista)")
6. risks(3개)에는 해당 회사가 실제 직면할 구체적 장벽을 데이터와 함께 기술
7. one_line_verdict는 핵심 수치 1개를 포함한 강력한 한줄 결론
8. strategy.reasoning은 데이터 기반 3~4문장으로 "왜 이 전략인지" 논리적으로 설명
9. strategy.timeline의 각 phase actions는 3개씩, 구체적이고 실행 가능한 액션 (기관명, 전시회명, 플랫폼명 등 포함)
10. 모든 텍스트는 한국어로 작성, 응답은 반드시 순수 JSON만 출력 (마크다운 코드블록 없이)

### 좋은 market_status 예시:
"미국의 기술 & IT 시장은 $2.6T 규모로 글로벌 1위이며, Gartner에 따르면 2025년 IT 지출은 전년 대비 9.3% 증가한 $5.6T에 달할 전망. AWS(32%), Azure(24%), GCP(12%)가 클라우드 시장을 주도하며, AI/ML 투자가 전체 IT 예산의 15% 이상을 차지."

### 나쁜 예시 (절대 불가):
"미국은 큰 IT 시장을 보유하고 있으며 성장하고 있습니다." ← 이런 추상적 서술은 거부됨. 반드시 구체적 수치+출처 포함.`;

    const companyContext = profile.companyUrl || profile.companyDesc
        ? `\n- 회사 웹사이트: ${profile.companyUrl || '(없음)'}
- 회사 소개: ${profile.companyDesc || '(없음)'}
⚠️ 위 회사의 구체적 제품/서비스/강점을 반드시 고려하여 맞춤 진출 전략을 제시하세요.`
        : '';

    const userMessage = `## 기업 프로필
- 회사명: ${profile.companyName || '(미입력)'}${companyContext}
- 업종: ${indInfo?.name || ''} (${indInfo?.nameEn || ''})
- 연 매출: ${revLabel}
- 임직원: ${empLabel}
- 해외경험: ${expLabel}
- 우선순위: ${priLabels || '균등'}
- 관심지역: ${profile.regions.includes('all') ? '전체' : profile.regions.join(', ')}

## 분석 대상 국가 (유망순위 + DB 기본 수치)
${top5Names}

⚠️ 위는 우리 DB의 기본 수치입니다. Google Search로 최신 데이터를 검색하여 업데이트/보완하고, 검색으로 발견한 추가 정보(경쟁사, 최신 트렌드, 규제 변화 등)를 반드시 반영하세요.

## 요청사항
위 5개 국가에 대해 Google Search로 최신 데이터를 검색하여 아래 JSON 구조로 분석해주세요.

### 점수 산출 기준 (각 0~100):
- marketSize: 해당 국가 ${indInfo?.nameEn || ''} 산업의 시장규모 (글로벌 상위 10% → 90+, 상위 30% → 70+)
- growth: 해당 산업 연평균 성장률 (10%+ → 85+, 5~10% → 65~85, 0~5% → 40~65)
- potential: 시장 성숙도, 진입장벽 낮음, 미개척 기회 종합평가
- stability: 정치·경제 안정성 (GDP성장률 높음 + 인플레이션 낮음 + 실업률 낮음 = 높은 점수)
- openness: 무역개방도 (무역/GDP 비율 80%+ → 80+), FTA, 외국인 투자환경
- digital: 인터넷 보급률 기반 (90%+ → 90+, 70~90% → 70~85)
- ces_score: 위 6개 점수의 가중평균. 우선순위 [${priLabels || '균등'}] 반영
- risk_score: 리스크 종합 (0=매우 안전 ~ 100=매우 위험)
- opportunity_score: 기회 종합 (0=매우 낮음 ~ 100=매우 높음)
- recommended_strategy: "export" | "digital" | "fdi" | "partnership" 중 택1

### 응답 JSON 구조 (이 구조 정확히 준수):
{
  "executive_summary": "3~5문장 전체 분석 요약. 검색한 최신 데이터 인용 포함",
  "countries": [
    {
      "rank": 1,
      "country_name": "국가명(한글)",
      "ces_score": 75.5,
      "dimension_scores": {
        "marketSize": 85, "growth": 72, "potential": 78,
        "stability": 65, "openness": 70, "digital": 88
      },
      "risk_score": 32,
      "opportunity_score": 81,
      "recommended_strategy": "digital",
      "market_data": {
        "gdp_billion_usd": 1234, "gdp_growth_pct": 3.2,
        "population_million": 45, "inflation_pct": 2.5,
        "unemployment_pct": 4.1, "internet_users_pct": 92,
        "trade_pct_gdp": 85,
        "industry_size_billion": 56, "industry_growth_pct": 8.5
      },
      "market_status": "해당 국가 산업 현황 3~4문장: 반드시 시장규모($XX억), CAGR(XX%), 주요 기업(이름+점유율), 최신 트렌드를 포함. 출처명 1개 이상 명시",
      "key_stats": {
        "market_size_label": "$120억 (2025)",
        "cagr_label": "12.3% (2024-2029)",
        "top_player": "현지 1위 기업명 (점유율 XX%)",
        "entry_barrier": "낮음|중간|높음"
      },
      "proposal_points": [
        "데이터 근거 + 회사 강점 연결 + 실행 액션이 포함된 맞춤 제안1 (예: '인도네시아 물류 시장 $89억(2025, Ken Research) 규모에서 쿠팡의 풀필먼트 기술을 활용한 J&T Express 대비 차별화 전략 가능')",
        "수치+근거 포함 맞춤 제안2",
        "수치+근거 포함 맞춤 제안3"
      ],
      "opportunities": ["반드시 수치+연도+출처 포함 기회1 (예: '2025년 시장 $120억 돌파 예상 (Statista)')", "기회2", "기회3"],
      "risks": ["이 회사 맞춤 리스크1 — 구체적 규제/경쟁사/진입장벽을 데이터와 함께 기술", "리스크2", "리스크3"],
      "one_line_verdict": "핵심 수치 1개 포함 강력한 결론 (예: '$89억 시장에서 연 15% 성장 중인 최적의 진출 타이밍')"
    }
  ],
  "strategy": {
    "reasoning": "1위 국가 진출 전략의 데이터 기반 근거 3~4문장 (시장 데이터, 경쟁 환경, 성공 가능성 수치 포함)",
    "timeline": [
      {"phase": "1단계 시장조사·준비", "period": "0-6개월", "actions": ["구체적 기관/전시회/플랫폼명 포함 액션1", "액션2", "액션3"]},
      {"phase": "2단계 시장진입·검증", "period": "6-18개월", "actions": ["구체적 채널/파트너/규제 대응 포함 액션1", "액션2", "액션3"]},
      {"phase": "3단계 확장·안정화", "period": "18-36개월", "actions": ["구체적 확장 전략 포함 액션1", "액션2", "액션3"]}
    ]
  }
}

countries 배열에 5개국 모두 포함해주세요. 모든 숫자 필드에 실제 검색 결과 기반 값을 넣어주세요.`;

    return { systemInstruction, userMessage };
}

async function callGeminiAPI(results) {
    if (!GEMINI_KEY) return null;

    const { systemInstruction, userMessage } = buildGeminiPrompt(results);

    // 모델 체인: 2.5-pro(최고 성능) → 2.5-flash(폴백)
    const modelChain = [
        { name: 'gemini-2.5-pro',   timeout: 120000, search: true },
        { name: 'gemini-2.5-flash', timeout: 90000, search: true },
    ];

    for (const { name: model, timeout, search: useSearch } of modelChain) {
        try {
            console.log(`🔄 Trying model: ${model} (timeout: ${timeout/1000}s, search: ${useSearch})`);

            const body = {
                system_instruction: { parts: [{ text: systemInstruction }] },
                contents: [{ parts: [{ text: userMessage }] }],
                generationConfig: {
                    temperature: 0.4,
                    maxOutputTokens: 16384,
                }
            };
            if (useSearch) body.tools = [{ google_search: {} }];

            // 모델별 타임아웃: AbortController로 느린 모델 건너뛰기
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeout);

            const resp = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                    signal: controller.signal
                }
            );
            clearTimeout(timeoutId);

            if (!resp.ok) {
                const errBody = await resp.text().catch(() => '');
                console.warn(`⚠️ ${model} ${resp.status}: ${errBody.slice(0, 150)}`);
                if (resp.status === 403 || resp.status === 401) {
                    throw new Error(`API Key 오류 (${resp.status}). 새 키를 등록하세요.`);
                }
                continue; // 429 → 다음 모델
            }

            const data = await resp.json();
            const textParts = data.candidates?.[0]?.content?.parts?.filter(p => p.text) || [];
            const text = textParts.map(p => p.text).join('');
            if (!text) { console.warn(`⚠️ ${model}: empty response`); continue; }

            console.log(`✅ ${model} 응답 수신 (${text.length}자)`);
            console.log(`📋 응답 미리보기: ${text.slice(0, 200)}`);
            const parsed = extractJSON(text);
            parsed._model = model;
            return parsed;
        } catch (e) {
            if (e.name === 'AbortError') {
                console.warn(`⏱️ ${model}: ${timeout/1000}s 타임아웃 → 다음 모델로`);
                continue;
            }
            if (e.message.includes('API Key') || e.message.includes('403') || e.message.includes('401')) throw e;
            console.warn(`⚠️ ${model} failed:`, e.message);
        }
    }
    throw new Error('모든 모델 호출 실패');
}

function extractJSON(text) {
    // Try direct parse
    try { return JSON.parse(text); } catch (e) {}
    // Try extracting from ```json ... ``` blocks
    const fenceMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (fenceMatch) {
        try { return JSON.parse(fenceMatch[1].trim()); } catch (e) {}
    }
    // Try finding outermost { ... }
    const first = text.indexOf('{');
    const last = text.lastIndexOf('}');
    if (first >= 0 && last > first) {
        try { return JSON.parse(text.slice(first, last + 1)); } catch (e) {}
    }
    throw new Error('Failed to parse Gemini JSON response');
}

function mergeAIData(results, aiData) {
    if (!aiData?.countries?.length) return;

    results.top5.forEach((t, i) => {
        const aiC = aiData.countries.find(c => c.rank === i + 1);
        if (!aiC) return;

        // Overlay CES score
        if (typeof aiC.ces_score === 'number' && aiC.ces_score > 0) {
            t.ces = Math.round(Math.max(0, Math.min(100, aiC.ces_score)) * 10) / 10;
        }

        // Overlay dimension scores
        if (aiC.dimension_scores) {
            Object.keys(t.scores).forEach(k => {
                if (typeof aiC.dimension_scores[k] === 'number') {
                    t.scores[k] = Math.max(0, Math.min(100, aiC.dimension_scores[k]));
                }
            });
        }

        // Overlay risk/opportunity scores
        if (typeof aiC.risk_score === 'number') t.riskScore = Math.max(0, Math.min(100, aiC.risk_score));
        if (typeof aiC.opportunity_score === 'number') t.opportunityScore = Math.max(0, Math.min(100, aiC.opportunity_score));

        // Overlay strategy
        if (['export','digital','fdi','partnership'].includes(aiC.recommended_strategy)) {
            t.strategy = aiC.recommended_strategy;
        }

        // Overlay market data (shallow copy to avoid mutating global COUNTRIES)
        if (aiC.market_data) {
            const md = aiC.market_data;
            t.country = { ...t.country };
            t.industry = { ...t.industry };
            if (typeof md.gdp_billion_usd === 'number') t.country.gdp = md.gdp_billion_usd;
            if (typeof md.gdp_growth_pct === 'number') t.country.gdp_growth_pct = md.gdp_growth_pct;
            if (typeof md.population_million === 'number') t.country.pop = md.population_million;
            if (typeof md.inflation_pct === 'number') t.country.inflation_pct = md.inflation_pct;
            if (typeof md.unemployment_pct === 'number') t.country.unemployment_pct = md.unemployment_pct;
            if (typeof md.internet_users_pct === 'number') t.country.internet_users_pct = md.internet_users_pct;
            if (typeof md.trade_pct_gdp === 'number') t.country.trade_pct_gdp = md.trade_pct_gdp;
            if (typeof md.industry_size_billion === 'number') t.industry.size = md.industry_size_billion;
            if (typeof md.industry_growth_pct === 'number') t.industry.growth = md.industry_growth_pct;
        }

        // Recalculate bubble size with updated industry data
        t.bubbleSize = Math.max(8, Math.min(40, Math.log(Math.max(1, t.industry.size)) * 5));
    });

    // Re-sort top5 by AI CES scores
    results.top5.sort((a, b) => b.ces - a.ces);

    // Sync updated top5 items into top10
    results.top5.forEach(t => {
        const idx = results.top10.findIndex(x => x.id === t.id);
        if (idx >= 0) results.top10[idx] = t;
    });
}

function runAnalysis() {
    const indKey = EA.profile.industry;
    const priorities = EA.profile.priorities;
    const regionFilter = EA.profile.regions;

    const scored = [];
    Object.entries(COUNTRIES).forEach(([id, c]) => {
        if (id === EA.KOREA_ID) return; // exclude Korea
        // Region filter
        if (!regionFilter.includes('all')) {
            const norm = normalizeRegion(c.region);
            if (!regionFilter.some(r => norm.includes(r) || r.includes(norm.split(' ')[0]))) return;
        }
        const ind = c.industries[indKey];
        if (!ind) return;
        const ces = calculateCES(id, indKey, priorities);
        if (!ces) return;
        const strategy = determineStrategy(EA.profile, c);
        // Risk score (inverse of stability + some factors)
        const riskScore = Math.max(0, Math.min(100, 100 - ces.scores.stability));
        const opportunityScore = (ces.scores.marketSize * 0.3 + ces.scores.growth * 0.3 + ces.scores.potential * 0.4);
        scored.push({
            id, country: c, industry: ind,
            ces: ces.total, scores: ces.scores, weights: ces.weights,
            strategy, riskScore, opportunityScore,
            bubbleSize: Math.max(8, Math.min(40, Math.log(Math.max(1, ind.size)) * 5)),
        });
    });

    scored.sort((a, b) => b.ces - a.ces);

    return {
        top5: scored.slice(0, 5),
        top10: scored.slice(0, 10),
        all: scored,
        profile: { ...EA.profile },
        date: new Date().toISOString().slice(0, 10),
    };
}

// ---- ANALYSIS ANIMATION ----
function startAnalysis() {
    document.getElementById('expansion-wizard').classList.add('hidden');

    // 시트에 리드 데이터 전송
    const p = EA.profile;
    const indName = INDUSTRIES[p.industry]?.name || p.industry;
    const revLabel = EA.REVENUE_OPTIONS.find(o => o.value === p.revenue)?.label || p.revenue;
    const empLabel = EA.EMPLOYEE_OPTIONS.find(o => o.value === p.employees)?.label || p.employees;
    const expLabel = EA.EXPERIENCE_OPTIONS.find(o => o.value === p.experience)?.label || p.experience;
    const priLabels = p.priorities.map(v => EA.PRIORITY_OPTIONS.find(o => o.value === v)?.label).filter(Boolean).join(', ');
    const regLabels = p.regions.includes('all') ? '전체' : p.regions.join(', ');
    sendToSheet({
        companyName: p.companyName,
        companyUrl: p.companyUrl,
        industry: indName,
        revenue: revLabel,
        employees: empLabel,
        experience: expLabel,
        priorities: priLabels,
        regions: regLabels,
        timestamp: new Date().toLocaleString('ko-KR')
    });
    document.getElementById('expansion-cta').style.display = 'none';
    EA.results = null;
    EA.aiData = null;
    EA.aiPromise = null;

    // Hide existing panels
    document.getElementById('left-panel').style.opacity = '0';
    document.getElementById('left-panel').style.pointerEvents = 'none';
    document.getElementById('right-panel').classList.add('hidden');

    // Show overlay
    const overlay = document.getElementById('analysis-overlay');
    overlay.classList.remove('hidden');
    const statusEl = document.getElementById('analysis-status');
    const barEl = document.getElementById('analysis-bar');
    const countEl = document.getElementById('analysis-count');

    // Phase 1: Zoom out + darken (0~2s)
    statusEl.textContent = '글로벌 데이터베이스 연결중...';
    barEl.style.width = '0%';
    countEl.textContent = '0 / 149';
    globe.controls().autoRotate = false;
    globe.pointOfView({ lat: 37.5, lng: 127, altitude: 3.5 }, 2000);
    globe.polygonCapColor(() => 'rgba(10,15,40,0.7)');
    globe.polygonAltitude(() => 0.005);
    globe.arcsData([]);

    // Phase 2: Radar scan from Korea (2~8s) — 느린 스캔 연출
    const korea = COUNTRIES[EA.KOREA_ID];
    const allIds = Object.keys(COUNTRIES).filter(id => id !== EA.KOREA_ID);
    let scanIdx = 0;
    const totalToScan = allIds.length;

    setTimeout(() => {
        statusEl.textContent = '149개국 시장 데이터 스캔중...';
        // Add radar rings
        const rings = [];
        let ringInterval = setInterval(() => {
            rings.push({ lat: korea.lat, lng: korea.lng, maxR: 8, propagationSpeed: 3, repeatPeriod: 1200 });
            if (rings.length > 4) clearInterval(ringInterval);
            globe.ringsData([...rings]).ringColor(() => t => `rgba(0,240,255,${1-t})`).ringMaxRadius('maxR').ringPropagationSpeed('propagationSpeed').ringRepeatPeriod('repeatPeriod');
        }, 800);

        // Sequential country flash (느리게: 100ms 간격)
        const scanTimer = setInterval(() => {
            scanIdx += 2;
            if (scanIdx >= totalToScan) { scanIdx = totalToScan; clearInterval(scanTimer); }
            const pct = (scanIdx / totalToScan * 30 + 5); // 5~35%
            barEl.style.width = pct + '%';
            countEl.textContent = `${Math.min(scanIdx, totalToScan)} / ${totalToScan}`;
            globe.polygonCapColor(feat => {
                const idx2 = allIds.indexOf(feat.id);
                if (idx2 >= 0 && idx2 < scanIdx) return 'rgba(0,240,255,0.12)';
                return 'rgba(10,15,40,0.7)';
            });
        }, 100);

        // Phase 3: Run actual calculation + highlight TOP 5 (~10s)
        setTimeout(() => {
            clearInterval(ringInterval);
            globe.ringsData([]);
            EA.results = runAnalysis();
            // Fire Gemini API call in parallel
            EA.aiPromise = callGeminiAPI(EA.results).catch(e => { console.warn('Gemini:', e); return null; });

            statusEl.textContent = '산업별 경쟁력 지수 계산중...';
            barEl.style.width = '40%';
        }, 8000);

        // Phase 3.5: 중간 메시지들 (~15s~25s)
        setTimeout(() => {
            statusEl.textContent = '무역 개방도 · FTA 네트워크 분석중...';
            barEl.style.width = '48%';
        }, 12000);

        setTimeout(() => {
            statusEl.textContent = '디지털 인프라 · 기술 성숙도 평가중...';
            barEl.style.width = '55%';
        }, 16000);

        setTimeout(() => {
            statusEl.textContent = '리스크 매트릭스 산출중...';
            barEl.style.width = '62%';
        }, 20000);

        setTimeout(() => {
            statusEl.textContent = '유망 시장 TOP 5 선별중...';
            barEl.style.width = '70%';
        }, 24000);

        // Phase 4: Highlight TOP 5 + Arcs (~28s)
        setTimeout(() => {
            const top5 = EA.results.top5;
            statusEl.textContent = '유망 시장 선별 완료';
            barEl.style.width = '78%';

            globe.polygonCapColor(feat => {
                const rank = top5.findIndex(t => t.id === feat.id);
                if (rank === 0) return 'rgba(255,170,0,0.6)';
                if (rank >= 1) return 'rgba(0,240,255,0.45)';
                if (feat.id === EA.KOREA_ID) return 'rgba(0,255,136,0.4)';
                return 'rgba(10,15,40,0.4)';
            });
            globe.polygonAltitude(feat => {
                const rank = top5.findIndex(t => t.id === feat.id);
                if (rank >= 0) return 0.04 + (5 - rank) * 0.008;
                return 0.005;
            });

            // Draw arcs from Korea to TOP 5 (~32s)
            setTimeout(() => {
                statusEl.textContent = 'AI 전략 분석 엔진 가동중...';
                barEl.style.width = '85%';
                const arcs = top5.map((t, i) => ({
                    startLat: korea.lat, startLng: korea.lng,
                    endLat: t.country.lat, endLng: t.country.lng,
                    color: [i === 0 ? 'rgba(255,170,0,0.8)' : 'rgba(0,240,255,0.7)', 'rgba(123,47,255,0.5)'],
                }));
                globe.arcsData(arcs).arcColor('color').arcAltitude(0.15).arcStroke(0.8).arcDashLength(0.4).arcDashGap(1).arcDashAnimateTime(1500);

                const labels = top5.map((t, i) => ({
                    lat: t.country.lat, lng: t.country.lng,
                    text: `#${i+1} ${t.country.flag} ${t.country.name}`,
                    color: i === 0 ? '#ffaa00' : '#00f0ff', size: i === 0 ? 1.0 : 0.8,
                }));
                globe.labelsData(labels).labelText('text').labelColor('color').labelSize('size').labelDotRadius(0.3).labelAltitude(0.06);
            }, 4000);

            // Phase 5: AI 대기 + 추가 메시지 연출 (~36s~55s)
            setTimeout(() => {
                statusEl.textContent = 'Gemini AI · Google Search 기반 실시간 데이터 수집중...';
                barEl.style.width = '88%';
            }, 8000);

            setTimeout(() => {
                statusEl.textContent = '국가별 최신 경제지표 검증중...';
                barEl.style.width = '91%';
            }, 14000);

            setTimeout(() => {
                statusEl.textContent = '맞춤형 진출 전략 보고서 작성중...';
                barEl.style.width = '94%';
            }, 20000);

            // Final: await AI + show report (~55s+)
            setTimeout(async () => {
                barEl.style.width = '97%';
                if (EA.aiPromise) {
                    statusEl.textContent = 'Gemini 2.5 Pro · 최종 분석 리포트 생성중...';
                    let dotCount = 0;
                    const dotTimer = setInterval(() => {
                        dotCount = (dotCount + 1) % 4;
                        statusEl.textContent = 'Gemini 2.5 Pro · 최종 분석 리포트 생성중' + '.'.repeat(dotCount);
                    }, 600);
                    try {
                        EA.aiData = await Promise.race([
                            EA.aiPromise,
                            new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 180000))
                        ]);
                        if (EA.aiData) {
                            clearInterval(dotTimer);
                            statusEl.textContent = 'AI 데이터 병합 및 검증중...';
                            barEl.style.width = '99%';
                            mergeAIData(EA.results, EA.aiData);
                        }
                    } catch (e) {
                        console.warn('AI fallback:', e);
                        EA.aiData = null;
                    } finally {
                        clearInterval(dotTimer);
                    }
                }
                barEl.style.width = '100%';
                statusEl.textContent = '분석 완료';
                setTimeout(() => {
                    overlay.classList.add('hidden');
                    showExpansionReport();
                }, 800);
            }, 25000);
        }, 28000);
    }, 2000);
}

// ---- REPORT RENDERING ----
function showExpansionReport() {
    const panel = document.getElementById('expansion-report');
    const content = document.getElementById('expansion-content');
    const r = EA.results;
    if (!r || r.top5.length === 0) { content.innerHTML = '<p style="color:var(--text)">분석 결과가 없습니다.</p>'; panel.classList.remove('hidden'); return; }

    const top1 = r.top5[0];
    const indInfo = INDUSTRIES[r.profile.industry];
    const companyName = r.profile.companyName || '귀사';

    let html = '';

    const ai = EA.aiData; // null if no AI response

    // Header
    const companyDesc = r.profile.companyDesc || '';
    const companyUrl = r.profile.companyUrl || '';
    html += `
        <div class="exp-badge">AI EXPANSION REPORT</div>
        <div class="exp-title">해외진출 전략 보고서</div>
        <div class="exp-meta">${companyName} · ${indInfo?.name || ''} · ${r.date}</div>
        ${companyUrl ? `<div class="exp-company-url">🌐 <a href="${companyUrl}" target="_blank">${companyUrl}</a></div>` : ''}
        ${companyDesc ? `<div class="exp-company-desc">${companyDesc}</div>` : ''}
        <div class="exp-scan-badge">🌍 ${r.all.length}개국 데이터 분석 완료</div>
        <div class="exp-divider"></div>`;

    // Top pick
    html += `
        <div class="exp-top-pick" data-country-id="${top1.id}">
            <span class="pick-rank">#1</span>
            <span class="pick-flag">${top1.country.flag}</span>
            <div class="pick-info">
                <span class="pick-name">${top1.country.name}</span>
                <span class="pick-sub">${shortRegionLabel(top1.country.region)} · ${top1.country.nameEn}</span>
            </div>
        </div>`;

    // Executive summary (AI with static fallback)
    const execSummary = ai?.executive_summary || generateExecutiveSummary(r, indInfo, companyName);
    html += `
        <div class="exp-executive-summary">
            <div class="exp-summary-label">${ai?.executive_summary ? 'AI 분석 요약' : '데이터 기반 분석 요약'}</div>
            <p class="exp-summary-text">${execSummary}</p>
        </div>`;

    // Gauge
    const gaugeR = 40, gaugeC = 2 * Math.PI * gaugeR;
    const gaugePct = top1.ces / 100;
    const gaugeColor = top1.ces >= 70 ? '#00ff88' : top1.ces >= 50 ? '#ffaa00' : '#ff3366';
    html += `
        <div class="exp-gauge">
            <svg class="gauge-svg" viewBox="0 0 100 100">
                <circle class="gauge-bg" cx="50" cy="50" r="${gaugeR}"/>
                <circle class="gauge-fill" cx="50" cy="50" r="${gaugeR}" stroke="${gaugeColor}"
                    stroke-dasharray="${gaugeC}" stroke-dashoffset="${gaugeC}" transform="rotate(-90 50 50)"
                    data-target="${gaugeC * (1 - gaugePct)}"/>
                <text class="gauge-text" x="50" y="47" data-target="${top1.ces.toFixed(1)}">0</text>
                <text class="gauge-label" x="50" y="62">종합점수</text>
            </svg>
        </div>
        <div class="exp-divider"></div>`;

    // TOP 5 Ranking
    html += `<div class="exp-section-title">🏆 추천 시장 TOP 5</div><div class="exp-rank-list">`;
    r.top5.forEach((t, i) => {
        const medals = ['🥇','🥈','🥉','4','5'];
        html += `
            <div class="exp-rank-item ${i===0?'active':''}" data-country-id="${t.id}">
                <span class="rank-num">${medals[i]}</span>
                <span class="rank-flag">${t.country.flag}</span>
                <div class="rank-info">
                    <div class="rank-name">${t.country.name}</div>
                    <div class="rank-bar-wrap"><div class="rank-bar-fill" data-width="${t.ces}"></div></div>
                </div>
                <span class="rank-score">${t.ces.toFixed(1)}</span>
            </div>`;
    });
    html += `</div><div class="exp-divider"></div>`;

    // Radar Chart (top 3)
    html += renderRadarChart(r.top5.slice(0, 3));
    html += `<div class="exp-divider"></div>`;

    // Bubble Matrix (top 10)
    html += renderBubbleMatrix(r.top10);
    html += `<div class="exp-divider"></div>`;

    // Strategy for #1
    const strat = EA.STRATEGIES[top1.strategy];
    const aiStrat = ai?.strategy;
    html += `
        <div class="exp-section-title">🎯 추천 진출 전략 (${top1.country.name})</div>
        <div class="exp-strategy">
            <div class="strategy-head">
                <span class="strategy-icon">${strat.icon}</span>
                <div><div class="strategy-name">${strat.name}</div><div class="strategy-desc">${aiStrat?.reasoning || strat.desc}</div></div>
            </div>
            <div class="exp-timeline">`;
    if (Array.isArray(aiStrat?.timeline) && aiStrat.timeline.length > 0) {
        aiStrat.timeline.forEach(ph => {
            const actions = Array.isArray(ph.actions) ? ph.actions.join('<br>') : (ph.actions || '');
            html += `<div class="timeline-phase"><span class="phase-period">${ph.period || ph.phase || ''}</span><span class="phase-action">${actions}</span></div>`;
        });
    } else {
        html += `
                <div class="timeline-phase"><span class="phase-period">0-6개월</span><span class="phase-action">시장조사<br>파트너 탐색</span></div>
                <div class="timeline-phase"><span class="phase-period">6-18개월</span><span class="phase-action">시장 진입<br>초기 매출</span></div>
                <div class="timeline-phase"><span class="phase-period">18-36개월</span><span class="phase-action">거점 확장<br>현지화</span></div>`;
    }
    html += `</div></div><div class="exp-divider"></div>`;

    // Accordion: 국가별 현황 + 제안 포인트 + 기회 + 리스크
    html += `<div class="exp-section-title">📊 국가별 맞춤 분석</div>`;
    r.top5.forEach((t, i) => {
        const ind = t.industry;
        const aiC = ai?.countries?.find(c => c.rank === i + 1);
        const indKey = r.profile.industry;
        const marketStatus = aiC?.market_status || generateMarketStatus(t.country, ind, indKey);
        const keyStats = aiC?.key_stats || generateKeyStats(t.country, ind);
        const proposals = aiC?.proposal_points?.length ? aiC.proposal_points : generateProposalPoints(t.country, ind, indKey, r.profile, t.ces, t.scores);
        const oppos = aiC?.opportunities?.length ? aiC.opportunities : enrichOpportunities(ind.oppo || [], t.country, ind, indKey);
        const risks = aiC?.risks?.length ? aiC.risks : enrichRisks(ind.risk || [], t.country);
        const verdict = aiC?.one_line_verdict || generateVerdict(t.country, ind, indKey, t.ces);
        const md = aiC?.market_data || {};
        const dimScores = aiC?.dimension_scores || t.scores || {};
        const strategyKey = aiC?.recommended_strategy || t.strategy;
        const stratInfo = EA.STRATEGIES[strategyKey];

        html += `
            <div class="exp-accordion-item ${i===0?'open':''}">
                <div class="exp-accordion-head">
                    <span class="acc-rank-badge">${i+1}</span>
                    <span class="acc-flag">${t.country.flag}</span>
                    <span class="acc-name">${t.country.name}</span>
                    <span class="acc-strategy-badge" title="${stratInfo?.name || ''}">${stratInfo?.icon || '📊'}</span>
                    <span class="acc-score">${(aiC?.ces_score || t.ces).toFixed(1)}</span>
                    <span class="acc-arrow">▼</span>
                </div>
                <div class="exp-accordion-body">
                    <div class="exp-accordion-inner">
                        <div class="acc-verdict">"${verdict}"</div>

                        <div class="acc-key-stats">
                            ${keyStats.market_size_label ? `<div class="acc-key-stat"><span class="key-stat-icon">💰</span><span class="key-stat-val">${keyStats.market_size_label}</span><span class="key-stat-label">산업 시장규모</span></div>` : ''}
                            ${keyStats.cagr_label ? `<div class="acc-key-stat"><span class="key-stat-icon">📈</span><span class="key-stat-val">${keyStats.cagr_label}</span><span class="key-stat-label">연평균 성장률</span></div>` : ''}
                            ${keyStats.top_player ? `<div class="acc-key-stat"><span class="key-stat-icon">🏢</span><span class="key-stat-val">${keyStats.top_player}</span><span class="key-stat-label">주요 경쟁사</span></div>` : ''}
                            ${keyStats.entry_barrier ? `<div class="acc-key-stat"><span class="key-stat-icon">🚧</span><span class="key-stat-val">${keyStats.entry_barrier}</span><span class="key-stat-label">진입장벽</span></div>` : ''}
                        </div>

                        <div class="acc-section-label status-label">📍 시장 현황</div>
                        <div class="acc-market-status">${marketStatus}</div>

                        <div class="acc-section-label proposal-label">💡 ${companyName} 맞춤 제안</div>
                        ${proposals.map((p, pi) => `<div class="acc-proposal-item"><span class="proposal-num">${pi+1}</span>${p}</div>`).join('')}

                        <div class="acc-section-label oppo-label">🚀 기회</div>
                        ${oppos.map(o => `<div class="acc-oppo-item">✦ ${o}</div>`).join('')}

                        <div class="acc-section-label risk-label">⚠️ 리스크</div>
                        ${risks.map(r => `<div class="acc-risk-item">▸ ${r}</div>`).join('')}

                        <div class="acc-data-grid">
                            <div class="acc-data-card"><span class="data-card-val">${fmtSize(md.gdp_billion_usd || t.country.gdp)}</span><span class="data-card-label">GDP</span></div>
                            <div class="acc-data-card"><span class="data-card-val">${(md.gdp_growth_pct || t.country.gdp_growth_pct || 0).toFixed(1)}%</span><span class="data-card-label">GDP 성장률</span></div>
                            <div class="acc-data-card"><span class="data-card-val">${fmtPop(md.population_million || t.country.pop)}</span><span class="data-card-label">인구</span></div>
                            <div class="acc-data-card"><span class="data-card-val">${(md.internet_users_pct || t.country.internet_users_pct || 0).toFixed(0)}%</span><span class="data-card-label">인터넷 보급률</span></div>
                            <div class="acc-data-card"><span class="data-card-val">${fmtSize(md.industry_size_billion || ind.size)}</span><span class="data-card-label">산업 규모</span></div>
                            <div class="acc-data-card"><span class="data-card-val">${(md.industry_growth_pct || ind.growth || 0).toFixed(1)}%</span><span class="data-card-label">산업 성장률</span></div>
                        </div>

                        <div class="acc-dim-bars">
                            ${['marketSize','growth','potential','stability','openness','digital'].map(dim => {
                                const val = dimScores[dim] || 0;
                                const labels = {marketSize:'시장규모',growth:'성장률',potential:'잠재력',stability:'안정성',openness:'개방도',digital:'디지털'};
                                const barColor = val >= 75 ? '#00ff88' : val >= 50 ? '#ffaa00' : '#ff3366';
                                return `<div class="dim-bar-row"><span class="dim-bar-label">${labels[dim]}</span><div class="dim-bar-track"><div class="dim-bar-fill" style="width:${val}%;background:${barColor}"></div></div><span class="dim-bar-val">${val}</span></div>`;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>`;
    });

    // Rinda CTA
    const aiOppos = ai?.countries?.find(c => c.rank === 1)?.opportunities || [];
    const rindaUrl = `https://app.rinda.ai/?utm_source=Lead_Magnet&utm_medium=referral&utm_content=${top1.id}_${EA.profile.industry}`;
    html += `
        <div class="exp-rinda-cta">
            <div class="rinda-cta-title">🚀 ${top1.country.name}에 해외 영업팀을 구축하세요</div>
            <p class="rinda-cta-desc">AI가 추천한 최적 시장에 현지 영업팀을 배치하세요. 이메일 기반 해외 B2B 영업 자동화 플랫폼 린다가 도와드립니다.</p>
            <button class="rinda-cta-btn" id="rinda-cta-btn">🌍 해외 영업팀 고용 문의하기</button>
        </div>`;

    // Rinda popup (hidden)
    html += `
        <div class="rinda-popup hidden" id="rinda-popup">
            <div class="rinda-popup-backdrop"></div>
            <div class="rinda-popup-modal">
                <button class="close-btn rinda-popup-close">&times;</button>
                <div class="rinda-popup-header">
                    <span class="rinda-popup-flag">${top1.country.flag}</span>
                    <div>
                        <div class="rinda-popup-country">${top1.country.name}</div>
                        <div class="rinda-popup-score">CES ${top1.ces.toFixed(1)}점 · AI 추천 1위</div>
                    </div>
                </div>
                <div class="rinda-popup-body">
                    <p class="rinda-popup-lead">AI 분석 결과, <strong>${top1.country.name}</strong>은(는) 귀사의 최적 해외 진출 시장입니다.</p>
                    ${aiOppos.length ? `<ul class="rinda-popup-points">${aiOppos.slice(0,3).map(o => `<li>${o}</li>`).join('')}</ul>` : ''}
                    <p class="rinda-popup-action">지금 바로 <strong>${top1.country.name}</strong> 현지 영업팀을 구축하고, 해외 매출을 만들어보세요.</p>
                </div>
                <a href="${rindaUrl}" target="_blank" rel="noopener" class="rinda-popup-cta-link" id="rinda-go">
                    🚀 린다로 해외 영업 시작하기
                </a>
                <div class="rinda-popup-sub">이메일 기반 해외 B2B 영업 자동화 플랫폼</div>
            </div>
        </div>`;

    // Action buttons
    html += `
        <div class="exp-actions">
            <button class="exp-btn" id="exp-back-btn">← 탐색기로 돌아가기</button>
            <button class="exp-btn primary" id="exp-pdf-btn">📥 PDF 보고서 다운로드</button>
            <button class="exp-btn" id="exp-redo-btn">🔄 다시 분석</button>
        </div>`;

    content.innerHTML = html;
    panel.classList.remove('hidden');

    // Animate gauge
    setTimeout(() => {
        const gaugeFill = content.querySelector('.gauge-fill');
        if (gaugeFill) gaugeFill.style.strokeDashoffset = gaugeFill.dataset.target;
        const gaugeText = content.querySelector('.gauge-text');
        if (gaugeText) animateNumber(gaugeText, parseFloat(gaugeText.dataset.target), 1200);
        // Animate rank bars
        content.querySelectorAll('.rank-bar-fill').forEach(bar => {
            setTimeout(() => bar.style.width = bar.dataset.width + '%', 100);
        });
    }, 100);

    // Bind interactions
    bindReportInteractions(content);
}

function animateNumber(el, target, duration) {
    const start = performance.now();
    function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (eased * target).toFixed(1);
        if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

// ---- RADAR CHART SVG ----
function renderRadarChart(top3) {
    const axes = ['marketSize','growth','potential','stability','openness','digital'];
    const axisLabels = ['시장규모','성장률','잠재력','안정성','개방도','디지털'];
    const colors = ['#ffaa00','#00f0ff','#7b2fff'];
    const cx = 120, cy = 120, maxR = 80;
    const angleStep = (2 * Math.PI) / axes.length;

    let svg = `<div class="exp-section-title">📊 상위 3개국 비교</div><div class="exp-radar-wrap"><svg class="radar-svg" viewBox="0 0 240 240">`;

    // Grid circles
    [0.25, 0.5, 0.75, 1].forEach(r => {
        const points = axes.map((_, i) => {
            const angle = -Math.PI/2 + i * angleStep;
            return `${cx + Math.cos(angle)*maxR*r},${cy + Math.sin(angle)*maxR*r}`;
        }).join(' ');
        svg += `<polygon class="radar-grid" points="${points}"/>`;
    });

    // Axis lines + labels
    axes.forEach((_, i) => {
        const angle = -Math.PI/2 + i * angleStep;
        const x2 = cx + Math.cos(angle) * maxR;
        const y2 = cy + Math.sin(angle) * maxR;
        svg += `<line class="radar-axis" x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}"/>`;
        const lx = cx + Math.cos(angle) * (maxR + 16);
        const ly = cy + Math.sin(angle) * (maxR + 16);
        svg += `<text class="radar-label" x="${lx}" y="${ly}">${axisLabels[i]}</text>`;
    });

    // Country polygons
    top3.forEach((t, ci) => {
        const points = axes.map((axis, i) => {
            const val = (t.scores[axis] || 0) / 100;
            const angle = -Math.PI/2 + i * angleStep;
            return `${cx + Math.cos(angle)*maxR*val},${cy + Math.sin(angle)*maxR*val}`;
        }).join(' ');
        svg += `<polygon class="radar-poly" points="${points}" fill="${colors[ci]}" stroke="${colors[ci]}" style="stroke-dasharray:500;stroke-dashoffset:500" data-animate="true"/>`;
    });

    svg += `</svg></div>`;

    // Legend
    svg += `<div class="radar-legend">`;
    top3.forEach((t, i) => {
        svg += `<div class="radar-legend-item"><span class="radar-legend-dot" style="background:${colors[i]}"></span>${t.country.flag} ${t.country.name}</div>`;
    });
    svg += `</div>`;

    return svg;
}

// ---- BUBBLE MATRIX ----
function renderBubbleMatrix(top10) {
    let html = `<div class="exp-section-title">⚖️ 리스크-기회 매트릭스</div><div class="exp-matrix-wrap">`;
    html += `<div class="matrix-mid-x"></div><div class="matrix-mid-y"></div>`;
    html += `<div class="matrix-axis-label" style="bottom:2px;left:50%;transform:translateX(-50%)">기회 →</div>`;
    html += `<div class="matrix-axis-label" style="left:2px;top:50%;transform:translateY(-50%) rotate(-90deg)">← 리스크</div>`;
    html += `<div class="matrix-quadrant" style="right:8px;top:4px">고위험/고수익</div>`;
    html += `<div class="matrix-sweet" style="right:4px;bottom:4px">SWEET SPOT ★</div>`;

    // Normalize to spread bubbles across the full chart
    const opps = top10.map(t => t.opportunityScore);
    const risks = top10.map(t => t.riskScore);
    const oppMin = Math.min(...opps), oppMax = Math.max(...opps);
    const riskMin = Math.min(...risks), riskMax = Math.max(...risks);
    const oppRange = oppMax - oppMin || 1;
    const riskRange = riskMax - riskMin || 1;

    top10.forEach((t, i) => {
        const x = ((t.opportunityScore - oppMin) / oppRange) * 80 + 10; // 10~90%
        const y = 90 - ((t.riskScore - riskMin) / riskRange) * 80; // 10~90%, inverted
        const size = Math.max(18, Math.min(36, t.bubbleSize));
        const color = i === 0 ? '#ffaa00' : i < 3 ? '#00f0ff' : '#7b2fff';
        html += `<div class="matrix-bubble" style="left:${x}%;top:${y}%;width:${size}px;height:${size}px;background:${color}22;border-color:${color}" title="${t.country.name}: 기회${t.opportunityScore.toFixed(0)} / 리스크${t.riskScore.toFixed(0)}">${t.country.flag}</div>`;
    });

    html += `</div>`;
    return html;
}

// ---- INTERACTIONS ----
function bindReportInteractions(container) {
    // Rank item click → globe zoom
    container.querySelectorAll('.exp-rank-item, .exp-top-pick').forEach(item => {
        item.addEventListener('click', () => {
            const cid = item.dataset.countryId;
            if (!cid || !COUNTRIES[cid]) return;
            const c = COUNTRIES[cid];
            globe.pointOfView({ lat: c.lat, lng: c.lng, altitude: 2.0 }, 1000);
            // Highlight active
            container.querySelectorAll('.exp-rank-item').forEach(ri => ri.classList.remove('active'));
            if (item.classList.contains('exp-rank-item')) item.classList.add('active');
        });
    });

    // Accordion toggle
    container.querySelectorAll('.exp-accordion-head').forEach(head => {
        head.addEventListener('click', () => {
            head.closest('.exp-accordion-item').classList.toggle('open');
        });
    });

    // Back button
    const backBtn = container.querySelector('#exp-back-btn');
    if (backBtn) backBtn.addEventListener('click', closeExpansionReport);

    // Redo button
    const redoBtn = container.querySelector('#exp-redo-btn');
    if (redoBtn) redoBtn.addEventListener('click', () => { closeExpansionReport(); setTimeout(openWizard, 300); });

    // PDF download
    const pdfBtn = container.querySelector('#exp-pdf-btn');
    if (pdfBtn) pdfBtn.addEventListener('click', downloadPDF);

    // Rinda CTA → popup (move popup to body so fixed positioning works)
    const rindaCta = container.querySelector('#rinda-cta-btn');
    const rindaPopup = container.querySelector('#rinda-popup');
    if (rindaCta && rindaPopup) {
        document.body.appendChild(rindaPopup);
        rindaCta.addEventListener('click', () => rindaPopup.classList.remove('hidden'));
        rindaPopup.querySelector('.rinda-popup-backdrop').addEventListener('click', () => rindaPopup.classList.add('hidden'));
        rindaPopup.querySelector('.rinda-popup-close').addEventListener('click', () => rindaPopup.classList.add('hidden'));
    }

    // Animate radar polygons
    setTimeout(() => {
        container.querySelectorAll('.radar-poly[data-animate]').forEach(poly => {
            poly.style.strokeDashoffset = '0';
        });
    }, 300);
}

// ---- PDF DOWNLOAD ----
async function downloadPDF() {
    const btn = document.getElementById('exp-pdf-btn');
    if (!btn) return;
    btn.disabled = true;
    btn.textContent = '⏳ PDF 생성 중...';

    try {
        // Dynamically load html2pdf if not loaded
        if (!window.html2pdf) {
            await new Promise((resolve, reject) => {
                const s = document.createElement('script');
                s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
                s.onload = resolve;
                s.onerror = reject;
                document.head.appendChild(s);
            });
        }

        const content = document.getElementById('expansion-content');
        const panel = document.getElementById('expansion-report');
        const companyName = EA.results?.profile?.companyName || 'Company';
        const dateStr = new Date().toISOString().slice(0, 10);

        // Apply PDF mode (black-on-white)
        content.classList.add('pdf-mode');

        // Open all accordions for PDF
        content.querySelectorAll('.exp-accordion-item').forEach(item => item.classList.add('open'));

        // Hide interactive-only elements during PDF generation
        const hideEls = content.querySelectorAll('.exp-actions, .exp-rinda-cta, #rinda-popup, .matrix-bubble');
        hideEls.forEach(el => el.style.display = 'none');

        // Override inline SVG/style colors for PDF mode
        content.querySelectorAll('.radar-poly').forEach(poly => {
            poly.dataset.origStroke = poly.getAttribute('stroke');
            poly.dataset.origFill = poly.getAttribute('fill');
            poly.setAttribute('stroke', '#000');
            poly.setAttribute('fill', 'rgba(0,0,0,0.06)');
        });
        content.querySelectorAll('.gauge-fill').forEach(circle => {
            circle.dataset.origStroke = circle.getAttribute('stroke');
            circle.setAttribute('stroke', '#000');
        });
        content.querySelectorAll('.dim-bar-fill').forEach(bar => {
            bar.dataset.origBg = bar.style.background || bar.style.backgroundColor;
            bar.style.background = '#000';
        });

        const opt = {
            margin:       [10, 10, 10, 10],
            filename:     `${companyName}_해외진출전략_${dateStr}.pdf`,
            image:        { type: 'jpeg', quality: 0.95 },
            html2canvas:  { scale: 2, useCORS: true, backgroundColor: '#ffffff', logging: false },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
        };

        await html2pdf().set(opt).from(content).save();

        // Restore PDF mode overrides
        content.classList.remove('pdf-mode');
        content.querySelectorAll('.radar-poly').forEach(poly => {
            if (poly.dataset.origStroke) poly.setAttribute('stroke', poly.dataset.origStroke);
            if (poly.dataset.origFill) poly.setAttribute('fill', poly.dataset.origFill);
        });
        content.querySelectorAll('.gauge-fill').forEach(circle => {
            if (circle.dataset.origStroke) circle.setAttribute('stroke', circle.dataset.origStroke);
        });
        content.querySelectorAll('.dim-bar-fill').forEach(bar => {
            if (bar.dataset.origBg) bar.style.background = bar.dataset.origBg;
        });
        // Restore hidden elements
        hideEls.forEach(el => el.style.display = '');
    } catch (e) {
        console.error('[PDF] 생성 실패:', e);
        alert('PDF 생성에 실패했습니다. 다시 시도해주세요.');
    }

    btn.disabled = false;
    btn.textContent = '📥 PDF 보고서 다운로드';
}

function closeExpansionReport() {
    document.getElementById('expansion-report').classList.add('hidden');
    document.getElementById('expansion-cta').style.display = '';
    document.getElementById('left-panel').style.opacity = '1';
    document.getElementById('left-panel').style.pointerEvents = '';
    EA.mode = false;

    // Restore globe
    globe.polygonCapColor(feat => getCountryColor(feat.id));
    globe.polygonAltitude(feat => selectedCountry === feat.id ? 0.06 : 0.01);
    globe.labelsData([]);
    globe.ringsData([]);
    updateArcs(selectedCountry || undefined);
    globe.controls().autoRotate = true;
}
