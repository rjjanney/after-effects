function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  console.log(Object.entries(source)[0]);

  // Only change code below this line
  for (let thingy in collection) {
    Object.entries(collection[thingy]).forEach(item => {
      
      if (item[0] == Object.entries(source)[0][0] & item[1] == Object.entries(source)[0][1]) {

        arr.push(collection[thingy]);
      }
  
  /*let thing = arr.forEach(checker);
  console.log (thing);
  
  function checker(item) {
    if (item == source.keys[0]) {
      return item;
    }
  }*/
  console.log(arr);
  // Only change code above this line
  return arr;
})
}
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });