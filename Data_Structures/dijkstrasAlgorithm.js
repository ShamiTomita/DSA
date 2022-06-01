//DYKESTRA === Dijkstra
//acts upon a graph using a priority queue
//finds the shortest path between two vertices

//Weighted Graph
//pick the smallest path from the root node
//shortest way to get to any node

class WeightedGraph{
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex])this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight){
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B", 5);
console.log(graph)
