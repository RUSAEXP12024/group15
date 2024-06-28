let GET_FROM = '位置情報'; /*位置情報のシート名*/
let HOME_LOCATE = '住所'; /*住所のシート名*/
let DIST_DATA = 'DATA'; /*距離データのシート名*/
let UNIT = 'meters'; /*単位 'miles' か 'kilometers' か 'meters' デフォルト:miles*/
let ROUND = 2; /*四捨五入範囲 デフォルト:2*/

let onRange;
let offRange;

let isAirConditioner = false;

var arg1 = {
  latitude:0,
  longitude:0,
}

var arg2 = {
  latitude:0,
  longitude:0,
}

function main(){
  /*現在の経緯度と家の経緯度をそれぞれ arg1, arg2 に代入*/
  arg1 = getLocateData(GET_FROM, 2, 1);
  arg2 = getLocateData(HOME_LOCATE, 1, 2);
  console.log(arg1)
  console.log(arg2)

  /*計算結果を dist に代入*/
  let dist = cul_dist(arg1.latitude, arg1.longitude, arg2.latitude, arg2.longitude, UNIT, ROUND);

  /*前の距離のデータをコピーしておく*/
  dataCopy(DIST_DATA, DIST_DATA, 2, 1);
  
  /*現在距離を更新*/
  setDistance(DIST_DATA, 2, dist);
  
  /*シート状に置かれた設定を代入*/
  onRange = getSheet(DIST_DATA).getRange(6, 1, 1, 1).getValue()[0][0];
  offRange = getSheet(DIST_DATA).getRange(5, 1, 1, 1).getValue()[0][0];

  isAirConditioner = judgeDistance(offRange, onRange); /*isAirConditioner に true か　false を代入*/

  /*ジャッジの結果のbool値を基に挙動を決定　true->オン false->オフ nullまたはその他->エラー*/

  if(isAirConditioner){
    /*エアコンをオンにする関数*/
    Aircon_ON();
  }else if(!isAirConditioner){
    /*エアコンをオフにする関数*/
    Aircon_OFF();
  }else if(isAirConditioner == null){
    console.log("エラーが起きています。");
    /*ラインに知らせる？などの関数を用意*/
  }else{
    console.error("エラー：予期しない状態です。: isAirConditioner");
  }
};
