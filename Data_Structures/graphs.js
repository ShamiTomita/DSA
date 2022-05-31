//GRAPHS
//graph data structures consists of a finite (possibly mutable)
//set of vertices or nodes or points,
//together with a set of unordered pairs of these vertices for an undirected
//graph or a set of oredered pairs for a directed graph

//graph is a collection of nodes and their connections
//nodes are treated equally
//USES:
//social networking, google maps, pathfinding, visual hierarchy, recommendations
//for maps-> nodes are locations and connections are "paths"

//vertex is a Node
//Edge is a connection between vertices
//Undirected graph - no polarity no direction between the edges of vertices
//directed graph - yes polarity (you get deadends)
//weighted - each edge has no value assoicated
//unweighted - assign a value to the edge
//google maps would be a directed weighted graph

//Adjacency Matrix

//Adjacency List -> use  hashtable/map
//the values would hold the edges of the vertices
//adjacency can take up less space in sparce graphs
//adjacency faster to iterate over all edges
//adjacency can be slower to look up specific edge so martix better for looking up

//REAL WORLD DATA TENDS TO BE SPARSE SO USE ADJACENCY LIST


class Graph{
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2){
    if(!!this.adjacencyList[vertex1] & !!this.adjacencyList[vertex2]){
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1);
    }
  }
}
