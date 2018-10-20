"use strict"
function telephoneCheck(str) {
  // Good luck!
console.log(/^1?\s?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/.test(str));  
}

telephoneCheck("1 555-555-5555");// shoult true
telephoneCheck("5555555555");// should true
telephoneCheck("(555)555-5555");// should return true.
telephoneCheck("1(555)555-5555");// should return true.
telephoneCheck("555)-555-5555");// should return false.
telephoneCheck("(555-555-5555");// should return false.