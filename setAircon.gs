var token = getAccessToken();
var deviceId = getAirconDeviceId();
var operationMode = "";

function Aircon_ON(mode, temp) {
  var url = "https://api.nature.global/1/appliances/" + deviceId + "/aircon_settings"; // Nature Remo3 APIのエアコン設定エンドポイント

  if (mode === 0) {
    operationMode = "warm";
  } else {
    operationMode = "cool";
  }

  var headers = {
    "Authorization": "Bearer " + token
  };
  var payload = {
    "button":"",/*エアコンのONはbuttonに空文字*/
    "operation_mode": operationMode,
    "temperature" : temp.toString()
  };

  var options = {
    "method": "POST",
    "headers": headers,
    "payload": payload
  };

  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());
}

function Aircon_OFF() {
  var url = "https://api.nature.global/1/appliances/" + deviceId + "/aircon_settings"; // Nature Remo3 APIのエアコン設定エンドポイント

  var headers = {
    "Authorization": "Bearer " + token
  };
  var payload = {
    "button":"power-off"/*エアコンのOFFを指定*/
  };

  var options = {
    "method": "POST",
    "headers": headers,
    "payload": payload
  };

  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());

  message = "エアコンをOFFにしました";
  return message;
}