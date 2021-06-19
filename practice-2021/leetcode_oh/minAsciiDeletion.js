/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}

712. Minimum ASCII Delete Sum for Two Strings
https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/

I used this in Recursion WB OH June 2021
Along with 72. Edit Distance
 https://leetcode.com/problems/edit-distance/

Most similar to:
583. Delete Operation for Two Strings
https://leetcode.com/problems/delete-operation-for-two-strings/

Done in PRAMP as Deletion Distance


 sea
 i
 eat
j
                      i,j
                       2,2
      a.code    97    / min  \  t.code
               +  1,2      2,1    +
                  /\
     e.code  101 0,2  1,1
        +       / \
    s.code   -1,2
      +
    sum e,a,t codes

 */
var minimumDeleteSum = function(s1, s2) {
    let memo = {}
    function minSum(i, j) {
        if(i < 0) {
            return asciiSum(s2, j, j+1)
        }
        if(j < 0) {
            return asciiSum(s1, i, i+1)
        }
        let key1 = `${i-1}_${j-1}`
        let key2 = `${i-1}_${j}`
        let key3 = `${i}_${j-1}`

        if(s1[i] === s2[j]) {
            if(memo[key1] === undefined) memo[key1] = minSum(i-1, j-1)
            return memo[key1]

        } else {
            if(memo[key2] === undefined) memo[key2] = minSum(i-1, j)
            if(memo[key3] === undefined) memo[key3] = minSum(i, j-1)
            return Math.min( s1.charCodeAt(i) + memo[key2], s2.charCodeAt(j) + memo[key3] )
        }
    }
    return minSum(s1.length, s2.length)

};

function asciiSum(word, i, len) {
    let sum = 0
    for(let j = i; j > i-len; j--) {
        sum += word.charCodeAt(j)
    }
    return sum
};
