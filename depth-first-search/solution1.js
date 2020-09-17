// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    var names = this.getChildNames(array);
    console.log(names);
    return names;
  }
  getChildNames(array) {
    array.push(this.name);

    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
      child.getChildNames(array);
    }
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
