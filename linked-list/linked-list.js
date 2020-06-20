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
    const value = this.head.value;
    this.delete(this.head);
    return value;
  }

  unshift(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  delete(item) {
    if (item instanceof Node) {
      this.deleteNode(item);
    } else {
      this.deleteNodeWithValue(item);
    }
  }

  deleteNodeWithValue(value) {
    if (value === this.head.value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    if (value === this.tail.value) {
      this.tail = this.tail.previous;
      this.length--;
      return;
    }

    let currentNode = this.head;

    // If only one node and it's value is the value we are deleting
    if (!currentNode.next && currentNode.value === value) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }

    while (currentNode.next && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }

    if (currentNode.next && currentNode.next.value === value) {
      if (currentNode.next.next) {
        currentNode.next = currentNode.next.next;
        currentNode.next.previous = currentNode;
      } else {
        currentNode.next = null;
      }
      this.length--;
    }
  }

  deleteNode(node) {
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

    this.length--;
  }

  count() {
    return this.length;
  }
}
