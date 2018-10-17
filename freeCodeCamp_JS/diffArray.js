function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  const sacrificialArr = newArr.concat([]);
  const output = [];
  newArr.forEach(() => {
      const test = sacrificialArr.splice(0, 1);
      if (test) {
          const thingy = sacrificialArr.findIndex(isItIn);
          if (thingy != -1) {
              sacrificialArr.splice(thingy, 1);
          }
          else {
              if (test.length > 0) {
                  output.push(test[0]);
              }
          }
      }
      function isItIn(element) {
          // console.error('element', element);
          return element == test;
      }
  });
  // console.log(output);
  return output;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);