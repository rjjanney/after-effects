/* var fs = require('fs');

fs.readFile('megamillions_raw.txt', function (err, data) {
    if (data) {
       
        for (line in data) {

        console.log(data[line]);
    }
   
    }
})  
let holder = [];
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('megamillions_raw.txt')
});

lineReader.on('line', function (line) {
    holder.push(line);
});

console.log(holder);
*/

var lineReader = require('line-reader');

lineReader.eachLine(('megamillions_raw.txt', holder=[]), function(line, last) {
  if (line) {
  holder.push(line);
  }
  // do whatever you want with line...
  if(last){
    // or check if it's the last one
    // console.log(holder);
  }
  return holder;
});
console.log(lineReader.number);
