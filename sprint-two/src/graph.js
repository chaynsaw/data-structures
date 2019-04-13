

// Instantiate a new graph
var Graph = function() {
	this.nodeList = [];
	this.edgeList = {};
};

// Add a node to the graph, passing in the node's value.
// I node (value)
// O nothing
// C none
// E none
Graph.prototype.addNode = function(node) {
  this.nodeList.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// I node
// O returns a Boolean
// C none
// E none
Graph.prototype.contains = function(node) {
  return this.nodeList.includes(node);
}
// I node
// O none
// C can't remove a node from an empty graph
// E side effect will change this.nodeList
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	// filter with only the element that is the node filtered out
	// this.nodeList = filtered nodeList
	this.nodeList = this.nodeList.filter((element) => {
		return element !== node;
	})
};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};
// I, two values, fromNode, toNode.
// O None 
// C  
// E
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


