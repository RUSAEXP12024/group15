let GET_FROM = '位置情報'; /*位置情報のシート名*/
let HOME_LOCATE = '住所'; /*住所のシート名*/
let DIST_DATA = 'DATA'; /*距離データのシート名*/
let UNIT = 'meters'; /*単位 'miles' か 'kilometers' か 'meters' デフォルト:miles*/
let ROUND = 2; /*四捨五入範囲 デフォルト:2*/

var arg1 = {
  latitude:0,
  longitude:0,
}

var arg2 = {
  latitude:0,
  longitude:0,
}

function main(){
  arg1 = getLocateData(GET_FROM, 3, 1);
  arg2 = getLocateData(HOME_LOCATE, 2, 2);
  console.log(arg1)
  console.log(arg2)
  let dist = cul_dist(arg1.latitude, arg1.longitude, arg2.latitude, arg2.longitude, UNIT, ROUND);

  
  setDistance(DIST_DATA, 2, dist);
};
