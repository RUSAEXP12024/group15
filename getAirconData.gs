var operation = 1;
var stop = 0;

function getAirconData(){
  var data_appliances = getNatureRemoData()
  
  if(data_appliances[0].settings.button != "power-off"){
    console.log("on");
    setOperation(operation);
    return 1;
  }else{
    setOperation(stop);
    return 0;
  }

}