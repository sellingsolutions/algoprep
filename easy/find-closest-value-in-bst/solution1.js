function findClosestValueInBst(tree, target) {
  let smallestDiff = 100000;
  let closestNumber = 0;
  let node = tree;
  while (node) {
    let isLarger = target > node.value;
    let diff = isLarger ? target - node.value : node.value - target;

    if (diff < smallestDiff) {
      smallestDiff = diff;
      closestNumber = node.value;
    }

    if (isLarger) {
      node = node.right;
    } else {
      node = node.left;
    }
  }

  return closestNumber;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
