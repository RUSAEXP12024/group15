var SPREADSHEET_ID = '15-uGNql16Hn7qikukdOmqbN1wYklsN76Jlh2JhWAqlE'
var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);

function getSheet(name) {
  // name = "Ua22bd17e838a73c6f6ce552031831ccc";
  let sheet = spreadsheet.getSheetByName(name);

  if (!sheet) {
    sheet = insertSheet(name);
    sheet.getRange(1,1).setValue("温度");
    sheet.getRange(1,2).setValue("稼働範囲");
    sheet.getRange(1,3).setValue("停止範囲");
    sheet.getRange(1,4).setValue("冷暖房判定");
    sheet.getRange(1,5).setValue("住所");
    sheet.getRange(1,6).setValue("緯度");
    sheet.getRange(1,7).setValue("経度");
    sheet.getRange(1,8).setValue("userId");
    sheet.getRange(2,8).setValue(name);
  }

  return sheet;
}

function insertSheet(name) {

  let newSheet = spreadsheet.insertSheet();

  newSheet.setName(name);

  return newSheet;
}

function deleteSheet(name){
  // name = "Ua22bd17e838a73c6f6ce552031831ccc";
  let sheet= spreadsheet.getSheetByName(name);
  if(sheet){
    spreadsheet.deleteSheet(sheet);
    Logger.log('シートを削除しました: ' + name);
  }else{
    Logger.log('シートが見つかりません: ' + name);
  }

}