// 引数として住所を受け取り、その緯度と経度を返す関数
function getGeocode(address) {
  var response = Maps.newGeocoder().geocode(address);

  // 結果の確認
  if (response.status == 'OK') {
    var result = response.results[0];
    var latitude = result.geometry.location.lat;
    var longitude = result.geometry.location.lng;
    return [latitude, longitude];
  } else {
    return [null, null];
  }
}

  function addGeocode(userId, address){
    var sheet = getSheet(userId);
  
    var geocode = getGeocode(address);
    
    // 結果をスプレッドシートに書き込む
    if (geocode[0] == null || geocode[1] == null) {
      sheet.getRange(2, 6).setValue('緯度なし');
      sheet.getRange(2, 7).setValue('経度なし');
    } else {
      sheet.getRange(2, 6).setValue(geocode[0]); // 緯度を2列目に書き込む
      sheet.getRange(2, 7).setValue(geocode[1]); // 経度を3列目に書き込む
    }


}

