function getNatureRemoData() {
  const REMO_ACCESS_TOKEN = getAccessToken();  // アクセストークンの取得
  const url = "https://api.nature.global/1/appliances";
  const headers = {
    'accept': 'application/json',
    'Authorization': 'Bearer ' + REMO_ACCESS_TOKEN
  };

  const options = {
    "method" : "get",
    "headers" : headers,
  };

  // Nature Remo APIからデータを取得
  var response = UrlFetchApp.fetch(url, options);
  var data = JSON.parse(response.getContentText());

  // エアコンの情報だけを抽出
  var airConData = data.filter(function(appliance) {
    return appliance.type === 'AC';
  });

  return airConData;
}
