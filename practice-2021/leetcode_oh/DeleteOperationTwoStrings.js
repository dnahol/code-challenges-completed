

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}

583. Delete Operation for Two Strings
https://leetcode.com/problems/delete-operation-for-two-strings/

Same as Deletion Distance in PRAMP, see folder

 */
var minDistance = function(word1, word2) {
  let memo = {}
  function traverse(len1, len2) {
    if(len1 === 0 && len2 === 0) return 0
    else if(len1 === 0) return len2
    else if(len2 === 0) return len1

    let key = null
    if(word1[len1 - 1] === word2[len2 - 1]) {
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
  return traverse(word1.length, word2.length)
};
