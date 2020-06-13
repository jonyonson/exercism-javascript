//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  getValue() {
    return this.value;
  }

  getNext() {
    return this.next;
  }

  setNext(newNext) {
    this.next = newNext;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.setNext(newNode);
      this.tail = newNode;
    }
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    if (Object.is(this.head, this.tail)) {
      const value = this.head.getValue();
      this.head = null;
      this.tail = null;
      return value;
    }

    let current = this.head;

    while (current.getNext() !== this.tail) {
      current = current.getNext();
    }

    let value = this.tail.getValue();
    this.tail = current;

    return value;
  }

  shift() {
    if (this.head === null) {
      return null;
    }

    if (!this.head.getNext()) {
      const head = this.head;
      this.head = null;
      this.tail = null;
      return head.getValue();
    }

    const value = this.head.getValue();
    this.head = this.head.getNext();

    return value;
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
