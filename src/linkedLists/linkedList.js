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
    const newNode = newNode(value);

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

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.append(1);
linkedList.insert(2, 99);
console.log(linkedList.print());
