var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  };
  this.setFullName = function(name) {
     firstAndLast = name;
  };
  this.setFirstName = function(name) {
    let nameArray = firstAndLast.split(" ");
    nameArray[0] = name;
    firstAndLast = nameArray.join(" ");
  };
    this.setLastName = function(name) {
    let nameArray = firstAndLast.split(" ");
    nameArray[1] = name;
    firstAndLast = nameArray.join(" ");
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.setFirstName("Haskell")
console.log(bob.getFullName());