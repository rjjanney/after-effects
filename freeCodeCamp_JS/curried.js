//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
console.log(curried(1)(2)); // Returns 3
console.log(y = curried(1, 2)); // Returns 3
console.log(y(2))