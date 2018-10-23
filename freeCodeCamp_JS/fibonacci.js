function sumFibs(num) {

let seed = [1, 1];
// take in number
if (num < 3) return 1;
// run fibanacci seq until answer > number
let result = 0;

while (result <= num) { 
    result = (seed[seed.length - 2 ] + seed[seed.length -1] );
    seed.push(result);
};
// remove last one, cause it's bigger
seed.pop()
// return sum of fibonacci, filtered all odd ones
let output = seed.reduce(getsum);

function getsum(total, num) {
    if ( num % 2 > 0 ) {
        total += num;
    }
    return total;
}

return output;
}

sumFibs(10);