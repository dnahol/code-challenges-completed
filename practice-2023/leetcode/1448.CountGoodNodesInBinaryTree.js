/*
 * 1448. Count Good Nodes in Binary Tree
 *
 * Medium
 *
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/?envType=study-plan-v2&envId=leetcode-75
 **/
/*
 * 2023.Jul20.Thurs
 *
 * Attempt 1, solved in 23 min
 * 
 * Tried and moved away from pure recursion
 *
 * */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let min = -1 * Math.pow(10, 4)
    return dfsSide(root, min)
};

var dfsSide = function(root, max) {
    if(!root) return 0;

    let currSide = root.val >= max ? 1: 0;
    max = root.val > max? root.val: max;

    return currSide + dfsSide(root.left, max) + dfsSide(root.right, max)
}
