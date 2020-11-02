class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.before = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      before: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.before = this.traverseToIndex();
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend() {}

  insert() {}

  remove(index) {}

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  print() {
    const linkedListNodes = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      linkedListNodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return linkedListNodes;
  }
}
