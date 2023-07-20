/* 437. Path Sum III
Medium
9.9K
469
Companies

link url: https://leetcode.com/problems/path-sum-iii/?envType=study-plan-v2&envId=leetcode-75

Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

 

Example 1:


Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.
Example 2:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3
 

Constraints:

The number of nodes in the tree is in the range [0, 1000].
-109 <= Node.val <= 109
-1000 <= targetSum <= 1000
 *
 * */

/*Attempts*/


/* 2023.Jul20.Thurs
*/ 

/*
 * Attempt 2: 25 min
 * Tried Helper Method Recursion
 * passed in `targetsum` and `running`
 *
 * Failed Test Case:
 * 
 * targetsum = 8
 * tree = [1,null,2,null,3,null,4,null,5]
 *
 * 1
 *  \
 *   2
 *    \
 *     3
 *	\
 *	 4
 *	  \
 *	   5
 *	    
 * Expected: 2
 * Actual: 3
 * 
 **/
 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
/**
var pathSum = function(root, targetSum) {
    return helper(root, targetSum, targetSum);
};


var helper = (root, targetSum, running) => {
    if(!root) return 0;
    let reached = running - root.val === 0? 1: 0; 

    console.log(reached,':' , root.val, 'running:', running)
    
    return reached + helper(root.left, targetSum, running - root.val) + helper(root.right, targetSum, running - root.val) + helper(root.left, targetSum, targetSum) + helper(root.right, targetSum, targetSum)  
}
 *
 *
 *
 *
 *
 * /


/*
 * Attempt 1: ~40 min
 * Tried Pure Recursion.
 *
 * Bug: `targetsum` parameter needs to be the original targetsum value in the last 2 recursive calls, not the running one used in the first 2 recursive calls.
 *
 *
 * /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}


               10,
          5,         -3
        3,   2;    null,11,
     3,-2;  null,1 

target sum 8

sum = 5

brute force
pathSum(root, ts) counts all paths starting at root that add up to ts

base case
!root? return 0

pathSum(root, ts) = pathSum(root.left, ts-root.val) + pathSum(root.right, ts-root.val) + pathSum(root.left, ts) + pathSum(root.right, ts)

 */
/*

var pathSum = function(root, targetSum) {

    if(!root) return 0;

    let currSum = targetSum - root.val === 0? 1: 0;

    console.log(root.val, root.left, root.right, targetSum, currSum)

    return currSum + pathSum(root.left, targetSum - root.val) + pathSum(root.right, targetSum - root.val) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
    
};
 *
 *
 * /


