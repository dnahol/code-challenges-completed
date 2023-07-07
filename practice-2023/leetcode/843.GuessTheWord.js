/*
 * 843. Guess the Word Hard 
 *
 * https://leetcode.com/problems/guess-the-word/?envType=study-plan-v2&envId=google-spring-23-high-frequency
 *
 * 
You are given an array of unique strings words where words[i] is six letters long. One word of words was chosen as a secret word.

You are also given the helper object Master. You may call Master.guess(word) where word is a six-letter-long string, and it must be from words. Master.guess(word) returns:

-1 if word is not from words, or
an integer representing the number of exact matches (value and position) of your guess to the secret word.
There is a parameter allowedGuesses for each test case where allowedGuesses is the maximum number of times you can call Master.guess(word).

For each test case, you should call Master.guess with the secret word without exceeding the maximum number of allowed guesses. You will get:

"Either you took too many guesses, or you did not find the secret word." if you called Master.guess more than allowedGuesses times or if you did not call Master.guess with the secret word, or
"You guessed the secret word correctly." if you called Master.guess with the secret word with the number of calls to Master.guess less than or equal to allowedGuesses.
The test cases are generated such that you can guess the secret word with a reasonable strategy (other than using the bruteforce method).

 

Example 1:

Input: secret = "acckzz", words = ["acckzz","ccbazz","eiowzz","abcczz"], allowedGuesses = 10
Output: You guessed the secret word correctly.
Explanation:
master.guess("aaaaaa") returns -1, because "aaaaaa" is not in wordlist.
master.guess("acckzz") returns 6, because "acckzz" is secret and has all 6 matches.
master.guess("ccbazz") returns 3, because "ccbazz" has 3 matches.
master.guess("eiowzz") returns 2, because "eiowzz" has 2 matches.
master.guess("abcczz") returns 4, because "abcczz" has 4 matches.
We made 5 calls to master.guess, and one of them was the secret, so we pass the test case.
Example 2:

Input: secret = "hamada", words = ["hamada","khaled"], allowedGuesses = 10
Output: You guessed the secret word correctly.
Explanation: Since there are two words, you can guess both.
 

Constraints:

1 <= words.length <= 100
words[i].length == 6
words[i] consist of lowercase English letters.
All the strings of wordlist are unique.
secret exists in words.
10 <= allowedGuesses <= 30

 * 
 *
 *
 *
 * */


/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
 /**
 //Iteration: Brute Force O(N), where N is words.length: iterate through `words` and guess in word. This works for N <= G, where G is number of allowed guesses.

//Sorting: O(N log N) where N is words.length: sort words then use master.guess results to inform guesses. 

//Heap: O(N log N): Put words in heap. Test top of heap

Or a binary search tree instead?

or just a binary search in a sorted array? 

But how do you know whether to go left or right? 


probability tree

26^6: 26 letters, 6 positions

        ''
/  /  /    \
a b  c  ... z
...
6 layers





Example 1:

Input: secret = "acckzz", words = ["acckzz","ccbazz","eiowzz","abcczz"], allowedGuesses = 10
Output: You guessed the secret word correctly.
Explanation:
master.guess("aaaaaa") returns -1, because "aaaaaa" is not in wordlist.
master.guess("acckzz") returns 6, because "acckzz" is secret and has all 6 matches.
master.guess("ccbazz") returns 3, because "ccbazz" has 3 matches.
master.guess("eiowzz") returns 2, because "eiowzz" has 2 matches.
master.guess("abcczz") returns 4, because "abcczz" has 4 matches.
We made 5 calls to master.guess, and one of them was the secret, so we pass the test case.

["acckzz","ccbazz","eiowzz","abcczz"]

sorted

     0         1        2         3
['abcczz', 'acckzz', 'ccbazz', 'eiowzz']   'aaaaaa'
     4         6         3         2          -1

bst

        2
        3
    /       \
   1        3
   6        2
  /
 0
 4 

min heap

        0
    /       \
   1        2
  /
 3 

 or

        0
    /       \
   2        1
  /
 3 

 max heap

        3 
    /       \
   2        1
  /
 0 


        3 
    /       \
   1        2
  /
 0 


  */
var findSecretWord = function(words, master) {
   
    //

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    function recurse(alphabet, i, guess) {
        if(guess.length === 6)
    }

    recurse(alphabet, 0, '')
};

