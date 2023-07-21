/*
 * LeetCode 75 List
 *
 * 236. Lowest Common Ancestor of a Binary Tree
Medium
14.6K
337
Companies

link url: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/?envType=study-plan-v2&envId=leetcode-75

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [1,2], p = 1, q = 2
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.
Accepted
1.3M
Submissions
2.2M
Acceptance Rate
59.6%
 * */

/*
 * 2023.Jul20.Thurs
 * */

/* Attempt 1: 30 min +
 * 
 * Unable to figure out recursive relationship
 *
 * */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}

    lowest(root, p, q, pfound, qfound) = lowest(root.right, p, q, pfound, qfound)

 */

/*
var lowestCommonAncestor = function(root, p, q) {
    
};

var lowest = (root, p, q, pqfound) => {
    if(!root) return 0
 
    lowest(root.left, p, q, pfound, qfound)
    lowest(root.right, p, q, pfound, qfound)

    if(root === p) pqfound[0] = true;
    if(root === q) pqfound[1] = true;

    if(pfound && qfound) return root;
}
*/
