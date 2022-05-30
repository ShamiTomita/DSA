//nodes point in two directions
//more flexibility  === more memory requirements
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}



class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value){
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;

    }else{
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;

    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.head) return undefined;
    let oldTail = this.tail;
    if(this.length === 1){
      this.tail = null;
      this.head = null;
    }else{

      this.tail = oldTail.previous;
      this.tail.next = null;
      oldTail.previous = null;
    }
    this.length--;
    return oldTail;
  }

  shift(){
    if(!this.head) return undefined;
    let oldHead = this.head;
    if(this.length === 1){
      this.tail = null;
      this.head = null;
    }else{
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.previous = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(value){
    let newHead = new Node(value);
    if(this.length === 0){
      this.head = newHead;
      this.tail = newHead;
    }else{
      this.head.previous = newHead;
      newHead.next = oldHead;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index){
    //check the index if its closer to the beginning or the end of the array
    if(index < 0 || index >= this.length) return undefined;
    let middle = this.length/2;
    let counter, current;
    if(index <= middle){//if less than half, start at the beginning;
      counter = 0;
      current = this.head
      while(counter !== index){
        current = current.next;
        counter++;
      }
    }else{//start at the end
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index){
        current = current.previous
        counter--;
      }
    }
    return current;
  }

  set(index, value){
    let newNode = this.get(index);
    if(!!newNode){
      newNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value){
    if(index < 0 || index >= this.length) return false;
    if(index === 0) return this.unshift(value);
    if(index === this.length) return this.push(value);
    let beforeNode = this.get(index-1);
    let newNode = new Node(value);
    let followingNode = beforeNode.next

    beforeNode.next = newNode, newNode.previous = beforeNode;
    newNode.next = followingNode, followingNode.previous = newNode;
    this.length++
    return true;
  }

  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length-1) return this.pop();

    let removeThisNode = this.get(index);
    let leftNode = removeThisNode.previous;
    let rightNode = removeThisNode.next;

    leftNode.next = rightNode, rightNode.previous = leftNode;
    removeThisNode.next = null, removeThisNode.previous = null;
    this.length--;
    return removeThisNode;
  }
}


//compare Singly and Doubly
//singly is better on space but more cumbersome
//doubly is flexibly but takes up more space;
