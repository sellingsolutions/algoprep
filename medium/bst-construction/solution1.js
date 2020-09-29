// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    var child = new BST(value);
    var parent = this.findTarget(value);

    child.parent = parent;

    if (value < parent.value) parent.left = child;
    else parent.right = child;

    return this;
  }

  contains(value) {
    var node = this.findValue(value);
    return node !== null;
  }

  remove(value) {
    var nodeToRemove = this.findValue(value);

    // case 1: the node has 2 children
    if (nodeToRemove.left && nodeToRemove.right) {
      // get the smallest value on the right side of the tree
      var minValue = nodeToRemove.right.getMinValue();
      // 'remove' the current node by replacing its value with the smallest value
      nodeToRemove.value = minValue;
      // remove the node with the smallest value
      nodeToRemove.right.remove(minValue);
    }
    // case 2: the node has 0 or 1 children and is a left child of its parent
    else if (nodeToRemove.parent && nodeToRemove.parent.left === nodeToRemove) {
      // move the potential single child up to the parent
      var child = nodeToRemove.left ? nodeToRemove.left : nodeToRemove.right;
      var childValue = child ? child.value : null;
      console.log(
        `move the single child ${childValue} of ${nodeToRemove.value} to its parent ${nodeToRemove.parent.value}`
      );
      if (child) child.parent = nodeToRemove.parent;

      nodeToRemove.parent.left = child;
    }
    // case 3: the node has 0 or 1 children and is a right child of its parent
    else if (
      nodeToRemove.parent &&
      nodeToRemove.parent.right === nodeToRemove
    ) {
      // move the potential single child up to the parent
      var child = nodeToRemove.left ? nodeToRemove.left : nodeToRemove.right;
      if (child) child.parent = nodeToRemove.parent;

      nodeToRemove.parent.right = child;
    }
    // case 4: the node has 0 or 1 children but has no parent
    else if (
      !nodeToRemove.parent &&
      (nodeToRemove.left || nodeToRemove.right)
    ) {
      // We're removing the root node but we can replace it with one of its children
      //
      if (nodeToRemove.right) {
        nodeToRemove.value = nodeToRemove.right.value;
        nodeToRemove.left = nodeToRemove.right.left;
        nodeToRemove.right = nodeToRemove.right.right;
      } else if (nodeToRemove.left) {
        nodeToRemove.value = nodeToRemove.left.value;
        nodeToRemove.right = nodeToRemove.left.right;
        nodeToRemove.left = nodeToRemove.left.left;
      }
    }
    // case 5: the node has no parent and no children
    // i.e. we're removing the root node in the BST but we have no children to replace it with
    else {
      // do nothing
    }

    // Do not edit the return statement of this method.
    return this;
  }

  // finds the next parent of a given new node
  // the base case is whether left and right are null
  // if we can't go any farther then we've found our new parent
  // Time Complexity O(log(N)) - Space Complexity O(log(N))) (recursion stack)
  findTarget(value) {
    if (value < this.value && this.left) {
      return this.left.findTarget(value);
    } else if (value >= this.value && this.right) {
      return this.right.findTarget(value);
    }

    return this;
  }

  // finds a node with the given value
  // returns null if we can't find an exact match
  // Time Complexity O(log(N)) - Space Complexity O(log(N))) (recursion stack)
  findValue(value) {
    // console.log(`looking for ${value} - current value ${this.value}`)
    if (value === this.value) return this;

    if (value < this.value && this.left) return this.left.findValue(value);
    else if (value > this.value && this.right)
      return this.right.findValue(value);

    return null;
  }

  getMinValue() {
    var currentNode = this;
    while (true) {
      if (currentNode.left === null) {
        return currentNode.value;
      }
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}

// Do not edit the line below.
exports.BST = BST;
