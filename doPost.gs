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
  let spreadsheetId = "15-uGNql16Hn7qikukdOmqbN1wYklsN76Jlh2JhWAqlE"; // スプレッドシートID
  let sheetName = "位置情報"; // スプレッドシート名
  let spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  let sheet = spreadsheet.getSheetByName(sheetName);

  // 既存のデータを下にシフトする
  let range = sheet.getRange("A2:B2"); // 既存の最初の行を選択
  range.copyTo(sheet.getRange("A3"), {contentsOnly:true}); // データを1行下にコピー

  // 新しい位置情報を1行目に挿入
  sheet.getRange("A2:B2").setValues([[latitude, longitude]]);

  // シートの整形
  range = sheet.getDataRange();
  range.setHorizontalAlignment("left"); // 文字を左揃えに統一
}
