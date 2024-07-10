function sendPushMessage(message) {
  var url = 'https://api.line.me/v2/bot/message/push';
  var payload = {
    to: 'U546bc02536d4ed8eef15810bc32f089c',  // 送信先のLINEユーザーID

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
