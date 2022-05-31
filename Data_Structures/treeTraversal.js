//given any tree, how do we visit each node once?
//two main approachs to traversing a trees: Breadth First & Depth First;
//DFS going deep
//BFS is going accross, horizontally
class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value);
    if(!this.root){
       this.root = newNode;
       return this;
    }else{
      let current = this.root;
      while(true){
        if(value === current.value) return undefined;
        if(value < current.value){
          if(!current.left){
            current.left = newNode;
            return this;
          }else{
            current = current.left;
          }
        }else if(value > curren.value){
          if(!current.right){
            current.right = newNode;
            return this;
          }else{
            current = current.right;
          }
        }
      }
    }
  }
  find(value){
    if(!this.root) return false;
    if(this.root.value === value) return this.root;
    let current = this.root;
    let found = false;
    while(current && !found){//as soon as there is no current, our loop will stop
      if(value < current.value){
        current = current.left;
      }else if(value > current.value){
        current = current.right;
      }else{
        found = true
      }
    }
    if(found === false) return undefined;
    return current;
  }


  BFS(){
    let data = [];
    let node = this.root
    let queue = [];
    queue.push(node.value);
    while(queue.length){
      node = queue.shift();
      data.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder(){//visit node first, look at the left, then the right
    let visited = [];
    let current = this.root;

    function traverse(node){
      visited.push(node)
      if(node.left) traverse(node.left)
      if(node.right)traverse(node.right)
    }

    traverse(current)
    return visited;
  }

  DFSPostOrder(){
    let visited = [];
    let current = this.root;

    function traverse(node){
      if(node.left)traverse(node.left)
      if(node.right)traverse(node.right)
      visited.push(node.value);
    }
    traverse(current);
    return visited;
  }

  DFInOrder(){
    let visited =[];
    let current = this.root;

    function traverse(node){
      if(node.left) traverse(node.left);
      visited.push(node.value)
      if(node.right) traverse(node.right);
    }

    traverse(current)
    return visited;
  }
}

//When to use which one????
//it depends! obvi! time is same but the space used up is different
//BFS -> if there are a lot of kids, its a lot of them to keep track of
//DFS -> if there arent a lot of kids
//DFS In Order used for Binary Search Trees, grab them in a sorted list
//DFS Pre Order "export" or "freeze dry" the tree to recreate it
