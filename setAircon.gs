var NATURE_REMO_TOKEN = "";
var AIRCON_ID = "エアコンのID"

function Aircon_ON(){
  var url = "https://api.nature.global/1/appliances/" + AIRCON_ID + "/aircon_settings";

  var headers = {
    "Authorization": "Bearer " + NATURE_REMO_TOKEN
  };

  var payload = {
    "button":""
  };

  var options = {
    "method":"POST",
    "headets": headers,
    "payload": payload
  };

  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());

}

function Aircon_OFF() {
  var url = "https://api.nature.global/1/appliances/" + AIRCON_ID + "/aircon_settings";

  var headers = {
    "Authorization": "Bearer " + NATURE_REMO_TOKEN
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

}