/* 

  Make a function that looks through an array of objects (first argument) and 
  returns an array of all objects that have matching name and value pairs 
  (second argument). Each name and value pair of the source object has to be 
  present in the object from the collection if it is to be included in the 
  returned array.

  For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and
  the second argument is { last: "Capulet" }, then you must return the third 
  object from the array (the first argument), because it contains the name and
  its value, that was passed on as the second argument.

*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];

  // make array of source keys
  let sourceArr = Object.keys(source);
  
  // loop through each object, keeping only those that meet criteria
  arr = collection.filter(heresObject);
  
  // loop through key,value pairs in each object
    function heresObject(objectColl) {  // for each object in collection:
  //  return true if length of source array == length of source array 
  //  filtered by looping through key,value pairs in source
        return(sourceArr.length == (sourceArr.filter(hasKeyAndValue)).length);  
  // function def must be within calling function so that called var has scope
        function hasKeyAndValue(sourceProperty) { 
          return(objectColl.hasOwnProperty(sourceProperty)                  // return true if object has property and value of
                 && objectColl[sourceProperty] == source[sourceProperty]);  // source array elements
        }
    }

console.log(arr);

return arr;
}

// Test cases
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });