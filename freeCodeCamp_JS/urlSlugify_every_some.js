// the global variable
var globalTitle = " Winter Is    Coming";

// Add your code below this line
function urlSlug(title) {
  return title.trim().toLowerCase().split(/\W+/).join('-');
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);

// .every Method

function checkPositive(arr) {
  // Add your code below this line
  return arr.every(a => a >= 0);
  
  // Add your code above this line
};
console.log(checkPositive([1, 2, 3, -4, 5]));

// .some Method

function checkPositiver(arr) {
  // Add your code below this line
  return arr.some(a => a >= 0);
  
  // Add your code above this line
}
console.log(checkPositiver([1, 2, 3, -4, 5]));