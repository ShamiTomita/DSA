//similar t obinary search tree
// MaxBinaryHeap-> parent nodes are always larger than child nodes
// MinBinaryHeap-> parent nodes are always smaller than child nodes

//no order other than the children are dfferent than the parent
//each parent has at most two child nodes
//compact as possible, all the children of each node are as full as they can be
//and left children are filled out first

//storing binary heaps as lists/arrays!!!
// for any index of an array n
// the left child is stored at 2n + 1
// the right child is at 2n + 2
// to find a parent of child at index n
// Math.floor((n-1)/2)
//use the index of each number to model the binary heap structure
//larger values bubble up in a max binary heap
//compare the parent and child, swap them, eventually bubbling up to the top
class MaxBinaryHeap{
  constructor(){
    this.values = []
  }

  insert(value){
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp(){
    let index = this.values.length -1;
    const element = this.values[index];
    while(true){
      let parentIndex = Math.floor((element-1)/2);
      let parent = this.values[parentIndex];
        if (element >= parent) break;
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex
    }
  }

  extractMax(){
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
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

      if(leftChildIndex < length){
        leftChild = this.values[leftChildIndex];
        if(leftChild > element){
          swap = leftChildIndex
        }
      }
      if(rightChildIndex < length){
        rightChild = this.values[rightChildIndex];
        if(
            (swap === null && rightChild > element)||
            (swap !== null && rightChild > leftChild)){
            swap = rightChildIndex
        }
      }
      if(swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
