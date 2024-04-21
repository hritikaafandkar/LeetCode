/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> ans=new ArrayList<>();
        preorder(root, ans);
        return ans;
    }

        public void preorder(TreeNode tree, List<Integer> ans){
        //LNR

        if(tree==null)return;
        ans.add(tree.val);
        preorder(tree.left, ans);
        preorder(tree.right, ans);
    }
}