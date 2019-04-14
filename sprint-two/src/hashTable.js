

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
// I one string, one value (k,v)
// O none
// C k probably has to be a string
// E not really any

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  
  if (!Array.isArray(this._storage.get(index))){
    return this._storage.set(index, [[k,v]]);
  }
  for (let i = 0; i < bucket.length; i++){
    if (bucket[i][0] === k){
      return bucket[i][1] = v;
    } 
  }
  return bucket.push([k,v])
};

// I key value
// O return value of key:value
// C if nothing, need to return something
// E In the nothing case, what happens? 

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket == undefined){
    return undefined;
  } 

  for (let i = 0; i < bucket.length; i ++){
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);  
};
// var hashTable = new HashTable()
// hashTable.insert('Steven', 'Tyler');
// hashTable.remove('Steven');
// console.log(hashTable.retrieve('Steven'))


/*
 * Complexity: What is the time complexity of the above functions?
 */


