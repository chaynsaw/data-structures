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
Stack.prototype.push = function(){
  // add item to top of the stack
  // increment counter by one
  this.storage[this.counter + 1];
  this.counter++;
}
Stack.prototype.pop = function(){

}


