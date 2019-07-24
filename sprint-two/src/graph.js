

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
	// check for edges
	// if edges exist, remove fromNode:toNode and toNode:fromNode
	this.edgeList[node] = [];
	for (var key in this.edgeList){
		for (var i = 0; i < parseInt(this.edgeList[key]); i++){
			this.edgeList[key] = this.edgeList[key].filter((element) => {
				return element !== node;
			})
		}
	}
	
	
};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// I two values, fromNode, toNode
// O boolean
// C must have two nodes minimum?
// E fromNode and toNode could be reversed. 
Graph.prototype.hasEdge = function(fromNode, toNode) {
	// Loop through the keys in edgeList, then look through the array that exists there, then return true if it exists.
	var result = false;
	for (var key in this.edgeList) {
		if (parseInt(key) === fromNode) {
			result = this.edgeList[key].includes(toNode)
		}
	}
	return result;
};
// I two values, fromNode, toNode.
// O None 
// C must have two existing nodes in the array
// E two nodes do not exist, or duplicate connections exist
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	// Create an array with fromNode value.
	// fromNode: toNode
	this.edgeList[fromNode] = [];
	this.edgeList[fromNode].push(toNode);
	this.edgeList[fromNode].push(fromNode);
	this.edgeList[toNode] = [];
	this.edgeList[toNode].push(fromNode);
	this.edgeList[toNode].push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
// I - 2 values fromNode and toNode
// O - none 
// C - can not be called if there is no edges  
// E - affects edgeList 
Graph.prototype.removeEdge = function(fromNode, toNode) {
	//find edge 
	this.edgeList[fromNode] = this.edgeList[fromNode].filter((element) => {
		return element !== toNode;
	})
	this.edgeList[toNode] = this.edgeList[toNode].filter((element) => {
		return element !== fromNode;
	})
		//remove toNode
	
	// find edgeList remove the edge 
	
	// if there is no edge --> nothing happens 
};

// Pass in a callback which will be executed on each node of the graph.
// I cb function
// O none
// C none, must loop through array
// E none
Graph.prototype.forEachNode = function(cb) {
	// Loop through the array of nodeList. This.nodeList.
	// call cb on each item.
	this.nodeList.forEach(function(element){
		cb(element);
	})

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var graph = new Graph();
graph.addNode(4);
graph.addNode(5);
graph.addEdge(5, 4);
graph.removeNode(5);