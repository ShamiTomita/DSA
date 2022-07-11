//classic data structure;
//Trees, Binary Trees, Binary Search Trees;
// trees are datastructures that consist of nodes in a parent/child relationship
//lists are linear and trees are non linear!!!
//real world usecases:
//HTML DOM, Network Routing, Abstract syntax trees

//BINARY Tree
//each node can only have two children at most!!!
//BINARY SEARCH TREES are special binary trees, kept in a special order!!!
//Contains info that is sorted/compared/ordered
//left child node is less than parent
//right child node is more than the parent
//these are great for searching, dividing and conquering to find

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


}

let tree = new BinarySearchTree();
tree.root = new Node (10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

//BIG O insertion-searching = O(log n) best+average tho not guaranteed;
//depends on the type of binary tree ( a bst that looks like a linked list is valid and not great!)

const depthFirstValues = (root) => {
  // todo
  let stack = [root];
  while(stack.length > 0){
    let current = stack.pop();
    console.log(current.val)
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);

  }
};

const depthFirstValues = (root) => {//RECURSIVE
  //whats my base case? an empty tree
  if(root === null) return [];
  //the recursive leap of faith... if I'm at a then =>
  const leftValues = depthFirstValues(root.left); //[b,d,e]
  const rightValues = depthFirstValues(root.right); //[c, f]
  //how do we combine the results?
  return [root.val,...leftValues,...rightValues]//assuming correctness
}

const breadthFirstValues = (root) => {
  if(!root) return [];
  let queue = [root]; //shift and push
  const result = [];
  while(queue.length > 0){
    const current = queue.shift();
    result.push(current.val);
    if(current.left !== null) queue.push(current.left);
    if(current.right !== null) queue.push(current.right);
  }
  return result;
}
