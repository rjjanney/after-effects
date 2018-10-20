function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let output = []
  arr.forEach(item => {
  var semiMajorAxis = earthRadius + item.avgAlt;
  item.orbitalPeriod = Math.round(2 * Math.PI *  Math.sqrt( semiMajorAxis**3/GM));
  delete item.avgAlt;
  output.push(item)
  });
  return output;

}
// t = 2*pi*sqrt(radius**3 / GM)(
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
