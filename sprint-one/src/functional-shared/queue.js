var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // attach methods to this constructor object
  var queue = {};
  // add storage to store items of the queue
  queue.storage = {};
  queue.counter = 0;
  queue.size = queueMethods.size;
  queue.enqueue = queueMethods.enqueue;
  queue.dequeue = queueMethods.dequeue;
  
  return queue;

};

var queueMethods = {};
// I string
// O none
// E none
// C none
queueMethods.enqueue = function(str) {
  // add item to the end of the queue
  // do that by incrementing a counter or number or key by 1, then adding that item
  this.counter += 1;
  this.storage[this.counter] = str;
};
// I string
// O none
// E when size less than zero, no dequeuing is possible
// C see edge case
queueMethods.dequeue = function() {
  // store item from beginning of queue ([1])
  // remove item from beginning of queue ([1])
  // decrement counter by 1
  // which case, do not decrement counter.
  // return that stored item
  // unless queue is zero
 
  var result = this.storage[1]; 
  delete this.storage[1];
  for (var key in this.storage) { 
    this.storage[key] = this.storage[key + 1];
  }
  delete this.storage[this.counter];
  if (this.counter > 0) {
    this.counter -= 1;
  }
  return result;
};
// I string
// O none
// E none 
// C size cannot be less than zero
queueMethods.size = function() {
  return this.counter;
  // return Object.keys(.storage).length;
};

// let queue = Queue();
// queue.enqueue('a');
// expect(queue.dequeue()).to.equal('a');
// queue.enqueue('b');
// expect(queue.dequeue()).to.equal('b');

