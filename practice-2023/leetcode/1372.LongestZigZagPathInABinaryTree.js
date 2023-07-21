/*
LeetCode 75

1372. Longest ZigZag Path in a Binary Tree
Medium
2.9K
56
Companies


link url: https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/?envType=study-plan-v2&envId=leetcode-75


You are given the root of a binary tree.

A ZigZag path for a binary tree is defined as follow:

Choose any node in the binary tree and a direction (right or left).
If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
Change the direction from right to left or from left to right.
Repeat the second and third steps until you can't move in the tree.
Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return the longest ZigZag path contained in that tree.

 

Example 1:


Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
Output: 3
Explanation: Longest ZigZag path in blue nodes (right -> left -> right).
Example 2:


Input: root = [1,1,1,null,1,null,null,1,1,null,1]
Output: 4
Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).
Example 3:

Input: root = [1]
Output: 0
 

Constraints:

The number of nodes in the tree is in the range [1, 5 * 104].
1 <= Node.val <= 100
Accepted
109.3K
Submission
 *
 * */

/* 
 * 2023.Jul20.Thurs
 */
 
 /*
 * Attempt 1: 30 min
 *
 * Test Case Failed:
 *
 * [6,9,7,3,null,2,8,5,8,9,7,3,9,9,4,2,10,null,5,4,3,10,10,9,4,1,2,null,null,6,5,null,null,null,null,9,null,9,6,5,null,5,null,null,7,7,4,null,1,null,null,3,7,null,9,null,null,null,null,null,null,null,null,9,9,null,null,null,7,null,null,null,null,null,null,null,null,null,6,8,7,null,null,null,3,10,null,null,null,null,null,1,null,1,2]
 *
 * expected: 5
 * output: 6
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

longest(root, zig) = 
max(
    1 + longest(root.zag,zag),
    longest(root.zig, zig)
)
 */

/*
var longestZigZag = function(root) {
    if(!root) return 0
    let longestLeft = longestZig(root.left, 'left');
    let longestRight = longestZig(root.right, 'right');
    return Math.max(longestLeft, longestRight);
};

var longestZig = function(root, zig) {
    if(!root) return 0;
    
    let zag = zig === 'left'? 'right': 'left'; 
    let zagNode = zag === 'left'? root.left: root.right;
    let zigNode = zig === 'left'? root.left: root.right;
    let zagLength = longestZig(zagNode, zag);

    return Math.max(
        1 + zagLength, 
        longestZig(zigNode, zig)    
    );
}


*/
