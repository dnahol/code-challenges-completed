'use strict'

// From Women Who Code
// Easy Strings problem
// to be completed in under 7 min
// Print all capital leters from a given strings

// 2m 30s
// Time O(n), Auxilary Space O(1)
function printCapitals(str) {
  for(var i = 0; i < str.length; i++) {
    if(str[i] === str[i].toUpperCase()) console.log(str[i]);
  }
}

console.log(printCapitals('DaLianAHol'))
//'D'
//'L'
//'A'
//'H'
