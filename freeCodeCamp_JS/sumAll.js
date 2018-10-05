function sumAll(arr) {
  arr.sort(function(a,b){
    return a>b;
  })
  let output;
  let lowNumber = arr[0];
  let highNumber = arr[1]
  function factorial(x,n) {
    if (n == x) {
        return x;
    }else{
        return n + factorial(x, n-1);
    }
  }
  return factorial(lowNumber, highNumber);
}

console.log(sumAll([1,4]));