//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    this.length++;
  }

  pop() {
    throw new Error('Remove this statement and implement this function');
  }

  shift() {
    throw new Error('Remove this statement and implement this function');
  }

  unshift() {
    throw new Error('Remove this statement and implement this function');
  }

  delete() {
    throw new Error('Remove this statement and implement this function');
  }

  count() {
    throw new Error('Remove this statement and implement this function');
  }
}
