var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.currentSize = 0;
  storage.currentNumber = 0;
  storage.lastPopped;
  // Implement the methods below
  someInstance.push = function(value) {
    // need some way to programmatically generate numbers
    storage.currentNumber += 1;
    storage.currentSize += 1;
    storage[storage.currentNumber] = value;
  };

  someInstance.pop = function() {
    if (storage.currentSize !== 0) {
      storage.lastPopped = storage[storage.currentNumber];
      delete storage[storage.currentNumber];
      storage.currentSize -= 1;
      storage.currentNumber -= 1;
    } else {
      
    }
    return storage.lastPopped;

    
  };

  someInstance.size = function() {
    return storage.currentSize;
  };

  return someInstance;
};
