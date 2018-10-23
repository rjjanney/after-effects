"use strict"
function checkCashRegister(price, cash, cid) {
  let denoms = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };
  // subtract cash from price
  let changeDue = cash* 100 - price * 100;
  let cashOnHand = 0;
  let cidUpscaled = cid.map(item => [item[0], Math.ceil(item[1]*100)]);
  cidUpscaled.forEach(item => {
    cashOnHand += item[1];
  });
  // figure out if CID is enough to cover change due
  if (changeDue > cashOnHand) {
    // if not: status:"insufficient funds", change:[]
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }else if(changeDue == cashOnHand) {
    // if exactly equal: status: closed, change[cash-in-drawer array]
    return {status: "CLOSED", change: cid};
  }else {
    // if more than enough: status "open", change[change highest to lowest order]
    let yup = makeChange(); 
    return yup?{status: "OPEN", change: yup}:{status: "INSUFFICIENT_FUNDS", change: []};
  };
  
  function makeChange() {
    let testChange = changeDue;
    let testCID = cidUpscaled.concat([]);
    let changeList = Object.assign({}, denoms);
    Object.keys(changeList).forEach( v => changeList[v] = 0);
    // find the highest value that will fit into changeDue
    for(let index = cid.length-1; index >= 0; index--) {
      while (denoms[cidUpscaled[index][0]] <= testChange & testCID[index][1] >= denoms[cid[index][0]]) {
        // subtract 1 unit of denom from testChange and from it's drawer
        testChange -= denoms[cid[index][0]];
        testCID[index][1] -= denoms[cid[index][0]];
        changeList[testCID[index][0]] += denoms[cid[index][0]];
        // if change filled
        //console.log('test ' + testChange + " denom " +  denoms[cid[index][0]] + " change drawer " + testCID[index][1] + " condition " + (testChange));
        if (testChange === 0) {
          let output = [];
          Object.keys(changeList).forEach(v => {if (changeList[v] != 0) {output.push([v, changeList[v]/100])}});
          return output.reverse();
          
          };
        };
      };
    return false;
    };
}

  /* while (decimalValue[index] <= num) {
      console.log(decimalValue[index], num);
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }*/
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]


// console.log(checkCashRegister(19.15, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

//console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
  //["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], 
  ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));