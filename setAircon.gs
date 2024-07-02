const NATURE_REMO_TOKEN = getAccessToken();
const DEVICE_ID = getAirconDeviceId();
const url = "https://api.nature.global/1/appliances/" + DEVICE_ID + "/aircon_settings";

function Aircon_ON() {

  var options = {
    "method": "POST",
    "headers": {
      "Authorization": "Bearer " + NATURE_REMO_TOKEN,
      "Content-Type": "application/json"
    },
    "payload": JSON.stringify({
      "button": "" 
    })
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    Logger.log(response.getContentText());
  } catch (error) {
    Logger.log("Error: " + error);
  }

}


function Aircon_OFF() {

  var options = {
    "method": "POST",
    "headers": {
      "Authorization": "Bearer " + NATURE_REMO_TOKEN,
      "Content-Type": "application/json"
    },
    "payload": JSON.stringify({
      "button": "power-off"
    })
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    Logger.log(response.getContentText());
  } catch (error) {
    Logger.log("Error: " + error);
  }

}

function Aircon_WARM() {

  var headers = {
    'Authorization': 'Bearer ' + REMO_ACCESS_TOKEN,
  };


  var postData = {
    'operation_mode' : 'warm',
    'temperature' : '27'
  }

  var options = {
    muteHttpExceptions : true,
    'method' : 'post',
    'headers' : headers,
    'payload' : postData
  };

  var loging = UrlFetchApp.fetch(url, options);

  console.log(JSON.parse(loging));

}

function Aircon_COOL(){

  var headers = {
    'Authorization': 'Bearer ' + REMO_ACCESS_TOKEN,
  };


  var postData = {
    'operation_mode' : 'cool',
    'temperature' : '21'
  }

  var options = {
    muteHttpExceptions : true,
    'method' : 'post',
    'headers' : headers,
    'payload' : postData
  };

  var loging = UrlFetchApp.fetch(url, options);

  console.log(JSON.parse(loging));

}
