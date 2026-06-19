// === GLOBAL INDUSTRY INTELLIGENCE DATABASE ===
// Auto-generated: 2026-06-19 22:08:45
// Sources: World Bank, IMF, Yahoo Finance, ExchangeRate API
// Countries: 14 | Industries: 12

const INDUSTRIES = {
    "tech": {
        "name": "기술 & IT",
        "nameEn": "Technology & IT",
        "icon": "💻",
        "color": "#00f0ff"
    },
    "manufacturing": {
        "name": "제조업",
        "nameEn": "Manufacturing",
        "icon": "🏭",
        "color": "#ff6b35"
    },
    "finance": {
        "name": "금융 & 은행",
        "nameEn": "Finance & Banking",
        "icon": "💰",
        "color": "#ffd700"
    },
    "healthcare": {
        "name": "헬스케어 & 제약",
        "nameEn": "Healthcare & Pharma",
        "icon": "🏥",
        "color": "#00ff88"
    },
    "energy": {
        "name": "에너지 & 자원",
        "nameEn": "Energy & Resources",
        "icon": "⚡",
        "color": "#ff3366"
    },
    "agriculture": {
        "name": "농업",
        "nameEn": "Agriculture",
        "icon": "🌾",
        "color": "#88cc44"
    },
    "automotive": {
        "name": "자동차",
        "nameEn": "Automotive",
        "icon": "🚗",
        "color": "#aa66ff"
    },
    "retail": {
        "name": "유통 & 이커머스",
        "nameEn": "Retail & E-commerce",
        "icon": "🛒",
        "color": "#ff8844"
    },
    "realestate": {
        "name": "부동산",
        "nameEn": "Real Estate",
        "icon": "🏢",
        "color": "#44aaff"
    },
    "telecom": {
        "name": "통신",
        "nameEn": "Telecommunications",
        "icon": "📡",
        "color": "#cc44ff"
    },
    "tourism": {
        "name": "관광 & 호텔",
        "nameEn": "Tourism & Hospitality",
        "icon": "✈️",
        "color": "#ffcc00"
    },
    "education": {
        "name": "교육",
        "nameEn": "Education",
        "icon": "📚",
        "color": "#44ddcc"
    }
};

