var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};

// I None
// O this.counter (or number of this.storage properties)
// C Size msut be > 0
// E None
Queue.prototype.size = function(){
  return this.counter;
}
// I value
// O none
// C none
// E none
Queue.prototype.enqueue = function(value){
  this.counter += 1;
  this.storage[this.counter] = value;
}
// I none
// O the oldest, first item in this.storage
// C queue can never be lower than 0
// E returns zero if there is a zero-length queue
Queue.prototype.dequeue = function(){
  if (this.counter > 0) {
    var result = this.storage[1];
    delete this.storage[1];
    for (var key in this.storage) {
      this.storage[1] = this.storage[key]
    }
    delete this.storage[this.counter]
    this.counter -= 1;
    return result;
  } else {
    return 0;
  }
}

