var BinarySearchTree = function(value) {
  var binaryTree = Object.create(bst);
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.value = value;
  return binaryTree;
};

var bst = {};

bst.insert = function (value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value)
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value)
    } else {
      this.right.insert(value);
    }
  } else {
    // nothing
  }
}

bst.contains = () => {
}

bst.depthFirstLog = () => {
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
var bst = BinarySearchTree(5)
