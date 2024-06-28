function getAirconDeviceId() {
  const NATURE_REMO_TOKEN = getAccessToken();
  var url = "https://api.nature.global/1/appliances";
  
  var headers = {
    "Authorization": "Bearer " + NATURE_REMO_TOKEN
  };
  
  var options = {
    "method": "GET",
    "headers": headers
  };
  
  var response = UrlFetchApp.fetch(url, options);
  var appliances = JSON.parse(response.getContentText());
  
  // エアコンのデバイスIDを探す
  var airconId = null;
  for (var i = 0; i < appliances.length; i++) {
    if (appliances[i].type === "AC") {
      airconId = appliances[i].id;
      break;  // 最初のエアコンデバイスIDを取得してループを抜ける
    }
  }
  
  if (airconId) {
    Logger.log("エアコンのデバイスID: " + airconId);
  } else {
    Logger.log("エアコンのデバイスが見つかりませんでした。");
  }
  
  return airconId;
}