function doPost(e) {
  // iPhone（ショートカット）から送られてきた位置情報を取得
  let params = JSON.parse(e.postData.getDataAsString());
  let latitudeData = params.location.latitude;
  let longitudeData = params.location.longitude;

  // ショートカットに返すメッセージを格納する為の変数
  let result = {};
  let output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);

  // 位置情報が問題なく送られてきてるかの判定
  if (latitudeData && longitudeData) {
    result = {
      "success": {
        "message": "スプレッドシートへの記録が完了しました"
      }
    };
    // 位置情報があればスプレッドシートへ記録する
    addLog(latitudeData, longitudeData);
  } else {
    result = {
      "error": {
        "message": "データがありません"
      }
    };
  }

  // ショートカットにメッセージを返す
  output.setContent(JSON.stringify(result));
  return output;
}

function addLog(latitude, longitude) {
  // 記録するスプレッドシートを指定
  let spreadsheetId = "スプレッドシートID"; // スプレッドシートID
  let sheetName = "スプレッドシート名"; // スプレッドシート名
  let spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  let sheet = spreadsheet.getSheetByName(sheetName);

  // ショートカットから送信された位置情報をスプレッドシートに記録
  let today = new Date();
  sheet.appendRow([Utilities.formatDate(today, 'JST', 'yyyy-MM-dd HH:mm:ss'), latitude, longitude]);

  // シートの整形
  let range = sheet.getDataRange();
  range.setHorizontalAlignment("left"); // 文字を左揃えに統一
}
