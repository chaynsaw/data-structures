var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.stored = null;
  // I values
  // O none
  // C none
  // E what happens when list is one item
  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null && list.tail === null){
      // if there's nothing in the list
      // make the added item the head AND the tail. 
      list.head = list.tail = newNode;
      // list.tail = newNode;
    } else {
      // head doesn't change, but head.next property now must point to value of tail
      list.tail.next = newNode;
      list.tail = newNode;
      
      // tail needs to be the new item
    }
  };
  // I none
  // O removed head value
  // C none
  // E what happens when there is no more items to remove?
  list.removeHead = function() {
    // head is assigned to something else
    // assigned to its next property, to be specific 
    // its next property is then assigned to stored
    list.stored = list.head;
    list.head = list.head.next;
    return list.stored.value;
  };
  // I target value
  // O return Boolean of whether or not you found it
  // C none
  // E none
  list.contains = function(target) { 
    var contains = false;
    var temp = this.head;
    while(contains === false) {
      if (temp.value === target) {
        contains = true;
      } else {
        if (temp.next === null){
          break;
        }
        temp = temp.next;
      }

    }
    return contains;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var linkedList = LinkedList();
linkedList.addToTail(4);
linkedList.addToTail(5);
console.log(linkedList.contains(4));
console.log(linkedList.contains(5));
console.log(linkedList.contains(6));

