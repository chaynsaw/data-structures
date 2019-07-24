var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};
// I Noting
// O Number
// C Cannot be zero
// E Could be zero or less if pop doesn't return properly
Stack.prototype.size = function(){
  return this.counter;
}
// I string
// O nothing
// C none
// E none
Stack.prototype.push = function(value){
  // add item to top of the stack
  // increment counter by one
  this.storage[this.counter + 1] = value;
  this.counter++;
}
// I nothing
// O removed item
// C cannot return if there's nothing in this.storage
// E should handle what happens when this.storage has nothing in it
Stack.prototype.pop = function(){
  // store item that you're about to remove
  // delete that item
  // decrement counter by 1
  // return that item
  // if zero, don't do any of this. there's no item to store, no item to delete, no decrementation, and no returning.
  if (this.counter !== 0){
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter --;
    return result;
  }
}


let stack = new Stack();
stack.push('a');
stack.pop();
stack.push('b');