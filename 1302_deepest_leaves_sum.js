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
var deepestLeavesSum = function(root) {
    let cache = [];
    var findDeepestLevel = (root, level = 0) => {
        if(!root) {
            return 0;
        }
        cache[level] = (cache[level] || 0) + root.val;
        findDeepestLevel(root.left, level+1);
        findDeepestLevel(root.right,level+1);
    }
    findDeepestLevel(root);
    return cache[cache.length-1];

};