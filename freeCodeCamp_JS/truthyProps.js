"use strict"
function truthCheck(collection, pre) {
  // Is everyone being true?
  let test = [];
  collection.forEach(object => {
    if (object.hasOwnProperty(pre)) {
      if (object[pre]) {
        test.push(true);
      }else{
        test.push(false);
      }
    }else{
      test.push(false);
    }
  });
  
  if(test.indexOf(false) > -1){
    console.log(false);
    return false;
  }
  console.log(true);
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")