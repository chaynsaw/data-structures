var Stack = function() {
  var stack = {};
  stack.storage = {};
  stack.counter = 0;

  // attach methods to obj
  stack.size = stackMethods.size;
  stack.push = stackMethods.push;
  stack.pop = stackMethods.pop;

  return stack;
};

var stackMethods = {};

// I - string
// O - side effect (add item to stack.storage)
// C - none
// E - invalid inputs
stackMethods.push = function(str) {
  this.counter += 1;
  // put item where key = counter and value = str into storage
  this.storage[this.counter] = str;
};


// I - none
// O - number
// C - none
// E - if stack is empty return zero
stackMethods.size = function() {
  return this.counter;
};

// I - none
// O - the item removed from array
// C - stack cannot be less than zero
// E - see constraints
stackMethods.pop = function() {
  // plan: 
  // store the last item pushed to the stack (stack-top)
  // reduce counter by one
  // delete the last item
  // return the previously stored item
  // add an if condition to address if storage size is zero.
  
  if (this.counter > 0) {
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter -= 1; 
    return result; 
  } 
  
};

let stack = Stack();
stack.push('a');
stack.push('b');
stack.push('c');
stack.pop();
console.log(stack.pop());

