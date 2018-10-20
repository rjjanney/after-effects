function dropElements(arr, func) {
  // Drop them elements.
  "use strict"
  let arrCopy = arr.concat([]);
  for (let i = 0; i < arr.length; i++) {
    let test = arrCopy.shift();
    console.log(test);
    if (func(test)){
      arrCopy.unshift(test);
      console.log(arrCopy);
      return arrCopy;
    }
  
  }
return [];
}


  


dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) 