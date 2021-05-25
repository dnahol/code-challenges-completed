'use strict'

// From Women Who Code
// Easy Strings problem to be completed in under 7 min

// Replace all Digits with '*' in a given string

// 4m 1s
// Time O(n), Auxilary Space O(n)
function replaceDigits(str) {
  var strArr = [];
  for(var i = 0; i < str.length; i++) {
    // isNaN(' ') === true, ' ' gets interpreted as 0
    // parseInt(' ') === NaN
    if( !isNaN(parseInt(str[i])) ) strArr.push('*');
    else strArr.push(str[i]);
  }
  return strArr.join('')
}

console.log(replaceDigits('h3lL0 Goo d8y5'));
// 'h*lL* Goo d*y*'
