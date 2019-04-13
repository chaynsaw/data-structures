var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me // change null to {} - cuz you are storing the items into an obj
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
// I - items
// O - none
// C - none
// E - add the item to the storage  
// adding item into the storage 
this._storage[item] = item;
};

setPrototype.contains = function(item) {
// I - items
// O - return a boolean 
// C - none
// E - none 
// search thru the storage and see if they have this certain property 
 return this._storage.hasOwnProperty(item); // should return true or false 
};

setPrototype.remove = function(item) {
 // I - items
// O - none
// C - none
// E - none 
// remove that certain item in the object 
delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