const COUNTRIES = {
    "004": {
        "name": "Afghanistan",
        "nameEn": "Afghanistan",
        "code": "AF",
        "flag": "🇦🇫",
        "lat": 34.5228,
        "lng": 69.1761,
        "gdp": 17.2,
        "pop": 0,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 5.6,
                "potential": 61,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 14
            },
            "manufacturing": {
                "size": 1.3,
                "growth": 2.9,
                "potential": 56,
                "oppo": [
                    "기초 제조업 도입",
                    "농산물 가공",
                    "섬유/의류 산업"
                ],
                "risk": [
                    "전력 부족",
                    "운송 인프라 미비",
                    "자본 부족"
                ],
                "rank": 14
            },
            "finance": {
                "size": 1.2,
                "growth": 4.1,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 14
            },
            "healthcare": {
                "size": 1,
                "growth": 5.0,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 12
            },
            "energy": {
                "size": 1,
                "growth": 3.8,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 13
            },
            "agriculture": {
                "size": 6.0,
                "growth": 2.6,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 7
            },
            "automotive": {
                "size": 1,
                "growth": 3.8,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 12
            },
            "retail": {
                "size": 1,
                "growth": 4.4,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 14
            },
            "realestate": {
                "size": 1,
                "growth": 3.2,
                "potential": 56,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 12
            },
            "telecom": {
                "size": 1,
                "growth": 3.8,
                "potential": 58,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 10
            },
            "tourism": {
                "size": 1,
                "growth": 5.0,
                "potential": 60,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 8
            },
            "education": {
                "size": 1,
                "growth": 4.4,
                "potential": 59,
                "oppo": [
                    "모바일 뱅킹 보급",
                    "기본 인프라 디지털화",
                    "기술 교육 확대"
                ],
                "risk": [
                    "기본 인프라 부재",
                    "자본 극심한 부족",
                    "교육 시스템 미비"
                ],
                "rank": 10
            }
        },
        "gdp_growth_pct": 2.3,
        "inflation_pct": -6.6,
        "unemployment_pct": 13.7,
        "trade_pct_gdp": 67.6,
        "internet_users_pct": 16.1,
        "renewable_energy_pct": 20
    },
    "024": {
        "name": "Angola",
        "nameEn": "Angola",
        "code": "AO",
        "flag": "🇦🇴",
        "lat": -8.81155,
        "lng": 13.242,
        "gdp": 101.0,
        "pop": 0,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 5.1,
                "growth": 6.5,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 7
            },
            "manufacturing": {
                "size": 7.7,
                "growth": 3.8,
                "potential": 72,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 9
            },
            "finance": {
                "size": 7.1,
                "growth": 5.0,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 7
            },
            "healthcare": {
                "size": 4.0,
                "growth": 5.9,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 7
            },
            "energy": {
                "size": 4.0,
                "growth": 4.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 7
            },
            "agriculture": {
                "size": 22.3,
                "growth": 3.5,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 5
            },
            "automotive": {
                "size": 3.0,
                "growth": 4.7,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 7
            },
            "retail": {
                "size": 6.1,
                "growth": 5.3,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 7
            },
            "realestate": {
                "size": 4.0,
                "growth": 4.1,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 7
            },
            "telecom": {
                "size": 2.0,
                "growth": 4.7,
                "potential": 72,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 7
            },
            "tourism": {
                "size": 1,
                "growth": 5.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 9
            },
            "education": {
                "size": 1.5,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 9
            }
        },
        "gdp_growth_pct": 4.4,
        "inflation_pct": 28.2,
        "unemployment_pct": 14.0,
        "trade_pct_gdp": 50.8,
        "internet_users_pct": 40.7,
        "renewable_energy_pct": 52.9
    },
    "008": {
        "name": "Albania",
        "nameEn": "Albania",
        "code": "AL",
        "flag": "🇦🇱",
        "lat": 41.3317,
        "lng": 19.8172,
        "gdp": 27.0,
        "pop": 0,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1.4,
                "growth": 5.8,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            },
            "manufacturing": {
                "size": 1.9,
                "growth": 3.1,
                "potential": 75,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 13
            },
            "finance": {
                "size": 2.3,
                "growth": 4.3,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            },
            "healthcare": {
                "size": 1.1,
                "growth": 5.2,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            },
            "energy": {
                "size": 1.2,
                "growth": 4.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            },
            "agriculture": {
                "size": 4.2,
                "growth": 2.8,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            },
            "automotive": {
                "size": 1.1,
                "growth": 4.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            },
            "retail": {
                "size": 1.6,
                "growth": 4.6,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            },
            "realestate": {
                "size": 1.1,
                "growth": 3.4,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            },
            "telecom": {
                "size": 1,
                "growth": 4.0,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            },
            "tourism": {
                "size": 1.6,
                "growth": 5.2,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 6
            },
            "education": {
                "size": 1,
                "growth": 4.6,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            }
        },
        "gdp_growth_pct": 4.0,
        "inflation_pct": 2.2,
        "unemployment_pct": 10.7,
        "trade_pct_gdp": 79.5,
        "internet_users_pct": 85.9,
        "renewable_energy_pct": 41.9
    },
    "032": {
        "name": "아르헨티나",
        "nameEn": "Argentina",
        "code": "AR",
        "flag": "🇦🇷",
        "lat": -34.6118,
        "lng": -58.4173,
        "gdp": 638.4,
        "pop": 0,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 31.9,
                "growth": 4.2,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 3
            },
            "manufacturing": {
                "size": 96.9,
                "growth": 1.5,
                "potential": 77,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 3
            },
            "finance": {
                "size": 44.7,
                "growth": 2.7,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 4
            },
            "healthcare": {
                "size": 25.5,
                "growth": 3.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 3
            },
            "energy": {
                "size": 25.5,
                "growth": 2.4,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 3
            },
            "agriculture": {
                "size": 37.1,
                "growth": 1.2,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 3
            },
            "automotive": {
                "size": 19.2,
                "growth": 2.4,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 4
            },
            "retail": {
                "size": 38.3,
                "growth": 3.0,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 3
            },
            "realestate": {
                "size": 25.5,
                "growth": 1.8,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 3
            },
            "telecom": {
                "size": 12.8,
                "growth": 2.4,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 3
            },
            "tourism": {
                "size": 3.2,
                "growth": 3.6,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 4
            },
            "education": {
                "size": 19.2,
                "growth": 3.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 3
            }
        },
        "gdp_growth_pct": -1.3,
        "inflation_pct": 219.9,
        "unemployment_pct": 7.2,
        "trade_pct_gdp": 27.9,
        "internet_users_pct": 89.7,
        "renewable_energy_pct": 9.2
    },
    "051": {
        "name": "Armenia",
        "nameEn": "Armenia",
        "code": "AM",
        "flag": "🇦🇲",
        "lat": 40.1596,
        "lng": 44.509,
        "gdp": 26.0,
        "pop": 0,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1.3,
                "growth": 6.6,
                "potential": 82,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 12
            },
            "manufacturing": {
                "size": 2.9,
                "growth": 3.9,
                "potential": 77,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 11
            },
            "finance": {
                "size": 2.2,
                "growth": 5.1,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 12
            },
            "healthcare": {
                "size": 1,
                "growth": 6.0,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 13
            },
            "energy": {
                "size": 1.1,
                "growth": 4.8,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 12
            },
            "agriculture": {
                "size": 2.0,
                "growth": 3.6,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 13
            },
            "automotive": {
                "size": 1,
                "growth": 4.8,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 13
            },
            "retail": {
                "size": 1.6,
                "growth": 5.4,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 12
            },
            "realestate": {
                "size": 1,
                "growth": 4.2,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 13
            },
            "telecom": {
                "size": 1,
                "growth": 4.8,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 12
            },
            "tourism": {
                "size": 1,
                "growth": 6.0,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 10
            },
            "education": {
                "size": 1,
                "growth": 5.4,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 12
            }
        },
        "gdp_growth_pct": 5.9,
        "inflation_pct": 0.3,
        "unemployment_pct": 12.4,
        "trade_pct_gdp": 150.1,
        "internet_users_pct": 81.3,
        "renewable_energy_pct": 9.1
    },
    "036": {
        "name": "호주",
        "nameEn": "Australia",
        "code": "AU",
        "flag": "🇦🇺",
        "lat": -35.282,
        "lng": 149.129,
        "gdp": 1757.0,
        "pop": 0,
        "region": "East Asia & Pacific",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 131.8,
                "growth": 4.7,
                "potential": 88,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "manufacturing": {
                "size": 151.1,
                "growth": 2.0,
                "potential": 83,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 1
            },
            "finance": {
                "size": 123.0,
                "growth": 3.2,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "healthcare": {
                "size": 70.3,
                "growth": 4.1,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "energy": {
                "size": 70.3,
                "growth": 2.9,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "agriculture": {
                "size": 35.8,
                "growth": 1.7,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            },
            "automotive": {
                "size": 68.5,
                "growth": 2.9,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "retail": {
                "size": 105.4,
                "growth": 3.5,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "realestate": {
                "size": 70.3,
                "growth": 2.3,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "telecom": {
                "size": 42.2,
                "growth": 2.9,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "tourism": {
                "size": 26.2,
                "growth": 4.1,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            },
            "education": {
                "size": 53.3,
                "growth": 3.5,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 1
            }
        },
        "gdp_growth_pct": 1.4,
        "inflation_pct": 3.2,
        "unemployment_pct": 3.9,
        "trade_pct_gdp": 47.1,
        "internet_users_pct": 96.1,
        "renewable_energy_pct": 12.3
    },
    "040": {
        "name": "오스트리아",
        "nameEn": "Austria",
        "code": "AT",
        "flag": "🇦🇹",
        "lat": 48.2201,
        "lng": 16.3798,
        "gdp": 534.8,
        "pop": 0,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 26.7,
                "growth": 4.2,
                "potential": 85,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 5
            },
            "manufacturing": {
                "size": 89.0,
                "growth": 1.5,
                "potential": 81,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 4
            },
            "finance": {
                "size": 44.9,
                "growth": 2.7,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 3
            },
            "healthcare": {
                "size": 21.4,
                "growth": 3.6,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            },
            "energy": {
                "size": 23.5,
                "growth": 2.4,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            },
            "agriculture": {
                "size": 6.5,
                "growth": 1.2,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 6
            },
            "automotive": {
                "size": 20.9,
                "growth": 2.4,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 3
            },
            "retail": {
                "size": 32.1,
                "growth": 3.0,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 5
            },
            "realestate": {
                "size": 21.4,
                "growth": 1.8,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            },
            "telecom": {
                "size": 10.7,
                "growth": 2.4,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            },
            "tourism": {
                "size": 20.0,
                "growth": 3.6,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 2
            },
            "education": {
                "size": 16.9,
                "growth": 3.0,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 4
            }
        },
        "gdp_growth_pct": -0.7,
        "inflation_pct": 2.9,
        "unemployment_pct": 5.2,
        "trade_pct_gdp": 108.8,
        "internet_users_pct": 94.9,
        "renewable_energy_pct": 36
    },
    "031": {
        "name": "Azerbaijan",
        "nameEn": "Azerbaijan",
        "code": "AZ",
        "flag": "🇦🇿",
        "lat": 40.3834,
        "lng": 49.8932,
        "gdp": 74.3,
        "pop": 0,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 3.7,
                "growth": 5.8,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 9
            },
            "manufacturing": {
                "size": 4.3,
                "growth": 3.1,
                "potential": 76,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 10
            },
            "finance": {
                "size": 6.2,
                "growth": 4.3,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 9
            },
            "healthcare": {
                "size": 3.0,
                "growth": 5.2,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 8
            },
            "energy": {
                "size": 3.3,
                "growth": 4.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 8
            },
            "agriculture": {
                "size": 4.2,
                "growth": 2.8,
                "potential": 75,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 12
            },
            "automotive": {
                "size": 2.9,
                "growth": 4.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 9
            },
            "retail": {
                "size": 4.5,
                "growth": 4.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 9
            },
            "realestate": {
                "size": 3.0,
                "growth": 3.4,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 8
            },
            "telecom": {
                "size": 1.5,
                "growth": 4.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 8
            },
            "tourism": {
                "size": 1,
                "growth": 5.2,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 11
            },
            "education": {
                "size": 1.6,
                "growth": 4.6,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 8
            }
        },
        "gdp_growth_pct": 4.1,
        "inflation_pct": 2.2,
        "unemployment_pct": 5.6,
        "trade_pct_gdp": 82.7,
        "internet_users_pct": 90.4,
        "renewable_energy_pct": 1.3
    },
    "056": {
        "name": "벨기에",
        "nameEn": "Belgium",
        "code": "BE",
        "flag": "🇧🇪",
        "lat": 50.8371,
        "lng": 4.36761,
        "gdp": 671.4,
        "pop": 0,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 33.6,
                "growth": 4.6,
                "potential": 86,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 2
            },
            "manufacturing": {
                "size": 84.5,
                "growth": 1.9,
                "potential": 82,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 5
            },
            "finance": {
                "size": 56.4,
                "growth": 3.1,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 2
            },
            "healthcare": {
                "size": 26.9,
                "growth": 4.0,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 2
            },
            "energy": {
                "size": 29.5,
                "growth": 2.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 2
            },
            "agriculture": {
                "size": 5.3,
                "growth": 1.6,
                "potential": 77,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 8
            },
            "automotive": {
                "size": 26.2,
                "growth": 2.8,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 2
            },
            "retail": {
                "size": 40.3,
                "growth": 3.4,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 2
            },
            "realestate": {
                "size": 26.9,
                "growth": 2.2,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 2
            },
            "telecom": {
                "size": 13.4,
                "growth": 2.8,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 2
            },
            "tourism": {
                "size": 9.7,
                "growth": 4.0,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 3
            },
            "education": {
                "size": 25.3,
                "growth": 3.4,
                "potential": 83,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 2
            }
        },
        "gdp_growth_pct": 1.1,
        "inflation_pct": 3.1,
        "unemployment_pct": 5.7,
        "trade_pct_gdp": 158.9,
        "internet_users_pct": 95.8,
        "renewable_energy_pct": 11.7
    },
    "204": {
        "name": "Benin",
        "nameEn": "Benin",
        "code": "BJ",
        "flag": "🇧🇯",
        "lat": 6.4779,
        "lng": 2.6323,
        "gdp": 21.5,
        "pop": 0,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1.1,
                "growth": 7.7,
                "potential": 78,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 13
            },
            "manufacturing": {
                "size": 2.2,
                "growth": 5.0,
                "potential": 73,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 12
            },
            "finance": {
                "size": 1.5,
                "growth": 6.2,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 13
            },
            "healthcare": {
                "size": 1,
                "growth": 7.1,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 14
            },
            "energy": {
                "size": 1,
                "growth": 5.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 14
            },
            "agriculture": {
                "size": 5.2,
                "growth": 4.7,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 9
            },
            "automotive": {
                "size": 1,
                "growth": 5.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 14
            },
            "retail": {
                "size": 1.3,
                "growth": 6.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 13
            },
            "realestate": {
                "size": 1,
                "growth": 5.3,
                "potential": 73,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 14
            },
            "telecom": {
                "size": 1,
                "growth": 5.9,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 13
            },
            "tourism": {
                "size": 1,
                "growth": 7.1,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 12
            },
            "education": {
                "size": 1,
                "growth": 6.5,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 13
            }
        },
        "gdp_growth_pct": 7.5,
        "inflation_pct": 1.2,
        "unemployment_pct": 1.6,
        "trade_pct_gdp": 40.6,
        "internet_users_pct": 34.0,
        "renewable_energy_pct": 54.5
    },
    "050": {
        "name": "방글라데시",
        "nameEn": "Bangladesh",
        "code": "BD",
        "flag": "🇧🇩",
        "lat": 23.7055,
        "lng": 90.4113,
        "gdp": 450.1,
        "pop": 0,
        "region": "South Asia",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 29.3,
                "growth": 6.4,
                "potential": 79,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 4
            },
            "manufacturing": {
                "size": 98.5,
                "growth": 3.7,
                "potential": 75,
                "oppo": [
                    "노동집약적 제조 기회",
                    "산업단지 개발",
                    "경공업 성장"
                ],
                "risk": [
                    "인프라 부족",
                    "기술력 한계",
                    "물류 비용"
                ],
                "rank": 2
            },
            "finance": {
                "size": 31.5,
                "growth": 4.9,
                "potential": 76,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 5
            },
            "healthcare": {
                "size": 18.0,
                "growth": 5.8,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 5
            },
            "energy": {
                "size": 18.0,
                "growth": 4.6,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 5
            },
            "agriculture": {
                "size": 90.5,
                "growth": 3.4,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 1
            },
            "automotive": {
                "size": 13.5,
                "growth": 4.6,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 5
            },
            "retail": {
                "size": 35.1,
                "growth": 5.2,
                "potential": 77,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 4
            },
            "realestate": {
                "size": 18.0,
                "growth": 4.0,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 5
            },
            "telecom": {
                "size": 9.0,
                "growth": 4.6,
                "potential": 74,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 5
            },
            "tourism": {
                "size": 2.3,
                "growth": 5.8,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 5
            },
            "education": {
                "size": 6.6,
                "growth": 5.2,
                "potential": 75,
                "oppo": [
                    "디지털 경제 도입기",
                    "모바일 서비스 확대",
                    "기술 인력 양성"
                ],
                "risk": [
                    "디지털 격차",
                    "자본 부족",
                    "인재 부족"
                ],
                "rank": 6
            }
        },
        "gdp_growth_pct": 4.2,
        "inflation_pct": 10.5,
        "unemployment_pct": 3.6,
        "trade_pct_gdp": 26.8,
        "internet_users_pct": 53.4,
        "renewable_energy_pct": 25
    },
    "048": {
        "name": "바레인",
        "nameEn": "Bahrain",
        "code": "BH",
        "flag": "🇧🇭",
        "lat": 26.1921,
        "lng": 50.5354,
        "gdp": 47.1,
        "pop": 0,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 2.4,
                "growth": 5.2,
                "potential": 84,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "manufacturing": {
                "size": 9.4,
                "growth": 2.5,
                "potential": 80,
                "oppo": [
                    "스마트팩토리 전환",
                    "친환경 제조 전환",
                    "첨단 소재 개발"
                ],
                "risk": [
                    "인건비 상승",
                    "환경 규제 강화",
                    "공급망 리스크"
                ],
                "rank": 8
            },
            "finance": {
                "size": 3.3,
                "growth": 3.7,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "healthcare": {
                "size": 1.9,
                "growth": 4.6,
                "potential": 82,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "energy": {
                "size": 1.9,
                "growth": 3.4,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "agriculture": {
                "size": 1,
                "growth": 2.2,
                "potential": 76,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 14
            },
            "automotive": {
                "size": 1.4,
                "growth": 3.4,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "retail": {
                "size": 2.8,
                "growth": 4.0,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "realestate": {
                "size": 1.9,
                "growth": 2.8,
                "potential": 78,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 10
            },
            "telecom": {
                "size": 1,
                "growth": 3.4,
                "potential": 79,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 14
            },
            "tourism": {
                "size": 1,
                "growth": 4.6,
                "potential": 81,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 13
            },
            "education": {
                "size": 1,
                "growth": 4.0,
                "potential": 80,
                "oppo": [
                    "AI/ML 투자 확대",
                    "클라우드 인프라 성장",
                    "사이버보안 수요 증가"
                ],
                "risk": [
                    "규제 강화 리스크",
                    "인재 확보 경쟁",
                    "기술 패권 경쟁"
                ],
                "rank": 14
            }
        },
        "gdp_growth_pct": 2.6,
        "inflation_pct": 0.9,
        "unemployment_pct": 1.1,
        "trade_pct_gdp": 157.8,
        "internet_users_pct": 100,
        "renewable_energy_pct": 0
    },
    "112": {
        "name": "Belarus",
        "nameEn": "Belarus",
        "code": "BY",
        "flag": "🇧🇾",
        "lat": 53.9678,
        "lng": 27.5766,
        "gdp": 76.0,
        "pop": 0,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 3.8,
                "growth": 5.8,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 8
            },
            "manufacturing": {
                "size": 17.0,
                "growth": 3.1,
                "potential": 78,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 7
            },
            "finance": {
                "size": 6.4,
                "growth": 4.3,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 8
            },
            "healthcare": {
                "size": 3.0,
                "growth": 5.2,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 9
            },
            "energy": {
                "size": 3.3,
                "growth": 4.0,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 9
            },
            "agriculture": {
                "size": 5.2,
                "growth": 2.8,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 10
            },
            "automotive": {
                "size": 3.0,
                "growth": 4.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 8
            },
            "retail": {
                "size": 4.6,
                "growth": 4.6,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 8
            },
            "realestate": {
                "size": 3.0,
                "growth": 3.4,
                "potential": 76,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 9
            },
            "telecom": {
                "size": 1.5,
                "growth": 4.0,
                "potential": 77,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 9
            },
            "tourism": {
                "size": 1,
                "growth": 5.2,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 14
            },
            "education": {
                "size": 2.3,
                "growth": 4.6,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 7
            }
        },
        "gdp_growth_pct": 4.0,
        "inflation_pct": 5.8,
        "unemployment_pct": 3.5,
        "trade_pct_gdp": 131.9,
        "internet_users_pct": 94.3,
        "renewable_energy_pct": 8.2
    },
    "012": {
        "name": "Algeria",
        "nameEn": "Algeria",
        "code": "DZ",
        "flag": "🇩🇿",
        "lat": 36.7397,
        "lng": 3.05097,
        "gdp": 269.3,
        "pop": 0,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 13.5,
                "growth": 5.7,
                "potential": 83,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 6
            },
            "manufacturing": {
                "size": 25.5,
                "growth": 3.0,
                "potential": 78,
                "oppo": [
                    "글로벌 공급망 편입",
                    "FDI 유치 확대",
                    "산업 자동화"
                ],
                "risk": [
                    "원자재 가격 변동",
                    "기술 전환 비용",
                    "노동 규제"
                ],
                "rank": 6
            },
            "finance": {
                "size": 18.9,
                "growth": 4.2,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 6
            },
            "healthcare": {
                "size": 10.8,
                "growth": 5.1,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 6
            },
            "energy": {
                "size": 10.8,
                "growth": 3.9,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 6
            },
            "agriculture": {
                "size": 37.6,
                "growth": 2.7,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 2
            },
            "automotive": {
                "size": 8.1,
                "growth": 3.9,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 6
            },
            "retail": {
                "size": 16.2,
                "growth": 4.5,
                "potential": 81,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 6
            },
            "realestate": {
                "size": 10.8,
                "growth": 3.3,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 6
            },
            "telecom": {
                "size": 5.4,
                "growth": 3.9,
                "potential": 78,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 6
            },
            "tourism": {
                "size": 1.3,
                "growth": 5.1,
                "potential": 79,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 7
            },
            "education": {
                "size": 14.5,
                "growth": 4.5,
                "potential": 80,
                "oppo": [
                    "IT 아웃소싱 성장",
                    "스타트업 생태계 확대",
                    "5G 인프라 구축"
                ],
                "risk": [
                    "기술 격차 확대",
                    "두뇌 유출",
                    "규제 불확실성"
                ],
                "rank": 5
            }
        },
        "gdp_growth_pct": 3.7,
        "inflation_pct": 4.0,
        "unemployment_pct": 11.7,
        "trade_pct_gdp": 40.1,
        "internet_users_pct": 77.4,
        "renewable_energy_pct": 0.1
    }
};

const TRADE_ROUTES = [];

const TICKER_DATA = [
    {
        "label": "EUR/USD",
        "value": "1.15",
        "dir": "neutral"
    },
    {
        "label": "GBP/USD",
        "value": "1.32",
        "dir": "neutral"
    },
    {
        "label": "USD/JPY",
        "value": "161",
        "dir": "neutral"
    },
    {
        "label": "USD/KRW",
        "value": "1,536",
        "dir": "neutral"
    },
    {
        "label": "USD/CNY",
        "value": "6.78",
        "dir": "neutral"
    },
    {
        "label": "USD/INR",
        "value": "94.41",
        "dir": "neutral"
    },
    {
        "label": "USD/BRL",
        "value": "5.15",
        "dir": "neutral"
    },
    {
        "label": "USD/SGD",
        "value": "1.29",
        "dir": "neutral"
    },
    {
        "label": "USD/AED",
        "value": "3.67",
        "dir": "neutral"
    },
    {
        "label": "USD/SAR",
        "value": "3.75",
        "dir": "neutral"
    },
    {
        "label": "USD/VND",
        "value": "26,267",
        "dir": "neutral"
    },
    {
        "label": "USD/AUD",
        "value": "1.43",
        "dir": "neutral"
    }
];
