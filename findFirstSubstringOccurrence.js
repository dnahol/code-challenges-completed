'use strict'
//From Codefights interview prep
// Avoid using built-in functions to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.
//
// Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1.
//
// Example
//
// For s = "CodefightsIsAwesome" and x = "IA", the output should be
// strstr(s, x) = -1;
// For s = "CodefightsIsAwesome" and x = "IsA", the output should be
// strstr(s, x) = 10.

function findFirstSubstringOccurrence(s, x) {
 // KMP (Knuth-Morris-Pratt) Substring Search O(n)
 // Suffix Matcher Table, T[0] = -1
 var T = [-1,0]

 for(var i = 2; i <= x.length; i++) {
  if( x[T[i-1]] === x[i-1] ) {
   T[i] = T[i-1] + 1;

  }
  else T[i] = 0
 }


 var m = 0
 var i = 0
 var count = 0
 while( m <= s.length-x.length && i < x.length) {
  if(count > 49990 && count <= 50000) console.log(m, i, T[i]);
  if(s[m+i] === x[i]) {
   i++;
  }
  else {

   m += i-T[i];
   if(T[i] === -1) i = 0;
   else i = T[i];
  }
  count++;

 }
 if(i === x.length) return m;
 else return -1;


//     //Brute Force O(n^2)
//     var res = -1;

//     for(var i = 0; i < s.length-x.length + 1; i++) {
//         if(s[i] === x[0]) {
//             let j = i;
//             let k = 0;
//             while(j < s.length && k < x.length) {
//                 if(s[j] !== x[k]) break;
//                 if(k === x.length -1) return i;
//                 j++;
//                 k++;
//             }
//         }
//     }
//     return res;
}
