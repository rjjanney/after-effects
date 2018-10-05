function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  var sacrificialArr = newArr.concat([]);
  var output = [];
  newArr.forEach(item => {
    var test = sacrificialArr.splice(0,1);
    if (test) {
        var thingy = sacrificialArr.findIndex(isItIn);
        if (thingy != -1) {
            sacrificialArr.splice(thingy, 1);
        }else{
            if (test.length > 0){
                output.push(test[0]);
            } 
        }
    }
 
   
   function isItIn(element) {
        return element == test ;
    }

  });
    


  console.log(output);
  return output;
}



diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


