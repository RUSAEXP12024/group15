function getCurrentLOcation(e) {
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
      addCuurentLocation(latitudeData, longitudeData);
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

  function addCuurentLocation(latitude, longitude) {

    let sheet = getSheet('位置情報');

  // 既存のデータを下にシフトする
  let range = sheet.getRange("A2:B2"); // 既存の最初の行を選択
  range.copyTo(sheet.getRange("A3"), {contentsOnly:true}); // データを1行下にコピー

  // 新しい位置情報を1行目に挿入
  sheet.getRange("A2:B2").setValues([[latitude, longitude]]);

  // シートの整形
  range = sheet.getDataRange();
  range.setHorizontalAlignment("left"); // 文字を左揃えに統一
}
