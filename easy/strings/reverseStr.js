'use strict'

// From Women Who Code
// Easy Strings problem to be completed in under 7 min

// Reverse a given string

// 11m 15s
// Time O(n), Auxilary Space O( )

function reverseString(str) {
  var strArr = str.split('');
  for (var i = 0; i < strArr.length/2; i++) {
    let j = strArr.length - i - 1;
    if(i !== j ) strArr = swap(strArr, i, j);
  }
  return strArr.join('')
}

function swap(arr, i, j) {
  var swap = arr[i];
  arr[i] = arr[j];
  arr[j] = swap;
  //console.log(arr)
  return arr;
}

console.log( reverseString( 'IAmWellToday' ) )
// 'yadoTlleWmAI'
