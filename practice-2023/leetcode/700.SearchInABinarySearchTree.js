/*
 * 700. Search in a Binary Search Tree
Easy
5.3K
171
Companies
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

Example 1:


Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
Example 2:


Input: root = [4,2,7,1,3], val = 5
Output: []
 

Constraints:

The number of nodes in the tree is in the range [1, 5000].
1 <= Node.val <= 107
root is a binary search tree.
1 <= val <= 107
Accepted
682.1K
Submissions
871.2K
Acceptance Rate
78.3%

 *
 * */

/* Mon 7/25/2023
 * Solution, Accepted
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
 * @param {number} val
 * @return {TreeNode}

 dfs on bst
 choose left or right
 Time O(H), where H is height of tree. if tree balanced, H = log n, else worst case in skewed tree H = n, where n is number of nodes
 Space O(H), where H is hight of tree. See above.


 ///

 1. basic dfs
 2. add compare action to dfs
 3. add result saving action to dfs
 4. return result

 */
var searchBST = function(root, val) {
  //base case

  if(!root) return null;
  console.log('root:', root, 'root.val', root.val, 'val', val, 'root.val ===val', root.val === val)

  //TODO: Action on root
  if(root.val === val) return root;

  //traverse
  //add BST compare
  return root.val > val ?
  searchBST(root.left, val):
  searchBST(root.right, val)

};
