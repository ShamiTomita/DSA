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

let first = new Node("hi");
first.next = new Node("there");
first.next.nex = new Node("how");
//this is a bad way of constructing a singly linked list
