let GET_FROM = '位置情報'; /*位置情報のシート名*/
let HOME_LOCATE = 'line'; /*住所のシート名*/
let DIST_DATA = 'Data'; /*距離データのシート名*/
let UNIT = 'meters'; /*単位 'miles' か 'kilometers' か 'meters' デフォルト:miles*/
let ROUND = 2; /*四捨五入範囲 デフォルト:2*/

let onRange;
let offRange;

let isAirConditioner = 2;

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
  arg2 = getLocateData(HOME_LOCATE, 2, 6);
  console.log(arg1)
  console.log(arg2)

  /*計算結果を dist に代入*/
  let dist = cul_dist(arg1.latitude, arg1.longitude, arg2.latitude, arg2.longitude, UNIT, ROUND);

  /*前の距離のデータをコピーしておく*/
  dataCopy(DIST_DATA, DIST_DATA, 2, 1);
  
  /*現在距離を更新*/
  setDistance(DIST_DATA, 2, dist);
  
  /*シート状に置かれた設定を代入*/
  onRange = getSheet(HOME_LOCATE).getRange(2,2).getValue();
  offRange = getSheet(HOME_LOCATE).getRange(2,3).getValue();
  console.log(onRange,offRange);

  isAirConditioner = judgeDistance(offRange, onRange); /*isAirConditioner に 0, 1, 2, 3 を代入*/
  // isAirConditioner = 3;
  /*確認用*/

  /*ジャッジの結果のを基に挙動を決定　0->何もしない 1->オン 2->オフ 3またはその他->エラー*/

  if(isAirConditioner == 1){
    /*エアコンをオンにする関数*/
    console.log(getSheet('line').getRange(2, 4, 1, 1).getValue());
    Aircon_ON(getSheet('line').getRange(2, 4, 1, 1).getValue(), getSheet('line').getRange(2, 1, 1, 1).getValue());
    console.log(new Date())
  }else if(isAirConditioner == 2){
    /*エアコンをオフにする関数*/
    console.log("OK");
    Aircon_OFF();
    console.log(new Date())
  }else if(isAirConditioner == 3){
    console.log("エラーが起きています。: Judge_return");
    /*ラインに知らせる？などの関数を用意*/
    errorDoPost('01');
  }else if(isAirConditioner == 0){
    /*何もしない*/
  }else{
    console.error("エラー：予期しない状態です。: isAirConditioner");
  }
};