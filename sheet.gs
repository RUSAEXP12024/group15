function getSheet(name) {
  const SPREADSHEET_ID = '15-uGNql16Hn7qikukdOmqbN1wYklsN76Jlh2JhWAqlE'
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(name);

  if (!sheet) {
    throw new Error('シートが見つかりません');
  }

  return sheet;
}
