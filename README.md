# RINDA Globe Dashboard

**AI-Powered Global Market Analysis Platform**

An interactive 3D globe dashboard that analyzes 149 countries across 12 industries, powered by Gemini 2.5 Pro with Google Search grounding. Designed to help Korean SMEs discover export opportunities with AI-generated strategy reports.

> **Live Demo**: [https://ehddusheo.github.io/globe-dashboard/](https://ehddusheo.github.io/globe-dashboard/)

---

## Overview

RINDA Globe Dashboard is a vanilla JavaScript single-page application that combines real-time macroeconomic data with AI analysis to produce customized export strategy reports. Users select a target country and industry on an interactive 3D globe, then receive an AI-generated report covering import trends, competitive landscape, product-market fit, and actionable recommendations -- downloadable as PDF.

### Key Highlights

- **149 countries x 12 industries** -- comprehensive global coverage
- **Gemini 2.5 Pro AI** with Google Search grounding for up-to-date analysis
- **Interactive 3D globe** built with Globe.gl
- **Automated daily data pipeline** pulling from World Bank API, Yahoo Finance, and ExchangeRate API
- **PDF report generation** with customized export strategies
- **Bilingual interface** -- full Korean/English i18n support
- **Zero-framework architecture** -- pure HTML/CSS/JS, no build tools required

---

## Features

### Interactive 3D Globe
Explore countries on a WebGL-powered globe with color-coded regions, hover tooltips, and click-to-select functionality. The globe renders country polygons with dynamic altitude and coloring based on selected industry data.

### AI Export Strategy Wizard
A multi-step wizard collects user inputs (company name, product, target market) and generates comprehensive export strategy reports using Gemini 2.5 Pro. Reports include:
- Import trend analysis for the target country
- Competitive environment diagnosis
- Product-market fit evaluation
- Entry strategy recommendations
- Risk assessment matrix

### Command Center HUD
A heads-up display header showing live statistics: country count, industry count, data points, and total GDP. Includes a real-time clock and live data indicator.

### Country & Industry Analysis
Select any country and industry combination to view detailed economic data panels with GDP, population, trade volume, growth indicators, and industry-specific metrics.

### Data Ticker
A scrolling ticker bar at the bottom displays real-time market data including major stock indices, exchange rates, and commodity prices.

### Internationalization (i18n)
Full Korean/English language toggle. All UI labels, industry names, country names, and analysis prompts support both languages seamlessly.

### Mobile Responsive
Fully responsive layout with a bottom navigation bar and tab-based views (Globe, Search, Analysis, Data) optimized for mobile devices. Performance adaptations include reduced globe detail and lower renderer resolution on mobile.

### Google Sheets Integration
Analysis requests are logged to Google Sheets via Apps Script webhook for usage tracking and analytics.

### PDF Download
Generated AI reports can be downloaded as professionally formatted PDF documents, with special handling for mobile WebView environments (Instagram, Threads, KakaoTalk, etc.).

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla JavaScript (ES6+), CSS3, HTML5 |
| 3D Globe | [Globe.gl](https://globe.gl/) v2.27.2 |
| Geo Data | [TopoJSON Client](https://github.com/topojson/topojson-client) v3.1.0 |
| AI Engine | Google Gemini 2.5 Pro API with Search Grounding |
| Fonts | Orbitron, Rajdhani, Noto Sans KR (Google Fonts) |
| Data Sources | World Bank API, Yahoo Finance, ExchangeRate API |
| Data Pipeline | Python 3.11 (requests, beautifulsoup4) |
| CI/CD | GitHub Actions (daily cron job) |
| Hosting | GitHub Pages |

---

## Project Structure

```
rinda-globe-dashboard/
├── index.html              # Single HTML entry point
├── app.js                  # Application logic (~2,700 lines)
├── styles.css              # All styles (~1,200 lines)
├── data.js                 # Auto-generated data file (DO NOT edit manually)
├── robots.txt              # Search engine directives
├── sitemap.xml             # Sitemap for SEO
├── requirements.txt        # Python dependencies
├── CLAUDE.md               # AI-assisted development guide
├── scripts/
│   ├── run_all.py          # Pipeline orchestrator
│   ├── fetch_worldbank.py  # World Bank API fetcher
│   ├── fetch_market.py     # Stock/forex/commodity data fetcher
│   ├── generate_data.py    # Merges raw data into data.js
│   └── google_apps_script.js  # Google Sheets webhook handler
├── raw_data/
│   ├── wb_countries.json   # World Bank country metadata
│   ├── wb_indicators.json  # World Bank economic indicators
│   ├── market_data.json    # Stock indices & commodities
│   └── exchange_rates.json # Currency exchange rates
└── .github/
    └── workflows/
        └── daily-update.yml  # Automated daily data refresh
```

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.11+ (only needed for data pipeline)

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/ehddusheo/globe-dashboard.git
   cd globe-dashboard
   ```

2. **Serve the files**

   Use any static file server. For example:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

   > No `npm install` or build step is required. The application loads directly from HTML/CSS/JS files.

3. **Update data (optional)**
   ```bash
   pip install -r requirements.txt
   python scripts/run_all.py
   ```

---

## Data Pipeline

The data pipeline runs daily via GitHub Actions (UTC 21:00 / KST 06:00) and can also be triggered manually.

### Pipeline Steps

1. **`fetch_worldbank.py`** -- Fetches macroeconomic indicators (GDP, population, trade, inflation, etc.) and country metadata from the World Bank API for 149 countries.

2. **`fetch_market.py`** -- Collects stock market indices, currency exchange rates, and commodity prices from Yahoo Finance and ExchangeRate API.

3. **`generate_data.py`** -- Merges all raw JSON data into a single `data.js` file containing:
   - `INDUSTRIES` -- 12 industry definitions with Korean/English names and icons
   - `COUNTRIES` -- 149 country records with economic indicators
   - `TICKER_DATA` -- Market ticker data for the bottom scroll bar

### Data Sources

| Source | Data |
|--------|------|
| World Bank API | GDP, population, trade balance, inflation, ease of doing business |
| Yahoo Finance | Major stock indices (S&P 500, KOSPI, Nikkei, etc.) |
| ExchangeRate API | USD-based exchange rates for 30+ currencies |

---

## Deployment

The project deploys automatically to GitHub Pages.

- **Push to `main`** branch triggers deployment
- **Daily data updates** are committed by the `Globe Data Bot` via GitHub Actions
- No build step -- files are served as-is

### Manual Deployment

Simply push to the `main` branch:
```bash
git add -A
git commit -m "Update"
git push origin main
```

---

## Design System

The UI follows a **glass-morphism dark theme** with a command center aesthetic:

- **Background**: Deep space dark (`#060612`)
- **Primary accent**: Cyan (`#00f0ff`)
- **Secondary**: Purple (`#7b2fff`)
- **Alert/CTA**: Pink (`#ff3366`)
- **Success**: Green (`#00ff88`)
- **Warning**: Orange (`#ffaa00`)
- **Glass panels**: Semi-transparent (`rgba(8,12,35,0.88)`) with backdrop blur
- **Typography**: Orbitron (titles), Rajdhani (body), Noto Sans KR (Korean text)

---

## 한국어 안내 (Korean Guide)

### 프로젝트 소개

RINDA Globe Dashboard는 AI 기반 해외시장 분석 플랫폼입니다. 149개국 x 12개 산업의 거시경제 데이터를 실시간으로 수집하고, Gemini 2.5 Pro AI가 기업 맞춤형 해외진출 전략 보고서를 생성합니다.

### 주요 기능

- **3D 지구본**: 국가별 경제 데이터를 인터랙티브 지구본에서 탐색
- **AI 수출전략 분석**: 회사명, 제품, 타겟 시장을 입력하면 맞춤 전략 보고서 생성
- **PDF 다운로드**: 생성된 보고서를 PDF로 저장
- **실시간 데이터**: 주가, 환율, 원자재 가격 실시간 업데이트
- **한/영 전환**: 전체 UI 한국어/영어 지원
- **무료 이용**: 모든 기능 무료 제공

### 지원 산업 (12개)

| 산업 | Industry |
|------|----------|
| 기술 & IT | Technology & IT |
| 제조업 | Manufacturing |
| 금융 & 은행 | Finance & Banking |
| 헬스케어 & 제약 | Healthcare & Pharma |
| 에너지 & 자원 | Energy & Resources |
| 농업 | Agriculture |
| 건설 & 인프라 | Construction & Infrastructure |
| 소비재 & 유통 | Consumer Goods & Retail |
| 운송 & 물류 | Transport & Logistics |
| 통신 | Telecommunications |
| 관광 & 호텔 | Tourism & Hospitality |
| 교육 | Education |

### 로컬 실행 방법

```bash
git clone https://github.com/ehddusheo/globe-dashboard.git
cd globe-dashboard
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Test manually in a browser (no automated test suite)
5. Commit with clear messages
6. Push to your fork and submit a Pull Request

### Important Notes

- **Do not manually edit `data.js`** -- it is auto-generated by the pipeline
- Keep the zero-dependency philosophy -- no npm packages or build tools
- Maintain glass-morphism design consistency
- Test on both desktop and mobile viewports
- Ensure i18n: add both Korean and English strings for any new UI text

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Built by [GRINDA AI](https://ehddusheo.github.io/globe-dashboard/)
