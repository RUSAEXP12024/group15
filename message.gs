var lineToken = 'vrdAdTJ7ZcUwNC8ciLtqZd3de8TyrQQD51yyopudq9wu1ImC0fFXehzPP1sTVyxwOU1R7sqLvKRQBqlVNi58H0TvUaEnn4nUSmowUDKULSeTk1jj47J8dzfHXLvYGJK6jbzG1gVC08uRfdArFat/agdB04t89/1O/w1cDnyilFU=';

function sendPushMessage(message) {
  var url = 'https://api.line.me/v2/bot/message/push';
  var payload = {
    to: 'Ua22bd17e838a73c6f6ce552031831ccc',  // 送信先のLINEユーザーID

    messages: [{
      type: 'text',
      text: message
    }]
  };
  
  var options = {
    'method': 'post',
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + lineToken
    },
    'payload': JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);
}
