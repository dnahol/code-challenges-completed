/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    //ending index
    let index = 0

    //reducer
    let appender = (acc, curr, i)=> {
        index = i
        return word2.length > i? acc + curr + word2[i]: acc + curr}
    
    //split, reduce    
    let ans = word1.split('').reduce(appender, '');

    //append tail
    return word1.length > word2.length? 
    ans + word1.substring(index +1) :
    word2.length > word1.length? 
    ans + word2.substring(index +1) :
    ans
    
};
