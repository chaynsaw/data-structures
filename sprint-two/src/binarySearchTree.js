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

bst.contains = function(value) {  
  if (this.value === value) {
    return true;
  } else if (value > this.value && this.right !== null) {
    return this.right.contains(value);
  } else if (value < this.value && this.left !== null) {
    return this.left.contains(value);
  } else {
    return false;
  }
}

bst.depthFirstLog = function(callback) {
  callback(this.value)
  if (this.left) {
    this.left.depthFirstLog(callback);
  } 
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
// var binarySearchTree = BinarySearchTree(5)
// binarySearchTree.insert(2);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// var func = function(value) { array.push(value); };
// var array = [];