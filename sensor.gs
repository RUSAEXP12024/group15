/*var arg = {
  te:deviceData[0].newest_events.te.val,　　//温度
  hu:deviceData[0].newest_events.hu.val,　　//湿度
  il:deviceData[0].newest_events.il.val,　　//照度
}*/

/*function getSensorData() {
  //const deviceData = getNatureRemoData("devices");　　　　//data取得
  //const lastSensorData = getLastData("sensor");　　　　　//最終data取得

  var arg = {
    te:1,　　//温度
    hu:2,　　//湿度
    il:3,　　//照度
  }

  data = 0;
  //_Record(arg);
  var arg2 = Getting();
  console.log(arg2[0])
  data = arg2[0][0] * arg2[0][1];
  console.log(data)
  getSheet('Test').getRange(2, 1, 1, 1).setValue([[data]]);
}*/

function getLocateData(charfrom, row, column){
  var arg = {
    latitude:0,
    longitude:0,
  }

  K = gettingData(charfrom, row, column, row, column+1);
  arg.latitude = K[0][0]
  arg.longitude = K[0][1]
  return arg;
}

function setDistance(charto, dataplace, dist){
  getSheet(charto).getRange(dataplace, 1, 1, 1).setNumberFormat("#,##0.00");
  getSheet(charto).getRange(dataplace, 1, 1, 1).setValue([[dist]]);
}



/*getRange(始める高さ, 始める行, 入力する高さ分, 入力する横の長さ分)*/

function gettingData(char, a, b, c, d){
  var K = [[]];
  K = getSheet(char).getRange(a, b, c, d).getValues()
  // @ts-ignore
  return K;
}