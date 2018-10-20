function sumPrimes(num) {
let result = 0;
for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
        result += i;
    }

    function isPrime(num) {
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
        }
}
  console.log(result);
  return result;
}

sumPrimes(977); // 73156