// Create a class Queue and implement the following operations to create a Queue from scratch 



// Enqueue
// Dequeue
// is_empty
// get_first_element - element present in the front of the the Queue.


// Create Queue from scratch.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return temp.value;
  }

  is_empty() {
    return this.size === 0;
  }

  get_first_element() {
    return this.first ? this.first.value : null;
  }
}
