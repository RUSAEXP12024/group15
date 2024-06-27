var token = ""
var devicdID = ""

function Aircon_ON(){
    var url = "http://"

    var headers ={
        "Authorization": "Bearer " + token,
    };

    var payload = { 
        "button": ""
    };

    var options = {
        "method": "POST",
        "headers": headers,
        "payload": payload
    };
}
   
function Aircon_OFF(){
    var url = "http://"

    var headers ={
        "Authorization": "Bearer " + token,
    };

    var payload = { 
        "button": "power-off"
    };

    var options = {
        "method": "POST",
        "headers": headers,
        "payload": payload
    };
}