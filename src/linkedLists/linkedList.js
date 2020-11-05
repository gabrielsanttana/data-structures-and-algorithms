class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);

    const leaderNode = this.traverseToIndex(index - 1);
    const newNodeNext = leaderNode.next;

    leaderNode.next = newNode;
    newNode.next = newNodeNext;
    this.length++;

    return this;
  }

  remove(index) {
    if (index > this.length || index < 0) {
      return this;
    }

    if (index === 0) {
      this.head = this.head.next;

      return this;
    }

    if (index === this.length) {
      const newTail = this.traverseToIndex(this.length - 2);

      this.tail = newTail;
      this.tail.next = null;

      return this;
    }

    const leaderNode = this.traverseToIndex(index - 1);
    const nodeToRemove = leaderNode.next;
    const holdingNode = nodeToRemove.next;

    leaderNode.next = holdingNode;
    this.length--;

    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let firstNode = this.head;
    this.tail = this.head;
    let secondNode = firstNode.next;

    while (secondNode) {
      let temp = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = temp;
    }

    this.head.next = null;
    this.head = firstNode;

    return this;
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

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.append(1);
console.log(linkedList.print());
linkedList.insert(2, 99);
console.log(linkedList.print());
linkedList.remove(3);
console.log(linkedList.print());
linkedList.reverse();
console.log(linkedList.print());
