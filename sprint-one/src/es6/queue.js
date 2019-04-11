class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.storage = {};
  }
  // I value 
  // O none
  // C none
  // E non
  enqueue(value){
    this.storage[this.size()+ 1] = value;
    // Add to top of the queue
    // increment counter by one

  }
  // I none
  // O last item of this.storage, or zero
  // C cannot take last item from this.storage, if this.storage is empty
  // E when this.storage is down to item
  dequeue(){
    // store the item that is going to be deleted (first, oldest item)
    // delete that item
    // return that stored version of the item
    var result = this.storage[1];
    delete this.storage[1];
    for (var key in this.storage){
      this.storage[this.size()] = this.storage[this.size() + 1];
    }
    delete this.storage[this.size()];
    return result;
  }
  // I None
  // O this.counter
  // C size cannot be below zero
  // E none
  size(){
    return Object.keys(this.storage).length;
  }
}


// let queue = new Queue();
// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// queue.enqueue('c');
// console.log(queue.dequeue());