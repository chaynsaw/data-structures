class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.storage = {};
  }
  // I string
  // O none
  // C none
  // E none
  push(value){
    this.storage[this.counter + 1] = value;
    this.counter ++;
  }
  // I nothing
  // O removed item
  // C cannot remove an item from an empty object
  // E could behave oddly if an if zero condition is not set.
  pop(){
    if (this.counter !== 0){
      var result = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter --;
      return result;
    }
    // store the item about to be removed
    // remove that item
    // decrement counter by 1
    // return that stored item
    // if this.counter zero, do none of the above;
  }
  // I None
  // O Number
  // C Cannot be less than 0
  // E Could be less than 0 if pop does not function correclty
  size(){
    return this.counter;
  }
}

