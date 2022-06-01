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