function judgeDistance(offRange, onRange) {
  let beforelocate = getSheet('DATA').getRange(2, 2, 1, 1).getValue()[0][0];
  let nowlocate = getSheet('DATA').getRange(1, 2, 1, 1).getValue()[0][0];
  console.log("before locate = " + beforelocate);
  console.log("no locate = "+ nowlocate);
  
  switch(true){
    case onRange <= beforelocate && onRange <= nowlocate || onRange >= beforelocate && offRange <= beforelocate && onRange >= nowlocate && offRange <= nowlocate || offRange >= beforelocate && offRange >= nowlocate:
      /*前後どちらも外側/どちらも中間/どちらも中心*/
      break;
    case onRange <= beforelocate && onRange >= nowlocate:
      /*前が外側で今が中間以内の時*/
      /*エアコンをオンにする*/
      console.log("エアコンオン");
      return true;
      break;
    case offRange > beforelocate && offRange < nowlocate:
      /*前が中心で今が中間以上の時*/
      /*エアコンをオフにする*/
      console.log("エアコンオフ");
      return false;
      break;
    default:
      console.error("エラー：予期しない状態です。")
      console.log("before locate =" + beforelocate);
      console.log("now locate = " + nowlocate);
      return null;
  }
}
