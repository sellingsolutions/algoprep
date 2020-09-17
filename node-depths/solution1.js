function nodeDepths(root) {
  var d = -1;
  var sum = {
    value: 0,
  };
  var depths = [];
  depth(root, d, sum, depths);
  return sum.value;
}
function depth(node, currentDepth, sum) {
  var children = getChildren(node);

  currentDepth += 1;
  sum.value = sum.value + currentDepth;
  console.log(
    `The depth of the node with value ${node.value} is ${currentDepth}`
  );

  if (children.length === 0) currentDepth = 0;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    depth(child, currentDepth, sum);
  }
}
function getChildren(node) {
  var children = [];
  if (node.left) children.push(node.left);
  if (node.right) children.push(node.right);

  return children;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
