"use strict"
function addTogether(x) {
  for(let i = 0; i < arguments.length; i++) {
    if (!checkNumber(arguments[i])) {return undefined};
  }
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  }
  return function(y) {
    if (!checkNumber(y)) {return undefined};
    return  x + y;
  }

  function checkNumber(item) {
    console.log(item);
    return (typeof item != 'number' ? false : true);
  }

}
console.log(addTogether(2,3));
console.log(addTogether(2)(3));