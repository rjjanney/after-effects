// myFilter implementation:

// the global Array
var s = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  // this.forEach(function (a) { if (callback(a)==true) {newArray.push(a);}}); this works
  this.forEach( a => { 
    if (callback(a)==true) {
        newArray.push(a);
    }
  });
  // Add your code above this line
  console.log(newArray);
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});



// myMap implementation:
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  this.forEach(a => newArray.push(callback(a)));
  console.log(newArray);
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});


/* 
// Strung together funcrions with .filter and .map

filteredList = (watchList.filter((item) => item.imdbRating > 8.0)).map((item) => ({ "title": item.Title, "rating": item.imdbRating }));
 */