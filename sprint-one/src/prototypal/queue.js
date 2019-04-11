
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.counter = 0;

  return queue;
};

var queueMethods = {};
// I none
// O the counter value (number of properties in queue.storage)
// C cannot be less than 0
// E see constraints
queueMethods.size = function(){
  // Going to access the value of the counter at any given time
  // return the counter value
  return this.counter;
}
// I str value
// O none
// C none
// E none
queueMethods.enqueue = function(value){
  // Going to increment counter by one
  // Then add the str value to queue.storage (side effect)
  this.counter += 1;
  this.storage[this.counter] = value;
}
// I  none
// O the removed item from queue.storage or 0 if queue is 0
// C you cannot dequeue an item if queue.storage <= 0
// E see constraints
queueMethods.dequeue = function(){
  // store oldest item from the queue in variable
  // remove oldest item from the queue 
  // (if queue size is 0, then skip the rest)
  // reset the order of the queue, by assigning key 1 to key 2's item, key 2's item to key 3, etc.
  // remove last duplicate item
  // decrement counter by 1
  // return variable that stored oldest item in queue 
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


