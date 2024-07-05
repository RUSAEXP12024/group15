function judgeDistance(offRange, onRange) {
  let beforelocate = getSheet('DATA').getRange(2, 2, 1, 1).getValue();
  let nowlocate = getSheet('DATA').getRange(1, 2, 1, 1).getValue();
  console.log("before locate = " + beforelocate);
  console.log("no locate = "+ nowlocate);
  
  switch(true){
    case onRange <= beforelocate && onRange <= nowlocate || onRange >= beforelocate && offRange <= beforelocate && onRange >= nowlocate && offRange <= nowlocate || offRange >= beforelocate && offRange >= nowlocate:
      /*前後どちらも外側/どちらも中間/どちらも中心*/
      return 0;
      break;
    case onRange <= beforelocate && onRange >= nowlocate:
      /*前が外側で今が中間以内の時*/
      /*エアコンをオンにする*/
      console.log("エアコンオン");
      return 1;
      break;
    case offRange > beforelocate && offRange < nowlocate:
      /*前が中心で今が中間以上の時*/
      /*エアコンをオフにする*/
      console.log("エアコンオフ");
      return 2;
      break;
    default:
      console.error("エラー：予期しない状態です。")
      console.log("before locate =" + beforelocate);
      console.log("now locate = " + nowlocate);
      return 3;
  }
}