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

  delete(node) {
    if (this.previous) {
      this.previous.next = this.next;
    }
    if (this.next) {
      this.next.previous = this.previous;
    }
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
    const value = this.tail.value;
    this.delete(this.tail);
    return value;
  }

  shift() {
    throw new Error('Remove this statement and implement this function');
  }

  unshift() {
    throw new Error('Remove this statement and implement this function');
  }

  delete(node) {
    this.length--;

    if (!this.head && !this.tail) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (this.head === node) {
      this.head = node.next;
      node.delete();
    } else if (this.tail === node) {
      this.tail = node.previous;
      node.delete();
    }
  }

  count() {
    throw new Error('Remove this statement and implement this function');
  }
}
