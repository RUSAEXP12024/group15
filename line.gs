// @ts-nocheck
var spreadsheetId = '15-uGNql16Hn7qikukdOmqbN1wYklsN76Jlh2JhWAqlE';
var sheetName = 'line';
var lineToken = 'vrdAdTJ7ZcUwNC8ciLtqZd3de8TyrQQD51yyopudq9wu1ImC0fFXehzPP1sTVyxwOU1R7sqLvKRQBqlVNi58H0TvUaEnn4nUSmowUDKULSeTk1jj47J8dzfHXLvYGJK6jbzG1gVC08uRfdArFat/agdB04t89/1O/w1cDnyilFU=';

function doPost(e) {
  try {
    Logger.log('イベントデータ: ' + JSON.stringify(e));
    
    var event = JSON.parse(e.postData.contents).events[0];
    var userId = event.source.userId;
    var userMessage = event.message.text;
    var replyToken = event.replyToken;

    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    var sheet = spreadsheet.getSheetByName(sheetName);
    
    if (!sheet) {
      throw new Error('シートが見つかりません: ' + sheetName);
    }

    var userProperties = PropertiesService.getScriptProperties();
    var mode = userProperties.getProperty(userId) || '';

    if (userMessage == '温度を設定する') {
      mode = '温度';
      sendReplyMessage(replyToken, '温度を入力してください。設定範囲:18～32');
    } else if (userMessage == '稼働範囲を設定する') {
      mode = '稼働範囲';
      sendReplyMessage(replyToken, '可動範囲を設定してください。設定範囲:500～1500');
    } else if (userMessage == '停止範囲を設定する') {
      mode = '停止範囲';
      sendReplyMessage(replyToken, '停止範囲を設定してください。設定範囲:100～300');
    } else if(userMessage == '暖房にする'){
      sendReplyMessage(replyToken, '暖房に設定しました');
      sheet.getRange('D1').setValue('暖房');
    }else if(userMessage == '冷房にする'){
      sendReplyMessage(replyToken, '冷房に設定しました');
      sheet.getRange('D1').setValue('冷房');
    }else if (userMessage == '住所を設定する') {
      mode = '住所';
      sendReplyMessage(replyToken, '住所を入力してください:(例)〇〇県◇◇市△△町▽▽');
    }else if(userMessage == 'Error'){
      errorDoPost('00');
      mode = '';
    }else {
      // 数値が入力された場合
      var value = parseFloat(userMessage);
      if (!isNaN(value)) {
        if (mode == '温度') {
          if (value < 18 || value > 32) {
            sendReplyMessage(replyToken, '設定範囲は18～32度です。もう一度数値を入力してください');
          } else {
            sheet.getRange('A1').setValue(value);
            sheet.getRange('A1').setNumberFormat('0.0');
            sendReplyMessage(replyToken, '温度が設定されました: ' + value.toFixed(1));
            mode = ''; // 成功時にリセット
          }
        } else if (mode == '稼働範囲') {
          if (value < 500 || value > 1500) {
            sendReplyMessage(replyToken, '設定範囲は500～1500メートルです。もう一度数値を入力してください');
          } else {
            sheet.getRange('B1').setValue(value);
            sendReplyMessage(replyToken, '稼働範囲が設定されました: ' + value);
            mode = ''; // 成功時にリセット
          }
        } else if (mode == '停止範囲') {
          if (value < 100 || value > 300) {
            sendReplyMessage(replyToken, '設定範囲は100～300メートルです。もう一度数値を入力してください');
          } else {
            sheet.getRange('C1').setValue(value);
            sendReplyMessage(replyToken, '停止範囲が設定されました: ' + value);
            mode = ''; // 成功時にリセット
          }
        }
      }else {
        if (mode == '住所') {
          sheet.getRange('E1').setValue(userMessage);
          sendReplyMessage(replyToken, '住所が設定されました: ' + userMessage);
          mode = ''; // 成功時にリセット
        } else {
          sendReplyMessage(replyToken, '有効な数値または住所を入力してください');
        } 
      }
    }
    
    userProperties.setProperty(userId, mode);
  } catch (error) {
    Logger.log('エラー: ' + error.message);
  }
}

function sendReplyMessage(replyToken, message) {
  var url = 'https://api.line.me/v2/bot/message/reply';
  
  var payload = {
    replyToken: replyToken,
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

// テスト用関数
function testDoPost() {
  var testData = {
    "postData": {
      "contents": JSON.stringify({
        "events": [{
          "replyToken": "testReplyToken",
          "source": {
            "userId": "testUserId"
          },
          "message": {
            "text": "温度を設定する"
          }
        }]
      })
    }
  };

  doPost(testData);
}

function errorDoPost(type = "00"){
  var errorData = {
    "postData" : {
      "contents": JSON.stringify({
        "events": [{
          "replyToken" : 'errorReplyToken',
          "source" : {
            "userId" : 'testUserId'
          },
          "message": {
            "text" : 'ERROR'
          }
        }]
      })
    }
  }
  cause = type;

  doErrorPost(errorData, cause);
}

function doErrorPost(e, cause) {
  try {
    Logger.log('イベントデータ: ' + JSON.stringify(e));
    
    var event = JSON.parse(e.postData.contents).events[0];
    var userId = event.source.userId;
    var userMessage = event.message.text;
    var replyToken = event.replyToken;

    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);

    var userProperties = PropertiesService.getScriptProperties();
    var mode = userProperties.getProperty(userId) || '';

    if(cause == '00'){
      sendReplyMessage(replyToken, 'Error message: ' + cause + '.');
    }else if(cause == '01'){
      sendReplyMessage(replyToken, 'Error message: ' + cause + '.\nThere is unexpected processing error.');
    }

    userProperties.setProperty(userId, mode);
  } catch (error) {
    Logger.log('エラー: ' + error.message);
  }
}
