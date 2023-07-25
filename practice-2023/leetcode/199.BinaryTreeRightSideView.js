/*99. Binary Tree Right Side View
Medium
10.5K
657
Companies
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

Example 1:


Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
Example 2:

Input: root = [1,null,3]
Output: [1,3]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
Accepted
1M
Submissions
1.6M
Acceptance Rate
62.0%
	*/


/* Tues 7/25/2023
 * Solution, Accepted:
 * /
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
 * @return {number[]}
 */
var rightSideView = function(root) {
//bfs, nested level loop, 
/////basic + add action and result

// 0. root null check
if(!root) return []    
// 1. create queue, enqueue root
let queue = [];
queue.push(root);
// 2.0 result = []
let result = [];
// 2.1 outer while queue not empty
while(queue.length > 0) {
// 2.1a) get queue size = levelsize
  let levelsize = queue.length;
  // 3. inner level loop, while levelsize > 0
  while(levelsize > 0) {
    // 3a) curr = dequeue
    let curr = queue.shift();
    // 3b) If last node in level (levelsize === 1), save to result
    if(levelsize === 1) result.push(curr.val);

    // 3c) nullcheck left, enqueue
    if(curr.left) queue.push(curr.left);
    // 3d) nullcheck right, enqueue
    if(curr.right) queue.push(curr.right);
    // 3z) levesize--
    levelsize--;
  }
}
 
// Z. return result
return result; 
};

