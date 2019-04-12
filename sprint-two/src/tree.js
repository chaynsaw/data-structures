var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};
// I value
// O side effect new item in the .children array
// C none
// E none
treeMethods.addChild = function(value) {
  // Should tree have same properties as the tree above?
  // Should we add a tree
  // This childl will be added to newTree.children
  // This child will have a value of value
  // This child will be an object
  var child = Tree(value);
  this.children.push(child);
};

// I target
// O Boolean whether or not target was found
// C none
// E Maybe if it's an empty tree, what happens
treeMethods.contains = function(target) {
  // looking for target
  // that target needs to be compared to .value and all children[index].value
  // if found, return true
  // if not, recurse through tree and children to find children[index].value
  // need to iterate through all the children of tree
  // need to iterate through all the children of those children
  // must have base case, stop when children is empty
  // if so return false
  // let result = false;
  // function helper(target) {
  //   if (this.value === target){
  //     result = true;
  //   }
 
  //   for (var i = 0; i < this.children.length; i++){
  //     this.children[i].contains(target);
  //   }
  // }
  // helper(target);
  // return result;
  
  if (this.value === target) {
    return true;
  } 
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
let tree = Tree();
tree.addChild(5);
expect(tree.contains(5)).to.equal(true);