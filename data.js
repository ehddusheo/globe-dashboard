// === GLOBAL INDUSTRY INTELLIGENCE DATABASE ===
// Auto-generated: 2026-05-17 21:58:54
// Sources: World Bank, IMF, Yahoo Finance, ExchangeRate API
// Countries: 63 | Industries: 12

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
        "pop": 42.6,
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
                "rank": 58
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
                "rank": 61
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
                "rank": 60
            },
            "healthcare": {
                "size": 2.1,
                "growth": 5.0,
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
                "rank": 42
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
                "rank": 52
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
                "rank": 33
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
                "rank": 51
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
                "rank": 60
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
                "rank": 51
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
                "rank": 42
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
                "rank": 34
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
                "rank": 43
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
        "pop": 37.9,
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
                "rank": 31
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
                "rank": 37
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
                "rank": 32
            },
            "healthcare": {
                "size": 2.1,
                "growth": 5.9,
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
                "rank": 43
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
                "rank": 32
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
                "rank": 16
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
                "rank": 32
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
                "rank": 31
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
                "rank": 31
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
                "rank": 31
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
                "rank": 35
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
                "rank": 37
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
        "pop": 2.4,
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
                "rank": 50
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
                "rank": 58
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
                "rank": 50
            },
            "healthcare": {
                "size": 1.5,
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
                "rank": 51
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
                "rank": 50
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
                "rank": 41
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
                "rank": 48
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
                "rank": 50
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
                "rank": 50
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
                "rank": 43
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
                "rank": 27
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
                "rank": 44
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
        "pop": 45.7,
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
                "rank": 10
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
                "rank": 12
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
                "rank": 12
            },
            "healthcare": {
                "size": 52.4,
                "growth": 3.6,
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
                "rank": 11
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
                "rank": 13
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
                "rank": 12
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
                "rank": 10
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
                "rank": 10
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
                "rank": 10
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
                "rank": 20
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
                "rank": 9
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
        "pop": 3.0,
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
                "rank": 51
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
                "rank": 53
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
                "rank": 51
            },
            "healthcare": {
                "size": 1.9,
                "growth": 6.0,
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
                "rank": 46
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
                "rank": 51
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
                "rank": 49
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
                "rank": 52
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
                "rank": 51
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
                "rank": 52
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
                "rank": 44
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
                "rank": 36
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
                "rank": 45
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
        "pop": 27.2,
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
                "rank": 6
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
                "rank": 9
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
                "rank": 7
            },
            "healthcare": {
                "size": 146.2,
                "growth": 4.1,
                "potential": 87,
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
                "rank": 7
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
                "rank": 15
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
                "rank": 5
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
                "rank": 7
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
                "rank": 7
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
                "rank": 7
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
                "rank": 5
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
                "rank": 7
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
        "pop": 9.2,
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
                "rank": 13
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
                "rank": 13
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
                "rank": 11
            },
            "healthcare": {
                "size": 50.6,
                "growth": 3.6,
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
                "rank": 12
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
                "rank": 31
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
                "rank": 11
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
                "rank": 13
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
                "rank": 12
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
                "rank": 12
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
                "rank": 6
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
                "rank": 10
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
        "pop": 10.2,
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
                "rank": 37
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
                "rank": 45
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
                "rank": 35
            },
            "healthcare": {
                "size": 2.5,
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
                "rank": 37
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
                "rank": 35
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
                "rank": 42
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
                "rank": 34
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
                "rank": 37
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
                "rank": 36
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
                "rank": 36
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
                "rank": 37
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
                "rank": 36
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
        "pop": 11.9,
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
                "rank": 9
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
                "rank": 14
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
                "rank": 9
            },
            "healthcare": {
                "size": 58.0,
                "growth": 4.0,
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
                "rank": 8
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
                "rank": 9
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
                "rank": 36
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
                "rank": 9
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
                "rank": 9
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
                "rank": 9
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
                "rank": 9
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
                "rank": 10
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
                "rank": 8
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
        "pop": 14.5,
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
                "rank": 56
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
                "rank": 55
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
                "rank": 56
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
                "rank": 54
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
                "rank": 53
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
                "rank": 37
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
                "rank": 53
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
                "rank": 56
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
                "rank": 53
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
                "rank": 45
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
                "rank": 38
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
                "rank": 46
            }
        },
        "gdp_growth_pct": 7.5,
        "inflation_pct": 1.2,
        "unemployment_pct": 1.6,
        "trade_pct_gdp": 40.6,
        "internet_users_pct": 34.0,
        "renewable_energy_pct": 54.5
    },
    "854": {
        "name": "Burkina Faso",
        "nameEn": "Burkina Faso",
        "code": "BF",
        "flag": "🇧🇫",
        "lat": 12.3605,
        "lng": -1.53395,
        "gdp": 23.1,
        "pop": 23.5,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1.2,
                "growth": 6.6,
                "potential": 63,
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
                "rank": 53
            },
            "manufacturing": {
                "size": 2.2,
                "growth": 3.9,
                "potential": 59,
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
                "rank": 56
            },
            "finance": {
                "size": 1.6,
                "growth": 5.1,
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
                "rank": 55
            },
            "healthcare": {
                "size": 1.4,
                "growth": 6.0,
                "potential": 62,
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
                "rank": 53
            },
            "energy": {
                "size": 1,
                "growth": 4.8,
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
                "rank": 54
            },
            "agriculture": {
                "size": 4.8,
                "growth": 3.6,
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
                "rank": 39
            },
            "automotive": {
                "size": 1,
                "growth": 4.8,
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
                "rank": 54
            },
            "retail": {
                "size": 1.4,
                "growth": 5.4,
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
                "rank": 55
            },
            "realestate": {
                "size": 1,
                "growth": 4.2,
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
                "rank": 54
            },
            "telecom": {
                "size": 1,
                "growth": 4.8,
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
                "rank": 46
            },
            "tourism": {
                "size": 1,
                "growth": 6.0,
                "potential": 62,
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
                "rank": 39
            },
            "education": {
                "size": 1,
                "growth": 5.4,
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
                "rank": 47
            }
        },
        "gdp_growth_pct": 4.8,
        "inflation_pct": 4.2,
        "unemployment_pct": 3.4,
        "trade_pct_gdp": 60.5,
        "internet_users_pct": 28.3,
        "renewable_energy_pct": 71.4
    },
    "050": {
        "name": "방글라데시",
        "nameEn": "Bangladesh",
        "code": "BD",
        "flag": "🇧🇩",
        "lat": 23.7055,
        "lng": 90.4113,
        "gdp": 450.1,
        "pop": 173.6,
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
                "rank": 12
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
                "rank": 10
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
                "rank": 15
            },
            "healthcare": {
                "size": 7.8,
                "growth": 5.8,
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
                "rank": 25
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
                "rank": 15
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
                "rank": 5
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
                "rank": 15
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
                "rank": 12
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
                "rank": 14
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
                "rank": 14
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
                "rank": 21
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
                "rank": 21
            }
        },
        "gdp_growth_pct": 4.2,
        "inflation_pct": 10.5,
        "unemployment_pct": 3.6,
        "trade_pct_gdp": 26.8,
        "internet_users_pct": 53.4,
        "renewable_energy_pct": 25
    },
    "100": {
        "name": "Bulgaria",
        "nameEn": "Bulgaria",
        "code": "BG",
        "flag": "🇧🇬",
        "lat": 42.7105,
        "lng": 23.3238,
        "gdp": 113.3,
        "pop": 6.4,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 5.7,
                "growth": 5.6,
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
                "rank": 28
            },
            "manufacturing": {
                "size": 15.0,
                "growth": 2.9,
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
                "rank": 29
            },
            "finance": {
                "size": 9.5,
                "growth": 4.1,
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
                "rank": 26
            },
            "healthcare": {
                "size": 7.2,
                "growth": 5.0,
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
                "rank": 27
            },
            "energy": {
                "size": 5.0,
                "growth": 3.8,
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
                "rank": 26
            },
            "agriculture": {
                "size": 2.7,
                "growth": 2.6,
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
                "rank": 47
            },
            "automotive": {
                "size": 4.4,
                "growth": 3.8,
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
                "rank": 26
            },
            "retail": {
                "size": 6.8,
                "growth": 4.4,
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
                "rank": 28
            },
            "realestate": {
                "size": 4.5,
                "growth": 3.2,
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
                "rank": 28
            },
            "telecom": {
                "size": 2.3,
                "growth": 3.8,
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
                "rank": 28
            },
            "tourism": {
                "size": 2.3,
                "growth": 5.0,
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
                "rank": 22
            },
            "education": {
                "size": 3.1,
                "growth": 4.4,
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
                "rank": 26
            }
        },
        "gdp_growth_pct": 3.4,
        "inflation_pct": 2.4,
        "unemployment_pct": 4.2,
        "trade_pct_gdp": 110.2,
        "internet_users_pct": 82.4,
        "renewable_energy_pct": 20.4
    },
    "048": {
        "name": "바레인",
        "nameEn": "Bahrain",
        "code": "BH",
        "flag": "🇧🇭",
        "lat": 26.1921,
        "lng": 50.5354,
        "gdp": 47.1,
        "pop": 1.6,
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
                "rank": 42
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
                "rank": 35
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
                "rank": 42
            },
            "healthcare": {
                "size": 1.5,
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
                "rank": 52
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
                "rank": 41
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
                "rank": 58
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
                "rank": 44
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
                "rank": 41
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
                "rank": 41
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
                "rank": 47
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
                "rank": 40
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
                "rank": 48
            }
        },
        "gdp_growth_pct": 2.6,
        "inflation_pct": 0.9,
        "unemployment_pct": 1.1,
        "trade_pct_gdp": 157.8,
        "internet_users_pct": 100,
        "renewable_energy_pct": 0
    },
    "070": {
        "name": "Bosnia and Herzegovina",
        "nameEn": "Bosnia and Herzegovina",
        "code": "BA",
        "flag": "🇧🇦",
        "lat": 43.8607,
        "lng": 18.4214,
        "gdp": 29.6,
        "pop": 3.2,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1.5,
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
                "rank": 49
            },
            "manufacturing": {
                "size": 4.1,
                "growth": 2.7,
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
                "rank": 47
            },
            "finance": {
                "size": 2.5,
                "growth": 3.9,
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
                "rank": 48
            },
            "healthcare": {
                "size": 2.1,
                "growth": 4.8,
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
                "rank": 44
            },
            "energy": {
                "size": 1.3,
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
                "rank": 49
            },
            "agriculture": {
                "size": 1.3,
                "growth": 2.4,
                "potential": 73,
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
                "rank": 55
            },
            "automotive": {
                "size": 1.2,
                "growth": 3.6,
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
                "rank": 47
            },
            "retail": {
                "size": 1.8,
                "growth": 4.2,
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
                "rank": 49
            },
            "realestate": {
                "size": 1.2,
                "growth": 3.0,
                "potential": 74,
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
                "rank": 49
            },
            "telecom": {
                "size": 1,
                "growth": 3.6,
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
                "rank": 48
            },
            "tourism": {
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
                "rank": 41
            },
            "education": {
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
                "rank": 49
            }
        },
        "gdp_growth_pct": 3.0,
        "inflation_pct": 1.7,
        "unemployment_pct": 10.7,
        "trade_pct_gdp": 95.2,
        "internet_users_pct": 86.1,
        "renewable_energy_pct": 36.6
    },
    "112": {
        "name": "Belarus",
        "nameEn": "Belarus",
        "code": "BY",
        "flag": "🇧🇾",
        "lat": 53.9678,
        "lng": 27.5766,
        "gdp": 76.0,
        "pop": 9.1,
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
                "rank": 36
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
                "rank": 25
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
                "rank": 34
            },
            "healthcare": {
                "size": 4.3,
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
                "rank": 32
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
                "rank": 36
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
                "rank": 38
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
                "rank": 33
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
                "rank": 36
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
                "rank": 37
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
                "rank": 37
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
                "rank": 42
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
                "rank": 31
            }
        },
        "gdp_growth_pct": 4.0,
        "inflation_pct": 5.8,
        "unemployment_pct": 3.5,
        "trade_pct_gdp": 131.9,
        "internet_users_pct": 94.3,
        "renewable_energy_pct": 8.2
    },
    "068": {
        "name": "Bolivia",
        "nameEn": "Bolivia",
        "code": "BO",
        "flag": "🇧🇴",
        "lat": -13.9908,
        "lng": -66.1936,
        "gdp": 54.9,
        "pop": 12.4,
        "region": "Latin America & Caribbean ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 2.7,
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
                "rank": 40
            },
            "manufacturing": {
                "size": 7.2,
                "growth": 2.0,
                "potential": 69,
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
                "rank": 38
            },
            "finance": {
                "size": 3.8,
                "growth": 3.2,
                "potential": 70,
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
                "rank": 39
            },
            "healthcare": {
                "size": 3.0,
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
                "rank": 34
            },
            "energy": {
                "size": 2.2,
                "growth": 2.9,
                "potential": 69,
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
                "rank": 39
            },
            "agriculture": {
                "size": 4.8,
                "growth": 1.7,
                "potential": 67,
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
                "rank": 40
            },
            "automotive": {
                "size": 1.6,
                "growth": 2.9,
                "potential": 68,
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
                "rank": 41
            },
            "retail": {
                "size": 3.3,
                "growth": 3.5,
                "potential": 71,
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
                "rank": 39
            },
            "realestate": {
                "size": 2.2,
                "growth": 2.3,
                "potential": 68,
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
                "rank": 39
            },
            "telecom": {
                "size": 1.1,
                "growth": 2.9,
                "potential": 68,
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
                "rank": 39
            },
            "tourism": {
                "size": 1,
                "growth": 4.1,
                "potential": 70,
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
                "rank": 43
            },
            "education": {
                "size": 2.5,
                "growth": 3.5,
                "potential": 70,
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
                "rank": 30
            }
        },
        "gdp_growth_pct": -1.1,
        "inflation_pct": 5.1,
        "unemployment_pct": 3.3,
        "trade_pct_gdp": 47.0,
        "internet_users_pct": 79.7,
        "renewable_energy_pct": 12.8
    },
    "076": {
        "name": "브라질",
        "nameEn": "Brazil",
        "code": "BR",
        "flag": "🇧🇷",
        "lat": -15.7801,
        "lng": -47.9292,
        "gdp": 2185.8,
        "pop": 212.0,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 109.3,
                "growth": 5.6,
                "potential": 85,
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
            "manufacturing": {
                "size": 264.7,
                "growth": 2.9,
                "potential": 81,
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
                "size": 153.0,
                "growth": 4.1,
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
            "healthcare": {
                "size": 170.2,
                "growth": 5.0,
                "potential": 85,
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
            },
            "energy": {
                "size": 87.4,
                "growth": 3.8,
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
            "agriculture": {
                "size": 125.7,
                "growth": 2.6,
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
                "rank": 4
            },
            "automotive": {
                "size": 65.6,
                "growth": 3.8,
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
                "rank": 7
            },
            "retail": {
                "size": 131.1,
                "growth": 4.4,
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
            "realestate": {
                "size": 87.4,
                "growth": 3.2,
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
            "telecom": {
                "size": 43.7,
                "growth": 3.8,
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
            "tourism": {
                "size": 10.9,
                "growth": 5.0,
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
            "education": {
                "size": 73.7,
                "growth": 4.4,
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
                "rank": 5
            }
        },
        "gdp_growth_pct": 3.4,
        "inflation_pct": 4.4,
        "unemployment_pct": 6.8,
        "trade_pct_gdp": 35.6,
        "internet_users_pct": 84.5,
        "renewable_energy_pct": 46.5
    },
    "096": {
        "name": "Brunei Darussalam",
        "nameEn": "Brunei Darussalam",
        "code": "BN",
        "flag": "🇧🇳",
        "lat": 4.94199,
        "lng": 114.946,
        "gdp": 15.3,
        "pop": 0.5,
        "region": "East Asia & Pacific",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 1.1,
                "growth": 5.8,
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
                "rank": 57
            },
            "manufacturing": {
                "size": 2.6,
                "growth": 3.1,
                "potential": 79,
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
                "rank": 54
            },
            "finance": {
                "size": 1.1,
                "growth": 4.3,
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
                "rank": 61
            },
            "healthcare": {
                "size": 1,
                "growth": 5.2,
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
                "rank": 55
            },
            "energy": {
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
                "rank": 55
            },
            "agriculture": {
                "size": 1,
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
                "rank": 59
            },
            "automotive": {
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
                "rank": 55
            },
            "retail": {
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
                "rank": 61
            },
            "realestate": {
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
                "rank": 55
            },
            "telecom": {
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
                "rank": 49
            },
            "tourism": {
                "size": 1,
                "growth": 5.2,
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
                "rank": 44
            },
            "education": {
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
                "rank": 50
            }
        },
        "gdp_growth_pct": 4.1,
        "inflation_pct": -0.4,
        "unemployment_pct": 5.2,
        "trade_pct_gdp": 132.6,
        "internet_users_pct": 96.3,
        "renewable_energy_pct": 0
    },
    "072": {
        "name": "Botswana",
        "nameEn": "Botswana",
        "code": "BW",
        "flag": "🇧🇼",
        "lat": -24.6544,
        "lng": 25.9201,
        "gdp": 19.4,
        "pop": 2.5,
        "region": "Sub-Saharan Africa ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
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
                "rank": 59
            },
            "manufacturing": {
                "size": 1.1,
                "growth": 1.5,
                "potential": 71,
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
                "rank": 62
            },
            "finance": {
                "size": 1.4,
                "growth": 2.7,
                "potential": 74,
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
                "rank": 58
            },
            "healthcare": {
                "size": 1,
                "growth": 3.6,
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
                "rank": 56
            },
            "energy": {
                "size": 1,
                "growth": 2.4,
                "potential": 73,
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
                "rank": 56
            },
            "agriculture": {
                "size": 1,
                "growth": 1.2,
                "potential": 70,
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
                "rank": 60
            },
            "automotive": {
                "size": 1,
                "growth": 2.4,
                "potential": 73,
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
                "rank": 56
            },
            "retail": {
                "size": 1.2,
                "growth": 3.0,
                "potential": 74,
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
                "rank": 58
            },
            "realestate": {
                "size": 1,
                "growth": 1.8,
                "potential": 72,
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
                "rank": 56
            },
            "telecom": {
                "size": 1,
                "growth": 2.4,
                "potential": 73,
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
                "rank": 50
            },
            "tourism": {
                "size": 1,
                "growth": 3.6,
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
                "rank": 45
            },
            "education": {
                "size": 1,
                "growth": 3.0,
                "potential": 74,
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
                "rank": 51
            }
        },
        "gdp_growth_pct": -3.0,
        "inflation_pct": 2.8,
        "unemployment_pct": 23.8,
        "trade_pct_gdp": 71.1,
        "internet_users_pct": 57.5,
        "renewable_energy_pct": 27.4
    },
    "124": {
        "name": "캐나다",
        "nameEn": "Canada",
        "code": "CA",
        "flag": "🇨🇦",
        "lat": 45.4215,
        "lng": -75.6919,
        "gdp": 2243.6,
        "pop": 41.3,
        "region": "North America",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 201.9,
                "growth": 4.8,
                "potential": 89,
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
            "manufacturing": {
                "size": 186.9,
                "growth": 2.1,
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
                "rank": 8
            },
            "finance": {
                "size": 235.6,
                "growth": 3.3,
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
                "rank": 5
            },
            "healthcare": {
                "size": 324.8,
                "growth": 4.2,
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
                "rank": 3
            },
            "energy": {
                "size": 89.7,
                "growth": 3.0,
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
                "rank": 5
            },
            "agriculture": {
                "size": 35.9,
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
                "rank": 14
            },
            "automotive": {
                "size": 67.3,
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
                "rank": 6
            },
            "retail": {
                "size": 188.5,
                "growth": 3.6,
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
                "rank": 5
            },
            "realestate": {
                "size": 89.7,
                "growth": 2.4,
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
            "telecom": {
                "size": 44.9,
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
            "tourism": {
                "size": 44.9,
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
                "rank": 4
            },
            "education": {
                "size": 65.2,
                "growth": 3.6,
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
                "rank": 6
            }
        },
        "gdp_growth_pct": 1.6,
        "inflation_pct": 2.4,
        "unemployment_pct": 6.4,
        "trade_pct_gdp": 65.1,
        "internet_users_pct": 94.4,
        "renewable_energy_pct": 23.8
    },
    "152": {
        "name": "칠레",
        "nameEn": "Chile",
        "code": "CL",
        "flag": "🇨🇱",
        "lat": -33.475,
        "lng": -70.6475,
        "gdp": 330.3,
        "pop": 19.8,
        "region": "Latin America & Caribbean ",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 16.5,
                "growth": 5.3,
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
                "rank": 19
            },
            "manufacturing": {
                "size": 29.8,
                "growth": 2.6,
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
                "rank": 21
            },
            "finance": {
                "size": 23.1,
                "growth": 3.8,
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
                "rank": 20
            },
            "healthcare": {
                "size": 27.8,
                "growth": 4.7,
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
                "rank": 14
            },
            "energy": {
                "size": 13.2,
                "growth": 3.5,
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
                "rank": 19
            },
            "agriculture": {
                "size": 12.9,
                "growth": 2.3,
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
                "rank": 19
            },
            "automotive": {
                "size": 9.9,
                "growth": 3.5,
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
                "rank": 21
            },
            "retail": {
                "size": 19.8,
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
                "rank": 19
            },
            "realestate": {
                "size": 13.2,
                "growth": 2.9,
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
                "rank": 19
            },
            "telecom": {
                "size": 6.6,
                "growth": 3.5,
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
                "rank": 19
            },
            "tourism": {
                "size": 1.7,
                "growth": 4.7,
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
                "rank": 26
            },
            "education": {
                "size": 9.7,
                "growth": 4.1,
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
                "rank": 17
            }
        },
        "gdp_growth_pct": 2.6,
        "inflation_pct": 4.3,
        "unemployment_pct": 8.7,
        "trade_pct_gdp": 63.9,
        "internet_users_pct": 95.6,
        "renewable_energy_pct": 24.2
    },
    "156": {
        "name": "중국",
        "nameEn": "China",
        "code": "CN",
        "flag": "🇨🇳",
        "lat": 40.0495,
        "lng": 116.286,
        "gdp": 18743.8,
        "pop": 1409.0,
        "region": "East Asia & Pacific",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1405.8,
                "growth": 6.2,
                "potential": 90,
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
                "rank": 1
            },
            "manufacturing": {
                "size": 7458.3,
                "growth": 3.5,
                "potential": 87,
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
                "rank": 1
            },
            "finance": {
                "size": 1312.1,
                "growth": 4.7,
                "potential": 87,
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
                "rank": 1
            },
            "healthcare": {
                "size": 891.3,
                "growth": 5.6,
                "potential": 88,
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
                "rank": 1
            },
            "energy": {
                "size": 749.8,
                "growth": 4.4,
                "potential": 85,
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
                "rank": 1
            },
            "agriculture": {
                "size": 1270.1,
                "growth": 3.2,
                "potential": 84,
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
                "rank": 1
            },
            "automotive": {
                "size": 731.0,
                "growth": 4.4,
                "potential": 85,
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
                "rank": 1
            },
            "retail": {
                "size": 1124.6,
                "growth": 5.0,
                "potential": 87,
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
                "rank": 1
            },
            "realestate": {
                "size": 749.8,
                "growth": 3.8,
                "potential": 84,
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
                "rank": 1
            },
            "telecom": {
                "size": 449.9,
                "growth": 4.4,
                "potential": 85,
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
                "rank": 1
            },
            "tourism": {
                "size": 374.9,
                "growth": 5.6,
                "potential": 87,
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
                "rank": 1
            },
            "education": {
                "size": 438.3,
                "growth": 5.0,
                "potential": 86,
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
                "rank": 1
            }
        },
        "gdp_growth_pct": 5.0,
        "inflation_pct": 0.2,
        "unemployment_pct": 4.6,
        "trade_pct_gdp": 37.2,
        "internet_users_pct": 92,
        "renewable_energy_pct": 15.2
    },
    "384": {
        "name": "Cote d'Ivoire",
        "nameEn": "Cote d'Ivoire",
        "code": "CI",
        "flag": "🇨🇮",
        "lat": 5.332,
        "lng": -4.0305,
        "gdp": 87.1,
        "pop": 31.9,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 4.4,
                "growth": 7.1,
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
                "rank": 34
            },
            "manufacturing": {
                "size": 11.3,
                "growth": 4.4,
                "potential": 74,
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
                "rank": 33
            },
            "finance": {
                "size": 6.1,
                "growth": 5.6,
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
                "rank": 36
            },
            "healthcare": {
                "size": 2.4,
                "growth": 6.5,
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
                "rank": 38
            },
            "energy": {
                "size": 3.5,
                "growth": 5.3,
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
                "rank": 34
            },
            "agriculture": {
                "size": 13.8,
                "growth": 4.1,
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
                "rank": 18
            },
            "automotive": {
                "size": 2.6,
                "growth": 5.3,
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
                "rank": 36
            },
            "retail": {
                "size": 5.2,
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
                "rank": 34
            },
            "realestate": {
                "size": 3.5,
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
                "rank": 34
            },
            "telecom": {
                "size": 1.7,
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
                "rank": 34
            },
            "tourism": {
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
                "rank": 46
            },
            "education": {
                "size": 1.9,
                "growth": 5.9,
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
                "rank": 35
            }
        },
        "gdp_growth_pct": 6.0,
        "inflation_pct": 3.5,
        "unemployment_pct": 2.3,
        "trade_pct_gdp": 51.3,
        "internet_users_pct": 41.4,
        "renewable_energy_pct": 58.2
    },
    "120": {
        "name": "Cameroon",
        "nameEn": "Cameroon",
        "code": "CM",
        "flag": "🇨🇲",
        "lat": 3.8721,
        "lng": 11.5174,
        "gdp": 53.3,
        "pop": 29.1,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 2.7,
                "growth": 6.1,
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
                "rank": 41
            },
            "manufacturing": {
                "size": 6.9,
                "growth": 3.4,
                "potential": 71,
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
                "rank": 39
            },
            "finance": {
                "size": 3.7,
                "growth": 4.6,
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
                "rank": 40
            },
            "healthcare": {
                "size": 1.9,
                "growth": 5.5,
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
                "rank": 47
            },
            "energy": {
                "size": 2.1,
                "growth": 4.3,
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
                "rank": 40
            },
            "agriculture": {
                "size": 9.8,
                "growth": 3.1,
                "potential": 71,
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
                "rank": 22
            },
            "automotive": {
                "size": 1.6,
                "growth": 4.3,
                "potential": 71,
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
                "rank": 42
            },
            "retail": {
                "size": 3.2,
                "growth": 4.9,
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
                "rank": 40
            },
            "realestate": {
                "size": 2.1,
                "growth": 3.7,
                "potential": 70,
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
                "rank": 40
            },
            "telecom": {
                "size": 1.1,
                "growth": 4.3,
                "potential": 71,
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
                "rank": 40
            },
            "tourism": {
                "size": 1,
                "growth": 5.5,
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
                "rank": 47
            },
            "education": {
                "size": 1,
                "growth": 4.9,
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
                "rank": 52
            }
        },
        "gdp_growth_pct": 3.5,
        "inflation_pct": 4.5,
        "unemployment_pct": 3.6,
        "trade_pct_gdp": 34.4,
        "internet_users_pct": 46.3,
        "renewable_energy_pct": 79.2
    },
    "180": {
        "name": "Congo, Dem. Rep.",
        "nameEn": "Congo, Dem. Rep.",
        "code": "CD",
        "flag": "🇨🇩",
        "lat": -4.325,
        "lng": 15.3222,
        "gdp": 71.0,
        "pop": 109.3,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 3.6,
                "growth": 7.2,
                "potential": 66,
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
                "rank": 38
            },
            "manufacturing": {
                "size": 5.8,
                "growth": 4.5,
                "potential": 61,
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
                "rank": 42
            },
            "finance": {
                "size": 5.0,
                "growth": 5.7,
                "potential": 63,
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
                "rank": 38
            },
            "healthcare": {
                "size": 2.1,
                "growth": 6.6,
                "potential": 64,
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
                "rank": 45
            },
            "energy": {
                "size": 2.8,
                "growth": 5.4,
                "potential": 62,
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
                "rank": 38
            },
            "agriculture": {
                "size": 6.8,
                "growth": 4.2,
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
                "rank": 29
            },
            "automotive": {
                "size": 2.1,
                "growth": 5.4,
                "potential": 62,
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
                "rank": 38
            },
            "retail": {
                "size": 4.3,
                "growth": 6.0,
                "potential": 64,
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
                "rank": 38
            },
            "realestate": {
                "size": 2.8,
                "growth": 4.8,
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
                "rank": 38
            },
            "telecom": {
                "size": 1.4,
                "growth": 5.4,
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
                "rank": 38
            },
            "tourism": {
                "size": 1,
                "growth": 6.6,
                "potential": 63,
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
                "rank": 48
            },
            "education": {
                "size": 1.2,
                "growth": 6.0,
                "potential": 62,
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
                "rank": 41
            }
        },
        "gdp_growth_pct": 6.1,
        "unemployment_pct": 4.4,
        "trade_pct_gdp": 100.6,
        "internet_users_pct": 19.7,
        "renewable_energy_pct": 96.3
    },
    "178": {
        "name": "Congo, Rep.",
        "nameEn": "Congo, Rep.",
        "code": "CG",
        "flag": "🇨🇬",
        "lat": -4.2767,
        "lng": 15.2662,
        "gdp": 15.7,
        "pop": 6.3,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 5.7,
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
                "rank": 60
            },
            "manufacturing": {
                "size": 2.0,
                "growth": 3.0,
                "potential": 69,
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
                "rank": 57
            },
            "finance": {
                "size": 1.1,
                "growth": 4.2,
                "potential": 71,
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
                "rank": 62
            },
            "healthcare": {
                "size": 1,
                "growth": 5.1,
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
                "rank": 57
            },
            "energy": {
                "size": 1,
                "growth": 3.9,
                "potential": 70,
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
                "rank": 57
            },
            "agriculture": {
                "size": 1.5,
                "growth": 2.7,
                "potential": 68,
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
                "rank": 53
            },
            "automotive": {
                "size": 1,
                "growth": 3.9,
                "potential": 70,
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
                "rank": 57
            },
            "retail": {
                "size": 1,
                "growth": 4.5,
                "potential": 71,
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
                "rank": 62
            },
            "realestate": {
                "size": 1,
                "growth": 3.3,
                "potential": 69,
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
                "rank": 57
            },
            "telecom": {
                "size": 1,
                "growth": 3.9,
                "potential": 70,
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
                "rank": 51
            },
            "tourism": {
                "size": 1,
                "growth": 5.1,
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
                "rank": 49
            },
            "education": {
                "size": 1,
                "growth": 4.5,
                "potential": 71,
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
                "rank": 53
            }
        },
        "gdp_growth_pct": 2.6,
        "inflation_pct": 3.1,
        "unemployment_pct": 19.9,
        "trade_pct_gdp": 93.2,
        "internet_users_pct": 47.3,
        "renewable_energy_pct": 71.4
    },
    "170": {
        "name": "콜롬비아",
        "nameEn": "Colombia",
        "code": "CO",
        "flag": "🇨🇴",
        "lat": 4.60987,
        "lng": -74.082,
        "gdp": 418.8,
        "pop": 52.9,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 20.9,
                "growth": 4.8,
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
                "rank": 16
            },
            "manufacturing": {
                "size": 42.3,
                "growth": 2.1,
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
                "rank": 19
            },
            "finance": {
                "size": 29.3,
                "growth": 3.3,
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
                "rank": 16
            },
            "healthcare": {
                "size": 27.3,
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
                "rank": 15
            },
            "energy": {
                "size": 16.8,
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
                "rank": 16
            },
            "agriculture": {
                "size": 38.9,
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
                "rank": 11
            },
            "automotive": {
                "size": 12.6,
                "growth": 3.0,
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
                "rank": 17
            },
            "retail": {
                "size": 25.1,
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
                "rank": 16
            },
            "realestate": {
                "size": 16.8,
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
                "rank": 16
            },
            "telecom": {
                "size": 8.4,
                "growth": 3.0,
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
                "rank": 16
            },
            "tourism": {
                "size": 2.1,
                "growth": 4.2,
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
                "rank": 25
            },
            "education": {
                "size": 13.2,
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
                "rank": 13
            }
        },
        "gdp_growth_pct": 1.6,
        "inflation_pct": 6.6,
        "unemployment_pct": 9.6,
        "trade_pct_gdp": 37.0,
        "internet_users_pct": 79.3,
        "renewable_energy_pct": 29.7
    },
    "188": {
        "name": "Costa Rica",
        "nameEn": "Costa Rica",
        "code": "CR",
        "flag": "🇨🇷",
        "lat": 9.63701,
        "lng": -84.0089,
        "gdp": 95.4,
        "pop": 5.1,
        "region": "Latin America & Caribbean ",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 4.8,
                "growth": 5.9,
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
                "rank": 32
            },
            "manufacturing": {
                "size": 12.4,
                "growth": 3.2,
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
                "rank": 30
            },
            "finance": {
                "size": 6.7,
                "growth": 4.4,
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
                "rank": 33
            },
            "healthcare": {
                "size": 5.2,
                "growth": 5.3,
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
                "rank": 30
            },
            "energy": {
                "size": 3.8,
                "growth": 4.1,
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
                "rank": 33
            },
            "agriculture": {
                "size": 3.4,
                "growth": 2.9,
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
                "rank": 46
            },
            "automotive": {
                "size": 2.9,
                "growth": 4.1,
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
                "rank": 35
            },
            "retail": {
                "size": 5.7,
                "growth": 4.7,
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
                "rank": 32
            },
            "realestate": {
                "size": 3.8,
                "growth": 3.5,
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
                "rank": 32
            },
            "telecom": {
                "size": 1.9,
                "growth": 4.1,
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
                "rank": 32
            },
            "tourism": {
                "size": 1.5,
                "growth": 5.3,
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
                "rank": 28
            },
            "education": {
                "size": 3.0,
                "growth": 4.7,
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
                "rank": 27
            }
        },
        "gdp_growth_pct": 4.3,
        "inflation_pct": -0.4,
        "unemployment_pct": 6.9,
        "trade_pct_gdp": 71.3,
        "internet_users_pct": 87.2,
        "renewable_energy_pct": 34.2
    },
    "192": {
        "name": "Cuba",
        "nameEn": "Cuba",
        "code": "CU",
        "flag": "🇨🇺",
        "lat": 23.1333,
        "lng": -82.3667,
        "gdp": 107.4,
        "pop": 11.0,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 5.4,
                "growth": 4.2,
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
                "rank": 30
            },
            "manufacturing": {
                "size": 11.5,
                "growth": 1.5,
                "potential": 74,
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
                "rank": 31
            },
            "finance": {
                "size": 7.5,
                "growth": 2.7,
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
                "rank": 31
            },
            "healthcare": {
                "size": 8.1,
                "growth": 3.6,
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
                "rank": 24
            },
            "energy": {
                "size": 4.3,
                "growth": 2.4,
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
                "rank": 30
            },
            "agriculture": {
                "size": 1.3,
                "growth": 1.2,
                "potential": 71,
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
                "rank": 56
            },
            "automotive": {
                "size": 3.2,
                "growth": 2.4,
                "potential": 74,
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
                "rank": 31
            },
            "retail": {
                "size": 6.4,
                "growth": 3.0,
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
                "rank": 30
            },
            "realestate": {
                "size": 4.3,
                "growth": 1.8,
                "potential": 74,
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
                "rank": 30
            },
            "telecom": {
                "size": 2.1,
                "growth": 2.4,
                "potential": 74,
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
                "rank": 30
            },
            "tourism": {
                "size": 1.2,
                "growth": 3.6,
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
                "rank": 31
            },
            "education": {
                "size": 5.4,
                "growth": 3.0,
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
                "rank": 23
            }
        },
        "gdp_growth_pct": -1.1,
        "unemployment_pct": 1.8,
        "trade_pct_gdp": 124.9,
        "internet_users_pct": 70.5,
        "renewable_energy_pct": 20.9
    },
    "196": {
        "name": "Cyprus",
        "nameEn": "Cyprus",
        "code": "CY",
        "flag": "🇨🇾",
        "lat": 35.1676,
        "lng": 33.3736,
        "gdp": 37.6,
        "pop": 1.4,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 1.9,
                "growth": 5.8,
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
                "rank": 44
            },
            "manufacturing": {
                "size": 1.8,
                "growth": 3.1,
                "potential": 79,
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
                "rank": 59
            },
            "finance": {
                "size": 3.2,
                "growth": 4.3,
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
                "rank": 43
            },
            "healthcare": {
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
                "rank": 39
            },
            "energy": {
                "size": 1.7,
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
                "rank": 44
            },
            "agriculture": {
                "size": 1,
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
                "rank": 61
            },
            "automotive": {
                "size": 1.5,
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
                "rank": 43
            },
            "retail": {
                "size": 2.3,
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
                "rank": 44
            },
            "realestate": {
                "size": 1.5,
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
                "rank": 44
            },
            "telecom": {
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
                "rank": 52
            },
            "tourism": {
                "size": 1,
                "growth": 5.2,
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
                "rank": 50
            },
            "education": {
                "size": 1.1,
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
                "rank": 42
            }
        },
        "gdp_growth_pct": 3.9,
        "inflation_pct": 1.8,
        "unemployment_pct": 4.9,
        "trade_pct_gdp": 190.4,
        "internet_users_pct": 89.6,
        "renewable_energy_pct": 15.6
    },
    "203": {
        "name": "체코",
        "nameEn": "Czechia",
        "code": "CZ",
        "flag": "🇨🇿",
        "lat": 50.0878,
        "lng": 14.4205,
        "gdp": 347.0,
        "pop": 10.9,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 17.4,
                "growth": 4.7,
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
                "rank": 18
            },
            "manufacturing": {
                "size": 75.9,
                "growth": 2.0,
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
                "rank": 16
            },
            "finance": {
                "size": 29.1,
                "growth": 3.2,
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
                "rank": 17
            },
            "healthcare": {
                "size": 23.6,
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
                "rank": 17
            },
            "energy": {
                "size": 15.3,
                "growth": 2.9,
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
                "rank": 18
            },
            "agriculture": {
                "size": 6.6,
                "growth": 1.7,
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
                "rank": 30
            },
            "automotive": {
                "size": 13.5,
                "growth": 2.9,
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
                "rank": 16
            },
            "retail": {
                "size": 20.8,
                "growth": 3.5,
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
                "rank": 18
            },
            "realestate": {
                "size": 13.9,
                "growth": 2.3,
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
                "rank": 18
            },
            "telecom": {
                "size": 6.9,
                "growth": 2.9,
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
                "rank": 18
            },
            "tourism": {
                "size": 5.1,
                "growth": 4.1,
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
                "rank": 18
            },
            "education": {
                "size": 9.0,
                "growth": 3.5,
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
                "rank": 18
            }
        },
        "gdp_growth_pct": 1.2,
        "inflation_pct": 2.4,
        "unemployment_pct": 2.6,
        "trade_pct_gdp": 131.5,
        "internet_users_pct": 87.7,
        "renewable_energy_pct": 17.2
    },
    "276": {
        "name": "독일",
        "nameEn": "Germany",
        "code": "DE",
        "flag": "🇩🇪",
        "lat": 52.5235,
        "lng": 13.4115,
        "gdp": 4685.6,
        "pop": 83.5,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 234.3,
                "growth": 4.2,
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
                "rank": 3
            },
            "manufacturing": {
                "size": 928.1,
                "growth": 1.5,
                "potential": 84,
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
                "rank": 2
            },
            "finance": {
                "size": 393.6,
                "growth": 2.7,
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
                "rank": 2
            },
            "healthcare": {
                "size": 459.8,
                "growth": 3.6,
                "potential": 87,
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
                "size": 206.2,
                "growth": 2.4,
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
            "agriculture": {
                "size": 42.8,
                "growth": 1.2,
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
                "rank": 9
            },
            "automotive": {
                "size": 182.7,
                "growth": 2.4,
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
            "retail": {
                "size": 281.1,
                "growth": 3.0,
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
                "rank": 3
            },
            "realestate": {
                "size": 187.4,
                "growth": 1.8,
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
            "telecom": {
                "size": 93.7,
                "growth": 2.4,
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
            "tourism": {
                "size": 75.9,
                "growth": 3.6,
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
                "rank": 2
            },
            "education": {
                "size": 147.3,
                "growth": 3.0,
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
                "rank": 2
            }
        },
        "gdp_growth_pct": -0.5,
        "inflation_pct": 2.3,
        "unemployment_pct": 3.4,
        "trade_pct_gdp": 79.1,
        "internet_users_pct": 93.5,
        "renewable_energy_pct": 17.6
    },
    "208": {
        "name": "덴마크",
        "nameEn": "Denmark",
        "code": "DK",
        "flag": "🇩🇰",
        "lat": 55.6763,
        "lng": 12.5681,
        "gdp": 424.5,
        "pop": 6.0,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 21.2,
                "growth": 5.6,
                "potential": 87,
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
                "rank": 15
            },
            "manufacturing": {
                "size": 83.4,
                "growth": 2.9,
                "potential": 84,
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
                "rank": 15
            },
            "finance": {
                "size": 35.7,
                "growth": 4.1,
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
                "rank": 13
            },
            "healthcare": {
                "size": 31.9,
                "growth": 5.0,
                "potential": 87,
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
                "rank": 12
            },
            "energy": {
                "size": 18.7,
                "growth": 3.8,
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
                "rank": 14
            },
            "agriculture": {
                "size": 3.9,
                "growth": 2.6,
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
                "rank": 45
            },
            "automotive": {
                "size": 16.6,
                "growth": 3.8,
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
                "rank": 13
            },
            "retail": {
                "size": 25.5,
                "growth": 4.4,
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
                "rank": 15
            },
            "realestate": {
                "size": 17.0,
                "growth": 3.2,
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
                "rank": 15
            },
            "telecom": {
                "size": 8.5,
                "growth": 3.8,
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
                "rank": 15
            },
            "tourism": {
                "size": 11.8,
                "growth": 5.0,
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
                "rank": 8
            },
            "education": {
                "size": 16.2,
                "growth": 4.4,
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
                "rank": 11
            }
        },
        "gdp_growth_pct": 3.5,
        "inflation_pct": 1.4,
        "unemployment_pct": 5.4,
        "trade_pct_gdp": 131.8,
        "internet_users_pct": 99.8,
        "renewable_energy_pct": 39.5
    },
    "214": {
        "name": "Dominican Republic",
        "nameEn": "Dominican Republic",
        "code": "DO",
        "flag": "🇩🇴",
        "lat": 18.479,
        "lng": -69.8908,
        "gdp": 124.3,
        "pop": 11.4,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 6.2,
                "growth": 6.2,
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
                "rank": 26
            },
            "manufacturing": {
                "size": 15.5,
                "growth": 3.5,
                "potential": 79,
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
                "rank": 27
            },
            "finance": {
                "size": 8.7,
                "growth": 4.7,
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
                "rank": 27
            },
            "healthcare": {
                "size": 4.6,
                "growth": 5.6,
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
                "rank": 31
            },
            "energy": {
                "size": 5.0,
                "growth": 4.4,
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
                "rank": 27
            },
            "agriculture": {
                "size": 5.5,
                "growth": 3.2,
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
                "rank": 35
            },
            "automotive": {
                "size": 3.7,
                "growth": 4.4,
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
                "rank": 27
            },
            "retail": {
                "size": 7.5,
                "growth": 5.0,
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
                "rank": 26
            },
            "realestate": {
                "size": 5.0,
                "growth": 3.8,
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
                "rank": 26
            },
            "telecom": {
                "size": 2.5,
                "growth": 4.4,
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
                "rank": 26
            },
            "tourism": {
                "size": 7.6,
                "growth": 5.6,
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
            "education": {
                "size": 2.8,
                "growth": 5.0,
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
                "rank": 28
            }
        },
        "gdp_growth_pct": 5.0,
        "inflation_pct": 3.3,
        "unemployment_pct": 5.3,
        "trade_pct_gdp": 51.8,
        "internet_users_pct": 91.0,
        "renewable_energy_pct": 14.8
    },
    "012": {
        "name": "Algeria",
        "nameEn": "Algeria",
        "code": "DZ",
        "flag": "🇩🇿",
        "lat": 36.7397,
        "lng": 3.05097,
        "gdp": 269.3,
        "pop": 46.8,
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
                "rank": 22
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
                "rank": 22
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
                "rank": 23
            },
            "healthcare": {
                "size": 9.4,
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
                "rank": 23
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
                "rank": 23
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
                "rank": 12
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
                "rank": 24
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
                "rank": 22
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
                "rank": 22
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
                "rank": 22
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
                "rank": 30
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
                "rank": 12
            }
        },
        "gdp_growth_pct": 3.7,
        "inflation_pct": 4.0,
        "unemployment_pct": 11.7,
        "trade_pct_gdp": 40.1,
        "internet_users_pct": 77.4,
        "renewable_energy_pct": 0.1
    },
    "218": {
        "name": "Ecuador",
        "nameEn": "Ecuador",
        "code": "EC",
        "flag": "🇪🇨",
        "lat": -0.229498,
        "lng": -78.5243,
        "gdp": 124.7,
        "pop": 18.1,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 6.2,
                "growth": 4.2,
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
                "rank": 27
            },
            "manufacturing": {
                "size": 16.1,
                "growth": 1.5,
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
                "rank": 26
            },
            "finance": {
                "size": 8.7,
                "growth": 2.7,
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
                "rank": 28
            },
            "healthcare": {
                "size": 7.5,
                "growth": 3.6,
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
                "rank": 26
            },
            "energy": {
                "size": 5.0,
                "growth": 2.4,
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
                "rank": 28
            },
            "agriculture": {
                "size": 11.8,
                "growth": 1.2,
                "potential": 74,
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
                "rank": 20
            },
            "automotive": {
                "size": 3.7,
                "growth": 2.4,
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
                "rank": 28
            },
            "retail": {
                "size": 7.5,
                "growth": 3.0,
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
                "rank": 27
            },
            "realestate": {
                "size": 5.0,
                "growth": 1.8,
                "potential": 74,
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
                "rank": 27
            },
            "telecom": {
                "size": 2.5,
                "growth": 2.4,
                "potential": 74,
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
                "rank": 27
            },
            "tourism": {
                "size": 1,
                "growth": 3.6,
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
                "rank": 51
            },
            "education": {
                "size": 2.8,
                "growth": 3.0,
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
                "rank": 29
            }
        },
        "gdp_growth_pct": -2.0,
        "inflation_pct": 1.5,
        "unemployment_pct": 3.5,
        "trade_pct_gdp": 57.2,
        "internet_users_pct": 77.2,
        "renewable_energy_pct": 18.9
    },
    "818": {
        "name": "이집트",
        "nameEn": "Egypt, Arab Rep.",
        "code": "EG",
        "flag": "🇪🇬",
        "lat": 30.0982,
        "lng": 31.2461,
        "gdp": 389.1,
        "pop": 116.5,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 19.5,
                "growth": 5.7,
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
                "rank": 17
            },
            "manufacturing": {
                "size": 54.1,
                "growth": 3.0,
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
                "rank": 17
            },
            "finance": {
                "size": 27.2,
                "growth": 4.2,
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
                "rank": 18
            },
            "healthcare": {
                "size": 15.2,
                "growth": 5.1,
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
                "rank": 20
            },
            "energy": {
                "size": 15.6,
                "growth": 3.9,
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
                "rank": 17
            },
            "agriculture": {
                "size": 53.4,
                "growth": 2.7,
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
                "rank": 6
            },
            "automotive": {
                "size": 11.7,
                "growth": 3.9,
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
                "rank": 18
            },
            "retail": {
                "size": 23.3,
                "growth": 4.5,
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
                "rank": 17
            },
            "realestate": {
                "size": 15.6,
                "growth": 3.3,
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
                "rank": 17
            },
            "telecom": {
                "size": 7.8,
                "growth": 3.9,
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
                "rank": 17
            },
            "tourism": {
                "size": 4.9,
                "growth": 5.1,
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
                "rank": 19
            },
            "education": {
                "size": 7.8,
                "growth": 4.5,
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
                "rank": 20
            }
        },
        "gdp_growth_pct": 2.4,
        "inflation_pct": 28.3,
        "unemployment_pct": 6.8,
        "trade_pct_gdp": 39.6,
        "internet_users_pct": 74.6,
        "renewable_energy_pct": 6.1
    },
    "233": {
        "name": "Estonia",
        "nameEn": "Estonia",
        "code": "EE",
        "flag": "🇪🇪",
        "lat": 59.4392,
        "lng": 24.7586,
        "gdp": 43.1,
        "pop": 1.4,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 2.2,
                "growth": 4.2,
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
                "rank": 43
            },
            "manufacturing": {
                "size": 5.1,
                "growth": 1.5,
                "potential": 77,
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
                "rank": 44
            },
            "finance": {
                "size": 3.6,
                "growth": 2.7,
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
                "rank": 41
            },
            "healthcare": {
                "size": 2.7,
                "growth": 3.6,
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
                "rank": 35
            },
            "energy": {
                "size": 1.9,
                "growth": 2.4,
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
                "rank": 42
            },
            "agriculture": {
                "size": 1,
                "growth": 1.2,
                "potential": 74,
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
                "rank": 62
            },
            "automotive": {
                "size": 1.7,
                "growth": 2.4,
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
                "rank": 40
            },
            "retail": {
                "size": 2.6,
                "growth": 3.0,
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
                "rank": 43
            },
            "realestate": {
                "size": 1.7,
                "growth": 1.8,
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
                "rank": 43
            },
            "telecom": {
                "size": 1,
                "growth": 2.4,
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
                "rank": 53
            },
            "tourism": {
                "size": 1.1,
                "growth": 3.6,
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
                "rank": 32
            },
            "education": {
                "size": 1.3,
                "growth": 3.0,
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
                "rank": 40
            }
        },
        "gdp_growth_pct": -0.1,
        "inflation_pct": 3.5,
        "unemployment_pct": 7.6,
        "trade_pct_gdp": 151.0,
        "internet_users_pct": 92.2,
        "renewable_energy_pct": 38
    },
    "231": {
        "name": "에티오피아",
        "nameEn": "Ethiopia",
        "code": "ET",
        "flag": "🇪🇹",
        "lat": 9.02274,
        "lng": 38.7468,
        "gdp": 149.7,
        "pop": 132.1,
        "region": "Sub-Saharan Africa ",
        "income": "Not classified",
        "industries": {
            "tech": {
                "size": 7.5,
                "growth": 7.2,
                "potential": 67,
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
                "rank": 25
            },
            "manufacturing": {
                "size": 6.6,
                "growth": 4.5,
                "potential": 61,
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
                "rank": 40
            },
            "finance": {
                "size": 10.5,
                "growth": 5.7,
                "potential": 64,
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
                "rank": 25
            },
            "healthcare": {
                "size": 3.4,
                "growth": 6.6,
                "potential": 65,
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
                "rank": 33
            },
            "energy": {
                "size": 6.0,
                "growth": 5.4,
                "potential": 63,
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
                "rank": 25
            },
            "agriculture": {
                "size": 52.1,
                "growth": 4.2,
                "potential": 64,
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
                "size": 4.5,
                "growth": 5.4,
                "potential": 63,
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
                "rank": 25
            },
            "retail": {
                "size": 9.0,
                "growth": 6.0,
                "potential": 65,
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
                "rank": 25
            },
            "realestate": {
                "size": 6.0,
                "growth": 4.8,
                "potential": 62,
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
                "rank": 25
            },
            "telecom": {
                "size": 3.0,
                "growth": 5.4,
                "potential": 62,
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
                "rank": 25
            },
            "tourism": {
                "size": 2.3,
                "growth": 6.6,
                "potential": 64,
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
                "rank": 23
            },
            "education": {
                "size": 2.1,
                "growth": 6.0,
                "potential": 63,
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
                "rank": 33
            }
        },
        "gdp_growth_pct": 7.6,
        "inflation_pct": 21.0,
        "unemployment_pct": 3.4,
        "trade_pct_gdp": 17.4,
        "internet_users_pct": 21.9,
        "renewable_energy_pct": 90.6
    },
    "246": {
        "name": "핀란드",
        "nameEn": "Finland",
        "code": "FI",
        "flag": "🇫🇮",
        "lat": 60.1608,
        "lng": 24.9525,
        "gdp": 298.7,
        "pop": 5.6,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 14.9,
                "growth": 4.4,
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
                "rank": 20
            },
            "manufacturing": {
                "size": 46.8,
                "growth": 1.7,
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
                "rank": 18
            },
            "finance": {
                "size": 25.1,
                "growth": 2.9,
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
                "rank": 19
            },
            "healthcare": {
                "size": 25.0,
                "growth": 3.8,
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
                "rank": 16
            },
            "energy": {
                "size": 13.1,
                "growth": 2.6,
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
                "rank": 20
            },
            "agriculture": {
                "size": 7.4,
                "growth": 1.4,
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
                "rank": 27
            },
            "automotive": {
                "size": 11.6,
                "growth": 2.6,
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
                "rank": 19
            },
            "retail": {
                "size": 17.9,
                "growth": 3.2,
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
                "rank": 20
            },
            "realestate": {
                "size": 11.9,
                "growth": 2.0,
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
                "rank": 20
            },
            "telecom": {
                "size": 6.0,
                "growth": 2.6,
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
                "rank": 20
            },
            "tourism": {
                "size": 2.3,
                "growth": 3.8,
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
                "rank": 24
            },
            "education": {
                "size": 11.4,
                "growth": 3.2,
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
                "rank": 14
            }
        },
        "gdp_growth_pct": 0.4,
        "inflation_pct": 1.6,
        "unemployment_pct": 8.4,
        "trade_pct_gdp": 83.5,
        "internet_users_pct": 93.7,
        "renewable_energy_pct": 50.2
    },
    "250": {
        "name": "프랑스",
        "nameEn": "France",
        "code": "FR",
        "flag": "🇫🇷",
        "lat": 48.8566,
        "lng": 2.35097,
        "gdp": 3160.4,
        "pop": 68.6,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 158.0,
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
                "rank": 5
            },
            "manufacturing": {
                "size": 332.6,
                "growth": 2.0,
                "potential": 84,
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
                "size": 265.5,
                "growth": 3.2,
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
                "rank": 4
            },
            "healthcare": {
                "size": 291.6,
                "growth": 4.1,
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
                "rank": 4
            },
            "energy": {
                "size": 139.1,
                "growth": 2.9,
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
                "rank": 4
            },
            "agriculture": {
                "size": 41.1,
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
                "rank": 10
            },
            "automotive": {
                "size": 123.3,
                "growth": 2.9,
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
                "rank": 3
            },
            "retail": {
                "size": 189.6,
                "growth": 3.5,
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
                "rank": 4
            },
            "realestate": {
                "size": 126.4,
                "growth": 2.3,
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
            "telecom": {
                "size": 63.2,
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
                "rank": 4
            },
            "tourism": {
                "size": 46.7,
                "growth": 4.1,
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
                "rank": 3
            },
            "education": {
                "size": 101.0,
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
                "rank": 4
            }
        },
        "gdp_growth_pct": 1.2,
        "inflation_pct": 2.0,
        "unemployment_pct": 7.4,
        "trade_pct_gdp": 68.1,
        "internet_users_pct": 88.7,
        "renewable_energy_pct": 16.2
    },
    "266": {
        "name": "Gabon",
        "nameEn": "Gabon",
        "code": "GA",
        "flag": "🇬🇦",
        "lat": 0.38832,
        "lng": 9.45162,
        "gdp": 20.9,
        "pop": 2.5,
        "region": "Sub-Saharan Africa ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 5.6,
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
                "rank": 61
            },
            "manufacturing": {
                "size": 4.1,
                "growth": 2.9,
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
                "rank": 48
            },
            "finance": {
                "size": 1.5,
                "growth": 4.1,
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
                "rank": 57
            },
            "healthcare": {
                "size": 1,
                "growth": 5.0,
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
                "rank": 58
            },
            "energy": {
                "size": 1,
                "growth": 3.8,
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
                "rank": 58
            },
            "agriculture": {
                "size": 1.4,
                "growth": 2.6,
                "potential": 74,
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
                "rank": 54
            },
            "automotive": {
                "size": 1,
                "growth": 3.8,
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
                "rank": 58
            },
            "retail": {
                "size": 1.3,
                "growth": 4.4,
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
                "rank": 57
            },
            "realestate": {
                "size": 1,
                "growth": 3.2,
                "potential": 74,
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
                "rank": 58
            },
            "telecom": {
                "size": 1,
                "growth": 3.8,
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
                "rank": 54
            },
            "tourism": {
                "size": 1,
                "growth": 5.0,
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
                "rank": 52
            },
            "education": {
                "size": 1,
                "growth": 4.4,
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
                "rank": 54
            }
        },
        "gdp_growth_pct": 3.4,
        "inflation_pct": 1.2,
        "unemployment_pct": 20.1,
        "trade_pct_gdp": 92.0,
        "internet_users_pct": 68.7,
        "renewable_energy_pct": 91.3
    },
    "268": {
        "name": "Georgia",
        "nameEn": "Georgia",
        "code": "GE",
        "flag": "🇬🇪",
        "lat": 41.71,
        "lng": 44.793,
        "gdp": 34.2,
        "pop": 3.7,
        "region": "Europe & Central Asia",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1.7,
                "growth": 8.1,
                "potential": 85,
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
                "rank": 47
            },
            "manufacturing": {
                "size": 3.2,
                "growth": 5.4,
                "potential": 80,
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
                "rank": 49
            },
            "finance": {
                "size": 2.9,
                "growth": 6.6,
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
                "rank": 45
            },
            "healthcare": {
                "size": 1.9,
                "growth": 7.5,
                "potential": 84,
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
                "rank": 48
            },
            "energy": {
                "size": 1.5,
                "growth": 6.3,
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
                "rank": 45
            },
            "agriculture": {
                "size": 1.9,
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
                "rank": 50
            },
            "automotive": {
                "size": 1.3,
                "growth": 6.3,
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
                "rank": 45
            },
            "retail": {
                "size": 2.1,
                "growth": 6.9,
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
                "rank": 46
            },
            "realestate": {
                "size": 1.4,
                "growth": 5.7,
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
                "rank": 46
            },
            "telecom": {
                "size": 1,
                "growth": 6.3,
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
                "rank": 55
            },
            "tourism": {
                "size": 1,
                "growth": 7.5,
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
                "rank": 53
            },
            "education": {
                "size": 1,
                "growth": 6.9,
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
                "rank": 55
            }
        },
        "gdp_growth_pct": 9.7,
        "inflation_pct": 1.1,
        "unemployment_pct": 11.6,
        "trade_pct_gdp": 103.5,
        "internet_users_pct": 83.8,
        "renewable_energy_pct": 25.2
    },
    "288": {
        "name": "가나",
        "nameEn": "Ghana",
        "code": "GH",
        "flag": "🇬🇭",
        "lat": 5.57045,
        "lng": -0.20795,
        "gdp": 82.3,
        "pop": 34.4,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 4.1,
                "growth": 6.9,
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
                "rank": 35
            },
            "manufacturing": {
                "size": 8.1,
                "growth": 4.2,
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
                "rank": 36
            },
            "finance": {
                "size": 5.8,
                "growth": 5.4,
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
                "rank": 37
            },
            "healthcare": {
                "size": 1.9,
                "growth": 6.3,
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
                "rank": 49
            },
            "energy": {
                "size": 3.3,
                "growth": 5.1,
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
                "rank": 37
            },
            "agriculture": {
                "size": 17.2,
                "growth": 3.9,
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
                "rank": 17
            },
            "automotive": {
                "size": 2.5,
                "growth": 5.1,
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
                "rank": 37
            },
            "retail": {
                "size": 4.9,
                "growth": 5.7,
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
                "rank": 35
            },
            "realestate": {
                "size": 3.3,
                "growth": 4.5,
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
                "rank": 35
            },
            "telecom": {
                "size": 1.6,
                "growth": 5.1,
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
                "rank": 35
            },
            "tourism": {
                "size": 1,
                "growth": 6.3,
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
                "rank": 54
            },
            "education": {
                "size": 1.4,
                "growth": 5.7,
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
                "rank": 39
            }
        },
        "gdp_growth_pct": 5.6,
        "inflation_pct": 22.8,
        "unemployment_pct": 2.8,
        "trade_pct_gdp": 69.8,
        "internet_users_pct": 72.2,
        "renewable_energy_pct": 39
    },
    "324": {
        "name": "Guinea",
        "nameEn": "Guinea",
        "code": "GN",
        "flag": "🇬🇳",
        "lat": 9.51667,
        "lng": -13.7,
        "gdp": 25.0,
        "pop": 14.8,
        "region": "Sub-Saharan Africa ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1.2,
                "growth": 6.8,
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
                "rank": 54
            },
            "manufacturing": {
                "size": 3.2,
                "growth": 4.1,
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
                "rank": 50
            },
            "finance": {
                "size": 1.8,
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
                "rank": 52
            },
            "healthcare": {
                "size": 1,
                "growth": 6.2,
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
                "rank": 59
            },
            "energy": {
                "size": 1,
                "growth": 5.0,
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
                "rank": 59
            },
            "agriculture": {
                "size": 7.7,
                "growth": 3.8,
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
                "rank": 25
            },
            "automotive": {
                "size": 1,
                "growth": 5.0,
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
                "rank": 59
            },
            "retail": {
                "size": 1.5,
                "growth": 5.6,
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
                "rank": 52
            },
            "realestate": {
                "size": 1,
                "growth": 4.4,
                "potential": 71,
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
                "rank": 59
            },
            "telecom": {
                "size": 1,
                "growth": 5.0,
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
                "rank": 56
            },
            "tourism": {
                "size": 1,
                "growth": 6.2,
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
                "rank": 55
            },
            "education": {
                "size": 1,
                "growth": 5.6,
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
                "rank": 56
            }
        },
        "gdp_growth_pct": 5.4,
        "inflation_pct": 8.1,
        "unemployment_pct": 5.1,
        "trade_pct_gdp": 97.8,
        "internet_users_pct": 33.3,
        "renewable_energy_pct": 66.6
    },
    "226": {
        "name": "Equatorial Guinea",
        "nameEn": "Equatorial Guinea",
        "code": "GQ",
        "flag": "🇬🇶",
        "lat": 3.7523,
        "lng": 8.7741,
        "gdp": 12.8,
        "pop": 1.9,
        "region": "Sub-Saharan Africa ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
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
                "rank": 62
            },
            "manufacturing": {
                "size": 3.2,
                "growth": 1.9,
                "potential": 73,
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
                "rank": 51
            },
            "finance": {
                "size": 1,
                "growth": 3.1,
                "potential": 74,
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
                "rank": 63
            },
            "healthcare": {
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
                "rank": 60
            },
            "energy": {
                "size": 1,
                "growth": 2.8,
                "potential": 74,
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
                "rank": 60
            },
            "agriculture": {
                "size": 1,
                "growth": 1.6,
                "potential": 71,
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
                "rank": 63
            },
            "automotive": {
                "size": 1,
                "growth": 2.8,
                "potential": 74,
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
                "rank": 60
            },
            "retail": {
                "size": 1,
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
                "rank": 63
            },
            "realestate": {
                "size": 1,
                "growth": 2.2,
                "potential": 72,
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
                "rank": 60
            },
            "telecom": {
                "size": 1,
                "growth": 2.8,
                "potential": 74,
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
                "rank": 57
            },
            "tourism": {
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
                "rank": 56
            },
            "education": {
                "size": 1,
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
                "rank": 57
            }
        },
        "gdp_growth_pct": 0.9,
        "inflation_pct": 2.9,
        "unemployment_pct": 8.3,
        "trade_pct_gdp": 60.5,
        "internet_users_pct": 63.3,
        "renewable_energy_pct": 4.2
    },
    "300": {
        "name": "그리스",
        "nameEn": "Greece",
        "code": "GR",
        "flag": "🇬🇷",
        "lat": 37.9792,
        "lng": 23.7166,
        "gdp": 256.2,
        "pop": 10.4,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 12.8,
                "growth": 5.0,
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
                "rank": 23
            },
            "manufacturing": {
                "size": 25.5,
                "growth": 2.3,
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
                "rank": 23
            },
            "finance": {
                "size": 21.5,
                "growth": 3.5,
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
                "rank": 21
            },
            "healthcare": {
                "size": 17.2,
                "growth": 4.4,
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
                "rank": 19
            },
            "energy": {
                "size": 11.3,
                "growth": 3.2,
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
                "rank": 21
            },
            "agriculture": {
                "size": 9.6,
                "growth": 2.0,
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
                "rank": 23
            },
            "automotive": {
                "size": 10.0,
                "growth": 3.2,
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
                "rank": 20
            },
            "retail": {
                "size": 15.4,
                "growth": 3.8,
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
                "rank": 23
            },
            "realestate": {
                "size": 10.2,
                "growth": 2.6,
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
                "rank": 23
            },
            "telecom": {
                "size": 5.1,
                "growth": 3.2,
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
                "rank": 23
            },
            "tourism": {
                "size": 8.1,
                "growth": 4.4,
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
                "rank": 11
            },
            "education": {
                "size": 5.2,
                "growth": 3.8,
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
                "rank": 24
            }
        },
        "gdp_growth_pct": 2.1,
        "inflation_pct": 2.7,
        "unemployment_pct": 10.0,
        "trade_pct_gdp": 89.8,
        "internet_users_pct": 86.3,
        "renewable_energy_pct": 21.5
    },
    "320": {
        "name": "Guatemala",
        "nameEn": "Guatemala",
        "code": "GT",
        "flag": "🇬🇹",
        "lat": 14.6248,
        "lng": -90.5328,
        "gdp": 113.2,
        "pop": 18.4,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 5.7,
                "growth": 5.7,
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
                "rank": 29
            },
            "manufacturing": {
                "size": 15.4,
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
                "rank": 28
            },
            "finance": {
                "size": 7.9,
                "growth": 4.2,
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
                "rank": 29
            },
            "healthcare": {
                "size": 6.2,
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
                "rank": 28
            },
            "energy": {
                "size": 4.5,
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
                "rank": 29
            },
            "agriculture": {
                "size": 11.1,
                "growth": 2.7,
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
                "rank": 21
            },
            "automotive": {
                "size": 3.4,
                "growth": 3.9,
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
                "rank": 30
            },
            "retail": {
                "size": 6.8,
                "growth": 4.5,
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
                "rank": 29
            },
            "realestate": {
                "size": 4.5,
                "growth": 3.3,
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
                "rank": 29
            },
            "telecom": {
                "size": 2.3,
                "growth": 3.9,
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
                "rank": 29
            },
            "tourism": {
                "size": 1,
                "growth": 5.1,
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
                "rank": 57
            },
            "education": {
                "size": 2.1,
                "growth": 4.5,
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
                "rank": 34
            }
        },
        "gdp_growth_pct": 3.7,
        "inflation_pct": 2.9,
        "unemployment_pct": 2.6,
        "trade_pct_gdp": 47.3,
        "internet_users_pct": 60.2,
        "renewable_energy_pct": 62.1
    },
    "328": {
        "name": "Guyana",
        "nameEn": "Guyana",
        "code": "GY",
        "flag": "🇬🇾",
        "lat": 6.80461,
        "lng": -58.1548,
        "gdp": 24.7,
        "pop": 0.8,
        "region": "Latin America & Caribbean ",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 1.2,
                "growth": 21.7,
                "potential": 99,
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
                "rank": 55
            },
            "manufacturing": {
                "size": 1,
                "growth": 19.0,
                "potential": 99,
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
                "rank": 63
            },
            "finance": {
                "size": 1.7,
                "growth": 20.2,
                "potential": 99,
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
                "rank": 54
            },
            "healthcare": {
                "size": 1,
                "growth": 21.1,
                "potential": 99,
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
                "rank": 61
            },
            "energy": {
                "size": 1,
                "growth": 19.9,
                "potential": 99,
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
                "rank": 61
            },
            "agriculture": {
                "size": 1.9,
                "growth": 18.7,
                "potential": 99,
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
                "rank": 51
            },
            "automotive": {
                "size": 1,
                "growth": 19.9,
                "potential": 99,
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
                "rank": 61
            },
            "retail": {
                "size": 1.5,
                "growth": 20.5,
                "potential": 99,
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
                "rank": 53
            },
            "realestate": {
                "size": 1,
                "growth": 19.3,
                "potential": 99,
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
                "rank": 61
            },
            "telecom": {
                "size": 1,
                "growth": 19.9,
                "potential": 99,
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
                "rank": 58
            },
            "tourism": {
                "size": 1,
                "growth": 21.1,
                "potential": 99,
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
                "rank": 58
            },
            "education": {
                "size": 1,
                "growth": 20.5,
                "potential": 99,
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
                "rank": 58
            }
        },
        "gdp_growth_pct": 43.8,
        "inflation_pct": 2.9,
        "unemployment_pct": 11.9,
        "internet_users_pct": 83.0,
        "renewable_energy_pct": 12.1
    },
    "340": {
        "name": "Honduras",
        "nameEn": "Honduras",
        "code": "HN",
        "flag": "🇭🇳",
        "lat": 15.1333,
        "lng": -87.4667,
        "gdp": 37.1,
        "pop": 10.8,
        "region": "Latin America & Caribbean ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1.9,
                "growth": 6.1,
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
                "rank": 45
            },
            "manufacturing": {
                "size": 5.5,
                "growth": 3.4,
                "potential": 71,
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
                "rank": 43
            },
            "finance": {
                "size": 2.6,
                "growth": 4.6,
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
                "rank": 47
            },
            "healthcare": {
                "size": 2.3,
                "growth": 5.5,
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
                "rank": 41
            },
            "energy": {
                "size": 1.5,
                "growth": 4.3,
                "potential": 71,
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
                "rank": 46
            },
            "agriculture": {
                "size": 4.2,
                "growth": 3.1,
                "potential": 70,
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
                "rank": 43
            },
            "automotive": {
                "size": 1.1,
                "growth": 4.3,
                "potential": 71,
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
                "rank": 49
            },
            "retail": {
                "size": 2.2,
                "growth": 4.9,
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
                "rank": 45
            },
            "realestate": {
                "size": 1.5,
                "growth": 3.7,
                "potential": 70,
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
                "rank": 45
            },
            "telecom": {
                "size": 1,
                "growth": 4.3,
                "potential": 71,
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
                "rank": 59
            },
            "tourism": {
                "size": 1,
                "growth": 5.5,
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
                "rank": 59
            },
            "education": {
                "size": 1,
                "growth": 4.9,
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
                "rank": 59
            }
        },
        "gdp_growth_pct": 3.6,
        "inflation_pct": 4.6,
        "unemployment_pct": 4.9,
        "trade_pct_gdp": 91.1,
        "internet_users_pct": 58.6,
        "renewable_energy_pct": 45.9
    },
    "191": {
        "name": "Croatia",
        "nameEn": "Croatia",
        "code": "HR",
        "flag": "🇭🇷",
        "lat": 45.8069,
        "lng": 15.9614,
        "gdp": 93.0,
        "pop": 3.9,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 4.7,
                "growth": 5.7,
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
                "rank": 33
            },
            "manufacturing": {
                "size": 10.7,
                "growth": 3.0,
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
                "rank": 34
            },
            "finance": {
                "size": 7.8,
                "growth": 4.2,
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
                "rank": 30
            },
            "healthcare": {
                "size": 5.3,
                "growth": 5.1,
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
                "rank": 29
            },
            "energy": {
                "size": 4.1,
                "growth": 3.9,
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
                "rank": 31
            },
            "agriculture": {
                "size": 2.7,
                "growth": 2.7,
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
                "rank": 48
            },
            "automotive": {
                "size": 3.6,
                "growth": 3.9,
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
                "rank": 29
            },
            "retail": {
                "size": 5.6,
                "growth": 4.5,
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
                "rank": 33
            },
            "realestate": {
                "size": 3.7,
                "growth": 3.3,
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
                "rank": 33
            },
            "telecom": {
                "size": 1.9,
                "growth": 3.9,
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
                "rank": 33
            },
            "tourism": {
                "size": 7.3,
                "growth": 5.1,
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
                "rank": 13
            },
            "education": {
                "size": 2.3,
                "growth": 4.5,
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
                "rank": 32
            }
        },
        "gdp_growth_pct": 3.8,
        "inflation_pct": 3.0,
        "unemployment_pct": 5,
        "trade_pct_gdp": 104.9,
        "internet_users_pct": 83.6,
        "renewable_energy_pct": 34.1
    },
    "332": {
        "name": "Haiti",
        "nameEn": "Haiti",
        "code": "HT",
        "flag": "🇭🇹",
        "lat": 18.5392,
        "lng": -72.3288,
        "gdp": 25.2,
        "pop": 11.8,
        "region": "Latin America & Caribbean ",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 1.3,
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
                "rank": 52
            },
            "manufacturing": {
                "size": 6.6,
                "growth": 2.0,
                "potential": 68,
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
                "rank": 41
            },
            "finance": {
                "size": 1.8,
                "growth": 3.2,
                "potential": 69,
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
                "rank": 53
            },
            "healthcare": {
                "size": 1,
                "growth": 4.1,
                "potential": 70,
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
                "rank": 62
            },
            "energy": {
                "size": 1,
                "growth": 2.9,
                "potential": 68,
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
                "rank": 62
            },
            "agriculture": {
                "size": 4.0,
                "growth": 1.7,
                "potential": 67,
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
                "rank": 44
            },
            "automotive": {
                "size": 1,
                "growth": 2.9,
                "potential": 68,
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
                "rank": 62
            },
            "retail": {
                "size": 1.5,
                "growth": 3.5,
                "potential": 70,
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
                "rank": 54
            },
            "realestate": {
                "size": 1,
                "growth": 2.3,
                "potential": 67,
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
                "rank": 62
            },
            "telecom": {
                "size": 1,
                "growth": 2.9,
                "potential": 68,
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
                "rank": 60
            },
            "tourism": {
                "size": 1,
                "growth": 4.1,
                "potential": 70,
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
                "rank": 60
            },
            "education": {
                "size": 1,
                "growth": 3.5,
                "potential": 69,
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
                "rank": 60
            }
        },
        "gdp_growth_pct": -4.2,
        "inflation_pct": 26.9,
        "unemployment_pct": 14.6,
        "trade_pct_gdp": 22.2,
        "internet_users_pct": 47.9,
        "renewable_energy_pct": 76.7
    },
    "348": {
        "name": "헝가리",
        "nameEn": "Hungary",
        "code": "HU",
        "flag": "🇭🇺",
        "lat": 47.4984,
        "lng": 19.0408,
        "gdp": 222.7,
        "pop": 9.6,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 11.1,
                "growth": 4.4,
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
                "rank": 24
            },
            "manufacturing": {
                "size": 38.7,
                "growth": 1.7,
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
                "rank": 20
            },
            "finance": {
                "size": 18.7,
                "growth": 2.9,
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
                "rank": 24
            },
            "healthcare": {
                "size": 11.3,
                "growth": 3.8,
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
                "rank": 22
            },
            "energy": {
                "size": 9.8,
                "growth": 2.6,
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
                "rank": 24
            },
            "agriculture": {
                "size": 6.0,
                "growth": 1.4,
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
                "rank": 34
            },
            "automotive": {
                "size": 8.7,
                "growth": 2.6,
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
                "rank": 22
            },
            "retail": {
                "size": 13.4,
                "growth": 3.2,
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
                "rank": 24
            },
            "realestate": {
                "size": 8.9,
                "growth": 2.0,
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
                "rank": 24
            },
            "telecom": {
                "size": 4.5,
                "growth": 2.6,
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
                "rank": 24
            },
            "tourism": {
                "size": 5.5,
                "growth": 3.8,
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
                "rank": 15
            },
            "education": {
                "size": 5.1,
                "growth": 3.2,
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
                "rank": 25
            }
        },
        "gdp_growth_pct": 0.6,
        "inflation_pct": 3.7,
        "unemployment_pct": 4.5,
        "trade_pct_gdp": 146.5,
        "internet_users_pct": 93.8,
        "renewable_energy_pct": 15.3
    },
    "360": {
        "name": "인도네시아",
        "nameEn": "Indonesia",
        "code": "ID",
        "flag": "🇮🇩",
        "lat": -6.19752,
        "lng": 106.83,
        "gdp": 1396.3,
        "pop": 283.5,
        "region": "East Asia & Pacific",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 104.7,
                "growth": 6.2,
                "potential": 86,
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
                "size": 424.1,
                "growth": 3.5,
                "potential": 83,
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
                "rank": 4
            },
            "finance": {
                "size": 97.7,
                "growth": 4.7,
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
                "rank": 8
            },
            "healthcare": {
                "size": 30.2,
                "growth": 5.6,
                "potential": 84,
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
                "size": 55.9,
                "growth": 4.4,
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
                "rank": 8
            },
            "agriculture": {
                "size": 176.1,
                "growth": 3.2,
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
            "automotive": {
                "size": 54.5,
                "growth": 4.4,
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
                "rank": 8
            },
            "retail": {
                "size": 83.8,
                "growth": 5.0,
                "potential": 84,
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
                "size": 55.9,
                "growth": 3.8,
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
            "telecom": {
                "size": 33.5,
                "growth": 4.4,
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
            "tourism": {
                "size": 7.0,
                "growth": 5.6,
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
                "rank": 14
            },
            "education": {
                "size": 10.7,
                "growth": 5.0,
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
                "rank": 15
            }
        },
        "gdp_growth_pct": 5.0,
        "inflation_pct": 2.2,
        "unemployment_pct": 3.3,
        "trade_pct_gdp": 42.6,
        "internet_users_pct": 72.8,
        "renewable_energy_pct": 20.2
    },
    "356": {
        "name": "인도",
        "nameEn": "India",
        "code": "IN",
        "flag": "🇮🇳",
        "lat": 28.6353,
        "lng": 77.225,
        "gdp": 3909.9,
        "pop": 1450.9,
        "region": "South Asia",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 254.1,
                "growth": 7.3,
                "potential": 84,
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
                "rank": 2
            },
            "manufacturing": {
                "size": 493.0,
                "growth": 4.6,
                "potential": 79,
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
                "rank": 3
            },
            "finance": {
                "size": 273.7,
                "growth": 5.8,
                "potential": 81,
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
                "rank": 3
            },
            "healthcare": {
                "size": 104.5,
                "growth": 6.7,
                "potential": 81,
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
                "size": 156.4,
                "growth": 5.5,
                "potential": 80,
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
                "rank": 3
            },
            "agriculture": {
                "size": 1146.1,
                "growth": 4.3,
                "potential": 80,
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
                "rank": 2
            },
            "automotive": {
                "size": 117.3,
                "growth": 5.5,
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
            "retail": {
                "size": 305.0,
                "growth": 6.1,
                "potential": 82,
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
                "rank": 2
            },
            "realestate": {
                "size": 156.4,
                "growth": 4.9,
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
                "rank": 3
            },
            "telecom": {
                "size": 78.2,
                "growth": 5.5,
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
                "rank": 3
            },
            "tourism": {
                "size": 19.5,
                "growth": 6.7,
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
                "rank": 7
            },
            "education": {
                "size": 115.4,
                "growth": 6.1,
                "potential": 80,
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
                "rank": 3
            }
        },
        "gdp_growth_pct": 6.5,
        "inflation_pct": 5.0,
        "unemployment_pct": 4.2,
        "trade_pct_gdp": 44.6,
        "internet_users_pct": 64.9,
        "renewable_energy_pct": 34.9
    },
    "372": {
        "name": "아일랜드",
        "nameEn": "Ireland",
        "code": "IE",
        "flag": "🇮🇪",
        "lat": 53.3441,
        "lng": -6.26749,
        "gdp": 609.2,
        "pop": 5.4,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 30.5,
                "growth": 5.2,
                "potential": 87,
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
                "rank": 11
            },
            "manufacturing": {
                "size": 198.1,
                "growth": 2.5,
                "potential": 84,
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
                "rank": 7
            },
            "finance": {
                "size": 51.2,
                "growth": 3.7,
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
                "rank": 10
            },
            "healthcare": {
                "size": 33.4,
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
                "rank": 11
            },
            "energy": {
                "size": 26.8,
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
                "rank": 10
            },
            "agriculture": {
                "size": 6.2,
                "growth": 2.2,
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
                "rank": 32
            },
            "automotive": {
                "size": 23.8,
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
                "rank": 10
            },
            "retail": {
                "size": 36.6,
                "growth": 4.0,
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
                "rank": 11
            },
            "realestate": {
                "size": 24.4,
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
                "rank": 11
            },
            "telecom": {
                "size": 12.2,
                "growth": 3.4,
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
                "rank": 11
            },
            "tourism": {
                "size": 5.4,
                "growth": 4.6,
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
                "rank": 16
            },
            "education": {
                "size": 10.6,
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
                "rank": 16
            }
        },
        "gdp_growth_pct": 2.6,
        "inflation_pct": 2.1,
        "unemployment_pct": 4.3,
        "trade_pct_gdp": 246.2,
        "internet_users_pct": 97.2,
        "renewable_energy_pct": 12.7
    },
    "364": {
        "name": "Iran, Islamic Rep.",
        "nameEn": "Iran, Islamic Rep.",
        "code": "IR",
        "flag": "🇮🇷",
        "lat": 35.6878,
        "lng": 51.4447,
        "gdp": 475.3,
        "pop": 91.6,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 23.8,
                "growth": 5.7,
                "potential": 84,
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
            "manufacturing": {
                "size": 97.9,
                "growth": 3.0,
                "potential": 80,
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
                "size": 33.3,
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
                "rank": 14
            },
            "healthcare": {
                "size": 22.9,
                "growth": 5.1,
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
                "rank": 18
            },
            "energy": {
                "size": 19.0,
                "growth": 3.9,
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
            "agriculture": {
                "size": 51.3,
                "growth": 2.7,
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
            "automotive": {
                "size": 14.3,
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
                "rank": 14
            },
            "retail": {
                "size": 28.5,
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
                "rank": 14
            },
            "realestate": {
                "size": 19.0,
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
                "rank": 13
            },
            "telecom": {
                "size": 9.5,
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
                "rank": 13
            },
            "tourism": {
                "size": 5.3,
                "growth": 5.1,
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
                "rank": 17
            },
            "education": {
                "size": 8.1,
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
                "rank": 19
            }
        },
        "gdp_growth_pct": 3.7,
        "inflation_pct": 32.5,
        "unemployment_pct": 8.1,
        "trade_pct_gdp": 52.1,
        "internet_users_pct": 85.3,
        "renewable_energy_pct": 0.9
    },
    "368": {
        "name": "이라크",
        "nameEn": "Iraq",
        "code": "IQ",
        "flag": "🇮🇶",
        "lat": 33.3302,
        "lng": 44.394,
        "gdp": 279.6,
        "pop": 46.0,
        "region": "Middle East, North Africa, Afghanistan & Pakistan",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 14.0,
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
                "rank": 21
            },
            "manufacturing": {
                "size": 11.4,
                "growth": 1.5,
                "potential": 74,
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
                "rank": 32
            },
            "finance": {
                "size": 19.6,
                "growth": 2.7,
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
                "rank": 22
            },
            "healthcare": {
                "size": 12.4,
                "growth": 3.6,
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
                "rank": 21
            },
            "energy": {
                "size": 11.2,
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
                "rank": 22
            },
            "agriculture": {
                "size": 9.5,
                "growth": 1.2,
                "potential": 73,
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
                "rank": 24
            },
            "automotive": {
                "size": 8.4,
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
                "rank": 23
            },
            "retail": {
                "size": 16.8,
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
                "rank": 21
            },
            "realestate": {
                "size": 11.2,
                "growth": 1.8,
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
                "rank": 21
            },
            "telecom": {
                "size": 5.6,
                "growth": 2.4,
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
                "rank": 21
            },
            "tourism": {
                "size": 1.4,
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
                "rank": 29
            },
            "education": {
                "size": 5.6,
                "growth": 3.0,
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
                "rank": 22
            }
        },
        "gdp_growth_pct": -1.5,
        "inflation_pct": -12.3,
        "unemployment_pct": 15.3,
        "trade_pct_gdp": 70.7,
        "internet_users_pct": 81.5,
        "renewable_energy_pct": 1.1
    },
    "352": {
        "name": "Iceland",
        "nameEn": "Iceland",
        "code": "IS",
        "flag": "🇮🇸",
        "lat": 64.1353,
        "lng": -21.8952,
        "gdp": 33.3,
        "pop": 0.4,
        "region": "Europe & Central Asia",
        "income": "High income",
        "industries": {
            "tech": {
                "size": 1.7,
                "growth": 4.2,
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
                "rank": 48
            },
            "manufacturing": {
                "size": 3.1,
                "growth": 1.5,
                "potential": 76,
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
                "rank": 52
            },
            "finance": {
                "size": 2.8,
                "growth": 2.7,
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
                "rank": 46
            },
            "healthcare": {
                "size": 2.4,
                "growth": 3.6,
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
                "rank": 40
            },
            "energy": {
                "size": 1.5,
                "growth": 2.4,
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
                "rank": 47
            },
            "agriculture": {
                "size": 1.3,
                "growth": 1.2,
                "potential": 75,
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
                "rank": 57
            },
            "automotive": {
                "size": 1.3,
                "growth": 2.4,
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
                "rank": 46
            },
            "retail": {
                "size": 2.0,
                "growth": 3.0,
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
                "rank": 48
            },
            "realestate": {
                "size": 1.3,
                "growth": 1.8,
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
                "rank": 48
            },
            "telecom": {
                "size": 1,
                "growth": 2.4,
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
                "rank": 61
            },
            "tourism": {
                "size": 1,
                "growth": 3.6,
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
                "rank": 61
            },
            "education": {
                "size": 1.5,
                "growth": 3.0,
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
                "rank": 38
            }
        },
        "gdp_growth_pct": -1.0,
        "inflation_pct": 5.9,
        "unemployment_pct": 3.6,
        "trade_pct_gdp": 86.0,
        "internet_users_pct": 98.2,
        "renewable_energy_pct": 82.4
    },
    "116": {
        "name": "Cambodia",
        "nameEn": "Cambodia",
        "code": "KH",
        "flag": "🇰🇭",
        "lat": 11.5556,
        "lng": 104.874,
        "gdp": 46.4,
        "pop": 17.6,
        "region": "East Asia & Pacific",
        "income": "Lower middle income",
        "industries": {
            "tech": {
                "size": 3.5,
                "growth": 7.1,
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
                "rank": 39
            },
            "manufacturing": {
                "size": 20.6,
                "growth": 4.4,
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
                "rank": 24
            },
            "finance": {
                "size": 3.2,
                "growth": 5.6,
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
                "rank": 44
            },
            "healthcare": {
                "size": 1.7,
                "growth": 6.5,
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
                "rank": 50
            },
            "energy": {
                "size": 1.9,
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
                "rank": 43
            },
            "agriculture": {
                "size": 7.7,
                "growth": 4.1,
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
                "rank": 26
            },
            "automotive": {
                "size": 1.8,
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
                "rank": 39
            },
            "retail": {
                "size": 2.8,
                "growth": 5.9,
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
                "rank": 42
            },
            "realestate": {
                "size": 1.9,
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
                "rank": 42
            },
            "telecom": {
                "size": 1.1,
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
                "rank": 41
            },
            "tourism": {
                "size": 1.1,
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
                "rank": 33
            },
            "education": {
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
                "rank": 61
            }
        },
        "gdp_growth_pct": 6.0,
        "inflation_pct": 0.8,
        "unemployment_pct": 0.3,
        "trade_pct_gdp": 143.4,
        "internet_users_pct": 68.5,
        "renewable_energy_pct": 52.4
    },
    "222": {
        "name": "El Salvador",
        "nameEn": "El Salvador",
        "code": "SV",
        "flag": "🇸🇻",
        "lat": 13.7034,
        "lng": -89.2073,
        "gdp": 35.4,
        "pop": 6.3,
        "region": "Latin America & Caribbean ",
        "income": "Upper middle income",
        "industries": {
            "tech": {
                "size": 1.8,
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
                "rank": 46
            },
            "manufacturing": {
                "size": 4.3,
                "growth": 2.5,
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
                "rank": 46
            },
            "finance": {
                "size": 2.5,
                "growth": 3.7,
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
                "rank": 49
            },
            "healthcare": {
                "size": 2.6,
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
                "rank": 36
            },
            "energy": {
                "size": 1.4,
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
                "rank": 48
            },
            "agriculture": {
                "size": 1.6,
                "growth": 2.2,
                "potential": 73,
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
                "rank": 52
            },
            "automotive": {
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
                "rank": 50
            },
            "retail": {
                "size": 2.1,
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
                "rank": 47
            },
            "realestate": {
                "size": 1.4,
                "growth": 2.8,
                "potential": 74,
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
                "rank": 47
            },
            "telecom": {
                "size": 1,
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
                "rank": 62
            },
            "tourism": {
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
                "rank": 62
            },
            "education": {
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
                "rank": 62
            }
        },
        "gdp_growth_pct": 2.6,
        "inflation_pct": 0.9,
        "unemployment_pct": 3.3,
        "trade_pct_gdp": 84.7,
        "internet_users_pct": 66.5,
        "renewable_energy_pct": 21.9
    },
    "148": {
        "name": "Chad",
        "nameEn": "Chad",
        "code": "TD",
        "flag": "🇹🇩",
        "lat": 12.1048,
        "lng": 15.0445,
        "gdp": 19.5,
        "pop": 20.3,
        "region": "Sub-Saharan Africa ",
        "income": "Low income",
        "industries": {
            "tech": {
                "size": 1,
                "growth": 6.4,
                "potential": 63,
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
                "rank": 63
            },
            "manufacturing": {
                "size": 1.4,
                "growth": 3.7,
                "potential": 58,
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
                "rank": 60
            },
            "finance": {
                "size": 1.4,
                "growth": 4.9,
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
                "rank": 59
            },
            "healthcare": {
                "size": 1,
                "growth": 5.8,
                "potential": 62,
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
                "rank": 63
            },
            "energy": {
                "size": 1,
                "growth": 4.6,
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
                "rank": 63
            },
            "agriculture": {
                "size": 7.4,
                "growth": 3.4,
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
                "rank": 28
            },
            "automotive": {
                "size": 1,
                "growth": 4.6,
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
                "rank": 63
            },
            "retail": {
                "size": 1.2,
                "growth": 5.2,
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
                "rank": 59
            },
            "realestate": {
                "size": 1,
                "growth": 4.0,
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
                "rank": 63
            },
            "telecom": {
                "size": 1,
                "growth": 4.6,
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
                "rank": 63
            },
            "tourism": {
                "size": 1,
                "growth": 5.8,
                "potential": 62,
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
                "rank": 63
            },
            "education": {
                "size": 1,
                "growth": 5.2,
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
                "rank": 63
            }
        },
        "gdp_growth_pct": 4.2,
        "inflation_pct": 8.9,
        "unemployment_pct": 1.1,
        "trade_pct_gdp": 47.9,
        "internet_users_pct": 12.6,
        "renewable_energy_pct": 70
    }
};

