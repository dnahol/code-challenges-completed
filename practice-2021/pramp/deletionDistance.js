// Deletion Distance
// The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:
//
// By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
// We cannot get the same string from both strings by deleting 2 letters or fewer.
// Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.
//
// Examples:
//
// input:  str1 = "dog", str2 = "frog"
// output: 3
//
// input:  str1 = "some", str2 = "some"
// output: 0
//
// input:  str1 = "some", str2 = "thing"
// output: 9
//
// input:  str1 = "", str2 = ""
// output: 0
// Constraints:
//
// [input] string str1
// [input] string str2
// [output] integer

//Recursion. Top-down with Memoization.
//All PRAMP test cases passed \o/
function deletionDistance(str1, str2) {
  // your code goes here
  let memo = {}
  function traverse(len1, len2) {
    if(len1 === 0 && len2 === 0) return 0
    else if(len1 === 0) return len2
    else if(len2 === 0) return len1

    let key = null
    if(str1[len1 - 1] === str2[len2 - 1]) {
      key = `${len1-1}_${len2-1}`
      if(memo[key] === undefined) memo[key] = traverse(len1-1, len2-1)
      return memo[key]
    } else {
      let key1 = `${len1-1}_${len2}`
      let key2 = `${len1}_${len2-1}`
      if(memo[key1] === undefined) memo[key1] = traverse(len1-1, len2)
      if(memo[key2] === undefined) memo[key2] = traverse(len1, len2-1)
      return 1 +
      Math.min(
        memo[key1],
        memo[key2]
      )
    }
  }
  return traverse(str1.length, str2.length)
}

//Iteration. Bottom-up with Iteration
//All PRAMP test cases passed \o/
/*
table is jxi matrix
only need to keep last row of matrix, the left, above, diagnally above to the left
*/
function deletionDistance(str1, str2) {
  // your code goes here
  let result = [0]
  //make str1 the shorter string
  if(str1.length > str2.length) {
    let swap = str1
    str1 = str2
    str2 = swap
  }
  //populate first result row, result[0] is for empty string in str1
  for(let i = 0; i <= str1.length; i++) {
    result[i] = i
  }
  for(let j = 1; j <= str2.length; j++) {
    let left = j
    for(let i = 1; i <= str1.length; i++) {
      let prevleft = left
      if(str1[i-1] === str2[j-1]) left = result[i-1]
      else left = 1 + Math.min(left, result[i])
      result[i-1] = prevleft
    }
    result[str1.length] = left
  }
  return result[str1.length]
