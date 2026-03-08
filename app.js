// === GLOBAL INDUSTRY INTELLIGENCE - APP LOGIC ===
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

    // Points for countries with data
    const points = Object.entries(COUNTRIES).map(([id, c]) => ({
        lat: c.lat, lng: c.lng, size: Math.max(0.1, Math.log10(Math.max(1, c.gdp)) * 0.08),
        color: getRegionColor(c.region), id
    }));
    globe.pointsData(points)
        .pointAltitude('size')
        .pointColor('color')
        .pointRadius(0.15)
        .pointsMerge(false);

    // Adjust globe size and rotation
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
    globe.controls().enableZoom = true;

    // Show app after loading
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('fade-out');
        const app = document.getElementById('app');
        app.style.opacity = '1';
        app.style.transition = 'opacity 0.8s';
        animateCounters();
    }, 2800);

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
