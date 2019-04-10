var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var last = someInstance.size();
    storage[last] = value;
  };

  someInstance.dequeue = function() {
    var result = storage[0];
    delete storage[0];
    for (var i = 0; i < someInstance.size(); i++) {
      storage[i] = storage[i + 1];
      delete storage[i + 1];
    }
    return result; 
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
