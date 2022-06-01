//A priority queue is a data structre where each element has a priority
//elements with higher priorities are served before elements with lower priorities
//take one elment at a time
//abstract concept, not necessarily a binary heap
//insertion/removal with binaray heap with be logn

class PriorityQueue{
  constructor(){
    this.values = []; //all we need structurally
  }
  enqueue(value, priority){
    let newNode = new Node(value, priority)
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp(){
    let index = this.values.length -1;
    const element = this.values[index];
    while(index > 0){
      let parentIndex = Math.floor((index-1)/2);
      let parent = this.values[parentIndex];
      if(element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  dequeue(){
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values[0] = end);{
      this.sinkDown();
    }
      return max;
  }

  sinkDown(){
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIndex <length){
        leftChild = this.values[leftChildIndex];
        if(leftChild.priority < element.priority){
          swap = leftChildIndex
        }
      }
      if(rightChildIndex < length){
        rightChild = this.values[rightChildIndex];
        if((swap === null && rightChild.priority < element.priority)|| (swap !== null && rightChild.priority < leftChild.priority))
        {
          swap = rightChildIndex
        }
      }
    }
  }
}

class Node{
  constructor(value, priority){
    this.value = value;
    this.priority = priority;//this is what matters
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("brain freeze", 1);
ER.enqueue("broken arm", 2);

//BIG O LOGn
//binary heaps are v useful for sorting and implementing priority queues
