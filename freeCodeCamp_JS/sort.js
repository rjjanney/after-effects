
function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a,b) {
    return a > b;
  })
  
  // Add your code above this line
}
console.log(
    alphabeticalOrder(["a", "d", "c", "a", "z", "g"])
    );

// non-mutating sort

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let newArray = arr.concat([]);
  return newArray.sort(function(a,b){
    return a > b;
  })
  
  // Add your code above this line
}
console.log(nonMutatingSort(globalArray), globalArray);