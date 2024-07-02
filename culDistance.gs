function cul_dist(latitude1, longitude1, latitude2, longitude2, unit = 'miles', rounds = 2) {
  let base = Math.pow(10,rounds);
  let theta = longitude1 - longitude2;
  let distance = 60 * 1.1515 * (180/Math.PI) * Math.acos(
    Math.sin(latitude1 * (Math.PI/180)) * Math.sin(latitude2 * (Math.PI/180)) + 
    Math.cos(latitude1 * (Math.PI/180)) * Math.cos(latitude2 * (Math.PI/180)) * Math.cos(theta * (Math.PI/180))
  );
  if(unit == 'miles')
  {
    return Math.round(distance * base)/base;
  }else if(unit == 'kilometers')
  {
    return Math.round(distance * 1.609344 * base)/base;
  }else if(unit == 'meters')
  {
    return Math.round(distance * 1609.344 * base)/base;
  }
}