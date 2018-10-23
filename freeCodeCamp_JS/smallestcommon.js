function smallestCommons(arr) {
  // Sort the array the javascript way
  arr.sort((a,b) => a-b);
  let base = arr[0];
  let top = arr[1];
  // The number to test divisors on
  let multiple = top;

  // Loop until return condition met
  while (true) {
    // step through all values
    for ( let i= top; i >= base; i--  ) {
      // If divisor doesn't divides evenly
      if ( multiple % i !== 0) {
        // increment multiple and start over
        multiple += top;
        i = top;
      }
    }
  console.log(multiple);
  return multiple;
  }
}

/*

function smallestCommons(arr) {

  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var mltple = max;

  for(var i = max; i >= min; i--){
    if(mltple % i !== 0){
      mltple += max; 
      i = max;
    } 
  }

  return mltple;  
}
*/
smallestCommons([1,23]);