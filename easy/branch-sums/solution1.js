// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  var sums = [];
  var sum = 0;

  summate(root, sum, sums);
  return sums;
}
function summate(node, sum, sums) {
  var children = getChildren(node);
  var newSum = sum + node.value;

  if (children.length === 0) {
    sums.push(newSum);
  }

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    summate(child, newSum, sums);
  }
}
function getChildren(node) {
  var children = [];
  if (node.left) children.push(node.left);
  if (node.right) children.push(node.right);
  return children;
}
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
