//singley linked list and how is it different from an array
//stores any sort of data, ordered
//in an array, each item is indexed
//a singley linked list has no indices, only a relationship between links
//each element is a node and references the next one (or null)
//keep track of the head, the tail and the length
//insertion is easier since we dont have to worry about reindexing items
//random access is not allowed as a consequence
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
//this is a bad way of constructing a singly linked list

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tails = null;
    this.length = 0;
  }
  push(val){
    //should assign a new node to the head (and or tail)
    let newNode = new Node(val)
    //edgecase if empty
    if(!this.head){
      this.head = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length++;
    return this;
  }
  traverse(){
    let current = this.head;
    while(current){
      console.log(current.val);
      current = current.next;
    }
  }
  pop(){
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    return current; //the old head

  }
  unshift(value){
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index){
    if(index < 0 || index >= this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while(counter != index){
      current = current.next;
      counter++;
    }
    return current;

  }

  set(index, value){
    let node = this.get(index);
    if(node){
      node.val = value;
      return true;
    }
    return false;
  }

  insert(index, value){
    if(index < 0 || index > this.length) return undefined;
    if(index === this.length) return !!this.push(value);
    if(index === 0) return !!this.unshift(value);

    let previous = this.get(index-1);
    let newNode = new Node(value)
    let temp = previous.next;

    prev.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }

  remove(index){
    if(index < 0 || index > this.length) return undefined;
    if(index === this.length-1) return this.pop();
    if(index === 0) return this.shift()
    let previous = this.get(index-1);
    let remove = previous.next;
    previous.next = remove.next;
    this.length--;
    return remove;

  }

  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let previous = null;
    let next;

    for(i = 0; i< this.length; i++){
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }
}
let first = new Node("hi");
first.next = new Node("there");
first.next.next = new Node("how");
