var operation = 1;
var stop = 0;

function getAirconData(){
  var data_appliances = getNatureRemoData()
  
  if(data_appliances[0].settings.button != "power-off"){
    setOperation(operation);
    console.log(data_appliances[0].settings.button);
    return 1;
  }else{
    setOperation(stop);
    console.log(data_appliances[0].settings.button);
    return 0;
  }

}