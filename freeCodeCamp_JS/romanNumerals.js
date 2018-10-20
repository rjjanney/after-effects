"use strict"
function convertToRoman(num) {
 let roms = [
  {
    "one": "",
    "five": "",
    "next": 0
  },
  {
    "one": "I",
    "five": "V",
    "next": 2
  },
  {
    "one": "X",
    "five": "L",
    "next": 3
  },
  {
    "one": "C",
    "five": "D",
    "next": 4

  },
  {
    "one": "M",
    "five": "?",
    "next": 0
  }
  ];
 let col1 = num%10;
 let col2 = Math.floor(num/10**1 % 10);
 let col3 = Math.floor(num/10**2 % 10);
 let col4 = Math.floor(num/10**3 % 10);

let output = ones(col4, roms[col4?4:0]) +
         ones(col3, roms[col3?3:0]) +
         ones(col2, roms[col2?2:0]) + 
         ones(col1, roms[col1?1:0]);
function ones(num, dict){
let onesOutput = ""; 
switch(num) {
  case 1:
  case 2:
  case 3:
    onesOutput = dict.one.repeat(num);
    break;
  case 4:
    onesOutput = dict.one + dict.five;
    break;
  case 5:
  case 6:
  case 7:
  case 8:
    onesOutput = dict.five + (dict.one.repeat(num - 5));
    break;
  case 9: 
    onesOutput = dict.one + roms[dict.next].one;
    break; 
  default:
    onesOutput = "";
}
return onesOutput;
}
return output;
}
console.log(convertToRoman(1000));
