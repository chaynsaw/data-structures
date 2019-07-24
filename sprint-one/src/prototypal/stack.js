var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.counter = 0;
  return stack;
};

var stackMethods = {};
// I None
// O number
// C cannot be less than zero
// E may go less than zero, if the stack removal method (pop) is not correctly done
stackMethods.size = function(){
  return this.counter;
}
// I value (string)
// O nothing
// C none
// E none
stackMethods.push = function(value){
  // add an item to stack top (value)
  // increment stored counter of 1
  this.storage[this.counter + 1] = value;
  this.counter++;
}
// I nothing
// O removed item
// C cannot return an item if stack is less than zero
// E what happens when stack size is zero
stackMethods.pop= function(){
  // store the item about to be deleted (top of stack)
  // remove that item
  // decrement this.counter by 1 (which supplies size())
  // return the removed item
  // if condition for stack.size() === 0
  if(this.counter !== 0){
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return result;
  }

}

let stack = Stack();
stack.push('a');
stack.pop();
stack.push('b');