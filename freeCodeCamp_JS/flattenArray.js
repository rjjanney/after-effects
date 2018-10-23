"use strict"
function steamrollArray(arr) {
  // I'm a steamroller, baby
  //for each element
  let newArr = []
  arr.map(flatten);
      
  function flatten(element) { 
    if (!Array.isArray(element)) {
      newArr.push(element);
    }else{
      element.forEach(flatten);

    }
  }
  console.log(newArr);
  return newArr;
  // if element is an array
  //for each element
}
 
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);