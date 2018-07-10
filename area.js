exports.getArea = function(lati){
  if(Array.isArray(lati)){
      var lato1 = parseInt(lati[0]);
      var lato2 = parseInt(lati[1]);
      if(lato1 >= 0 && lato2 >= 0){
        return lato1*lato2
      }else{
        return -1
      }
  }else{
    return -3
  }
}
