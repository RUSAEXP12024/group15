const NATURE_REMO_TOKEN = getAccessToken();
const DEVICE_ID = getAirconDeviceId();

function Aircon_ON() {
  const url = "https://api.nature.global/1/appliances/" + DEVICE_ID + "/aircon_settings";

  Logger.log(url);

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

  const url = "https://api.nature.global/1/appliances/" + DEVICE_ID + "/aircon_settings";

  Logger.log(url);

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
  var url = 'https://api.nature.global/1/appliances/' + DEVICE_ID + '/aircon_settings';
  var headers = {
    'Authorization': 'Bearer ' + REMO_ACCESS_TOKEN,
  };


  var postData = {
    'operation_mode' : 'warm'
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
  var url = 'https://api.nature.global/1/appliances/' + DEVICE_ID + '/aircon_settings';
  var headers = {
    'Authorization': 'Bearer ' + REMO_ACCESS_TOKEN,
  };


  var postData = {
    'operation_mode' : 'cool'
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
