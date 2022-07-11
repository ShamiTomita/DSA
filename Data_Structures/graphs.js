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
  removeEdge(vertex1, vertex2){
    if(!!this.adjacencyList[vertex1] & !!this.adjacencyList[vertex2]){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v!== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v!== vertex1
    );
    }
  }
  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex]
  }
  traverseDF(start){
    //how far down can we go?
    let visited = {}
    let result = []
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){
      if(!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) return dfs(neighbor)
      });
    })(start);
    return result;
  }

  DFSIteratively(start){
    let s = [start];
    let result = [];
    let visited = {}
    let currentVertex;

    visited[start] = true;
    while(s.length){
      console.log(s)
      currentVertex = s.pop()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(pal =>{
        if(!visited[pal]){
          visited[pal] = true;
          s.push(pal)
        }
      })
    }
    return result;
  }
  traverseBF(start){
    //how many neighbors do I have?
    let queue = [start];
    let visited = {};
    let result = [];
    let currentVertex;
    visited[start] = true;

    while(queue.length){
      currentVertex = queue.shift()
      result.push(currentVertex)
      this.adjacencyList[currentVertex].forEach(neighbor =>{
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor)
        }

      })
    }
    return result;
  }
}


//graphs
//a collection of nodes and edges
//directed (one way) or undirected graphs (two way)
//graph traversal

//depth first
//uses a STACK LIFO push onto the top of stack and pop off the top !!!

//breadth first
//uses a QUEUE FIFO push into queue and shift out


const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

const depthFirstPrint = (graph, source) => {
  const stack = [source]; //push and pop

  while(stack.length > 0){
    current = stack.pop(); //process node AFTER POP
    console.log(current); //first loop print out 'a'
    for (let neighbor of graph[current]){
      stack.push(neighbor)
    }

  }

};

const recursiveDepthFirstPrint = (graph, source) => {
  console.log(source)
  //implicit basecase
  for (let neighbor of graph[source]){
    recursiveDepthFirstPrint(graph, neighbor)
  }
}

const breadthFirstPrint = (graph, source) => { //can only be done iteratively
  let queue = [source]; //push & shift
  while(queue.length > 0){
    let current = queue.shift();
    console.log(current);
    for(let neighbor of graph[current]){
      queue.push(neighbor);
    }
  }
}


//acyclic = no cycles
//cycle
//BIG O graphs at worst are O(n2)

function hasPathDFS = (graph, src, dst) => {
  if(src === dst) return true;

  for (let neighbor of graph[src]){
    if(hasPath(graph, neighbor, dst) === true){
      return true;
    }
  }

  return false;
};

function hasPathBFS = (graph, src, dst) => {
  const queue = [src];
  while(queue.length > 0){
    currentNode = queue.shift();
    if(current === dst) return true;
    for(let neighbor of graph[currentNode]){
      queue.push(neighbor);
    }
  }
  return false;
}


//undirected graph
//convert edge list intp an adjacency list
graph = {}
//create keys out of the nodes in each edge
//what if my graph has a cycle???
//use a visited pattern

const undirectedPath = (edges, nodeA, nodeB) =>{
  const graph = buildGraph(edges);
  //either BFS or DFS
  //DFS!
  return hasPath(graph, nodeA, nodeB, new Set());
}

const hasPath = (graph, src, dst, visited) =>{
  if(src === dst) return true;
  if(visited.has(src)) return false;//here we avoid infinite recursion if cycle

  visited.add(src);

  for(let neighbor of graph[src]){
    if(hasPath(graph, neighbor, dst, visited) === true){ //src and neighbor have a connection, so if neighbor and dst are connected then so is src and dst
      return true;
    }
  }
  return false;
};

const buildGraph = (edges) =>{
  const graph = {}
  for (let edge of edges){
    const [a, b] = edge;
    if(!(a in graph)) graph[a] = [];
    if(!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

//Connected Components
const countConnectedComponents = (graph) => {
  let count = 0;
  const visited = new Set(); //JS Sets give O1 lookup!!! supper fast and easy!!!! use them!!!
  //SETS CAN CONTAIN MULTIPLE TYPES
  for(let node in graph){
    //begin traversal for each node
    console.log(visited)
    if(explore(graph, node, visited) === true) count +=1;//DFT
  }
  return count;
}

const explore = (graph, current, visited) => {
  if(visited.has(String(current))) return false; //serves two purposes

  visited.add(String(current));

  for(let neighbor of graph[current]){
    explore(graph, neighbor, visited)
  }

  return true; //has finished exploring all the neighbors!
}


const largestComponent = (graph) => {
  let count;
  //*********
  const explore = (graph, current, visited) =>{
    if(visited.has(String(current))) return false;
    visited.add(String(current));
    for(let neighbor of graph[current]){
      if(explore(graph, neighbor, visited))count++;
    }
    return true
  }
  //*********

  let components = []
  const visited = new Set();
  for(let node in graph){
    count = 1;
    if(explore(graph, node, visited) === true){
      components.push(count)
    }
  }
  console.log(components)
  if(components.length < 1) return 0;
  return Math.max(...components)
}


const shortestPath = (edges, nodeA, nodeB) => {
  //BFS is useful for shortest path
  let graph = buildGraph(edges);
  let visited = new Set([nodeA]);

  let queue = [ [nodeA, 0] ]; //FIFO push shift

  while(queue.length > 0){
    const [node, distance] = queue.shift();
    if(node === nodeB) return distance;

    for(let neighbor of graph[node]){
      if(!visited.has(neighbor)){
        visited.add(neighbor);
        queue.push( [neighbor, distance + 1]) //+1 to increment
      }
    }
  }
  return -1;
}

const islandCounter = () => {
  
}
