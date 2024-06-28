function Aircon_ON() {
  const NATURE_REMO_TOKEN = getAccessToken();
  const DEVICE_ID = getAirconDeviceId();
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
  const NATURE_REMO_TOKEN = getAccessToken();
  const DEVICE_ID = getAirconDeviceId();
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