const TRADE_ROUTES = [
    {
        "from": "156",
        "to": "276",
        "volume": 23
    },
    {
        "from": "156",
        "to": "356",
        "volume": 20
    },
    {
        "from": "276",
        "to": "356",
        "volume": 20
    },
    {
        "from": "156",
        "to": "250",
        "volume": 16
    },
    {
        "from": "276",
        "to": "250",
        "volume": 16
    },
    {
        "from": "356",
        "to": "250",
        "volume": 16
    },
    {
        "from": "156",
        "to": "124",
        "volume": 11
    },
    {
        "from": "156",
        "to": "076",
        "volume": 11
    },
    {
        "from": "276",
        "to": "124",
        "volume": 11
    },
    {
        "from": "276",
        "to": "076",
        "volume": 11
    },
    {
        "from": "356",
        "to": "124",
        "volume": 11
    },
    {
        "from": "356",
        "to": "076",
        "volume": 11
    },
    {
        "from": "250",
        "to": "124",
        "volume": 11
    },
    {
        "from": "250",
        "to": "076",
        "volume": 11
    },
    {
        "from": "124",
        "to": "076",
        "volume": 11
    }
];

const TICKER_DATA = [
    {
        "label": "EUR/USD",
        "value": "1.16",
        "dir": "neutral"
    },
    {
        "label": "GBP/USD",
        "value": "1.33",
        "dir": "neutral"
    },
    {
        "label": "USD/JPY",
        "value": "159",
        "dir": "neutral"
    },
    {
        "label": "USD/KRW",
        "value": "1,498",
        "dir": "neutral"
    },
    {
        "label": "USD/CNY",
        "value": "6.83",
        "dir": "neutral"
    },
    {
        "label": "USD/INR",
        "value": "95.98",
        "dir": "neutral"
    },
    {
        "label": "USD/BRL",
        "value": "5.01",
        "dir": "neutral"
    },
    {
        "label": "USD/SGD",
        "value": "1.28",
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
        "value": "26,201",
        "dir": "neutral"
    },
    {
        "label": "USD/AUD",
        "value": "1.40",
        "dir": "neutral"
    }
];
