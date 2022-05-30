//STACKS;
//what is a stack?
//stacks and queues are data collections (abstract);
//LIFO (last in first out), the last element added to the stack is the first to go
// a stack of objects
//undo and redo, routing, history;

//there is more than one way of implementing a stack
//ARRAY IMPLEMENTATION
let stack = [];
stack.push("google")
stack.push("instagram")
stack.push("youtube")
stack = ["google", "instagram", "youtube"]
stack.pop()
//only using push and pop makes this array a stack;
//can also be done using unshift and shift; manipulating the begnning is no good!!!
stack.unshift("create new file");
stack.unshift("resized files");
stack.unshift("added color");
stack = ["added color", "resized files", "create new file"]
stack.shift()

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  pop(){
    let temp = this.first;
    if(!this.first) return undefined;
    if(this.size === 1){
      this.first = null;
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value

  }
  push(value){
    let newNode = new Node(value);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      let temp = this.first
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
}
