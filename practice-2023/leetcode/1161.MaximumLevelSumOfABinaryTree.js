/*
 * 1161. Maximum Level Sum of a Binary Tree
Medium
3.1K
95
Companies
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

 

Example 1:


Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
Example 2:

Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105
Accepted
205K
Submissions
303K
Acceptance Rate
67.7%
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
 * @return {number}

 BFS, nested level loop
 get level size in outer loop
 bfs steps through level in inner loop
 get sum of each level inside nested loop, after dequeue of curr, before enqueue of curr's children
 keep max sum and level number outside outer loop
 return level after outer loop ends 

 */
var maxLevelSum = function(root) {
  if(!root) return 0;
  
  // assuming queue class,
  // let queue = new Queue([]);;
  let queue = [];
  // queue.enqueue(root);
  queue.push(root);
  let maxval = -1 * Math.pow(10, 5);
  let maxlevel = 1;
  let currlevel = 1;

  while(queue.length > 0) {
    let levelsize = queue.length;
    let levelsum = 0;
    
    while(levelsize > 0) {
      // let curr = queue.dequeue();
      let curr = queue.shift();
      levelsum += curr.val;
      
      //enqueue children!
      if(curr.left) queue.push(curr.left);
      if(curr.right) queue.push(curr.right);

      // last inner loop step
      levelsize--;
    } 
    
    //compare and update maxlevel
    console.log('currlevel', currlevel, 'maxval:', maxval, 'levelsum:', levelsum)
    if(maxval < levelsum) {
      console.log('maxval < levelsum')
      maxval = levelsum;
      maxlevel = currlevel;
    } 

    currlevel++;
  }

  return maxlevel;
};
