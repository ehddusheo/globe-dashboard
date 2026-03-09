// =====================================================
// 📋 Google Apps Script - 글로벌 분석 리드마그넷 시트 연동
// =====================================================
//
// 🔧 설정 방법:
// 1. Google Sheets → 확장 프로그램 → Apps Script 클릭
// 2. 기존 코드를 모두 지우고, 아래 코드를 붙여넣기
// 3. 💾 저장 (Ctrl+S)
// 4. 배포 → 새 배포 → 유형: "웹 앱" 선택
//    - 실행 계정: "나"
//    - 액세스: "모든 사용자"
// 5. 배포 → URL 복사 → app.js의 SHEET_WEBHOOK_URL에 붙여넣기
// =====================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // 헤더 순서: 회사명, 회사링크, 대표업종, 연매출, 임직원수, 해외사업경험, 우선순위, 관심지역
    var row = [
      data.companyName || '',
      data.companyUrl || '',
      data.industry || '',
      data.revenue || '',
      data.employees || '',
      data.experience || '',
      data.priorities || '',
      data.regions || '',
    ];

    // 추가 컬럼이 있으면 (TOP5, CES 등)
    if (data.top1) row.push(data.top1);
    if (data.top5) row.push(data.top5);
    if (data.cesScore) row.push(data.cesScore);
    if (data.timestamp) row.push(data.timestamp);

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Sheet webhook is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
