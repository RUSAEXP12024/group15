var token = getAccessToken();
var deviceId = getAirconDeviceId();
var operationMode = "";
var operation = 1;
var stop = 0;

function Aircon_ON(mode, temp) {
  var url = "https://api.nature.global/1/appliances/" + deviceId + "/aircon_settings"; // Nature Remo3 APIのエアコン設定エンドポイント

  if (mode == 0) {
    operationMode = "warm";
  } else if(mode == 1){
    operationMode = "cool";
  }else{
    console.log('例外');
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

  sendPushMessage('エアコンを起動しました');

  // setOperation(operation);
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

  sendPushMessage('エアコンを停止しました');
  // setOperation(stop);
}