7.12.2023 Wed

Attempt 3: 
44 min

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}

Ex 3
LEET
i
CODE

Ex 2
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

tail = AB
tail = AB
ABABAB
    i
   j
ABAB

Ex 2.1
return ""

tail = AA
ABABAA
     i
 j
ABAB

Ex 2.1
return ""

tail = ABA
tail = B
ABABABA 
   i
   j
ABAB

Check that the whole tail matches

 */
var gcdOfStrings = function(str1, str2) {
   let i = 0;
   let j = 0;
   let tail = "";
 
   if(str2 === str1) return str1;
   if(str1.length === str2.length) return "";
   if(str1[i] !== str2[i]) return "";
   
   while(i < str1.length && j < str2.length) {
      if(str1[i] !== str2[i]) return "";
      i++;
      j++;
   }
   
   //set and check tail
   if(i === str1.length) {
      tail = str2.substring(j);
      i = 0;
   }
   if(j === str2.length) {
      tail = str1.substring(i);
      j = 0;
   }

   while(i < str1.length && j < str2.length) {
      
   }
   

};

Attempt 2: 3 Poms
12min
10min
13min


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

iterate str1 with i, str2 with j, simultaneously
at each i and j, check for match
if match, continue
if not match return ""


ABCABC
   i
   t   

ABC
   j
  
tail = ending i to end of longest string
tail is x

Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""

i and j not match, return ""

LEET
i

CODE
j


Example 3.1

when i and j eventually don't match, return ""

COET
  i

CODE
  j

Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

match = j,k at end
match = [0,3] 

012345
ABABAB
   i
    __
    t
    tail

ABAB
   j
     
the tail is the x


Ex 2.1

"A"
   i

"AB"
  i

 */
var gcdOfStrings = function(str1, str2) {
   let i = 0; 

   while(i<str1.length && i<str2.length) {
      if(str1[i] !== str2[i]) return "";
      i++
   }
   if(i === 0) return ""
   //if both i and j are out of bounds, return str1
   

   //Check for tail matching

};



7.11.2023 Tues
Attempt 1: 9 min.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

// Brute Force
/*
0. Iterate str1 and str2
1. find largest substring match, largediv
2. check if that match is a divisor of 
A) str1
B) str 2
C) if so, return largediv
else. largediv = largediv minus last char
D) repeat #2 until largediv is a divisor


 */

var gcdOfStrings = function(str1, str2) {
    
};
