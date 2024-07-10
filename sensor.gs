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

function dataCopy(charfrom, charto, a1, a2, a3 = 1, a4 = 1, b1 = a1, b2 = a2+1){
  var data = getSheet(charfrom).getRange(a1, a2, a3, a4).getValue();
  getSheet(charto).getRange(b1, b2, a3, a4).setValue(data);
}

/*getRange(始める高さ, 始める行, 入力する高さ分, 入力する横の長さ分)*/

function gettingData(char, a, b, c, d){
  var K = [[]];
  K = getSheet(char).getRange(a, b, c, d).getValues()
  // @ts-ignore
  return K;
}

function setOperation(operation) {
  getSheet('line').getRange(2, 8).setValue(operation);
}