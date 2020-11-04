class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    const newNode = new Node(value);

    const leaderNode = this.traverseToIndex(index - 1);
    const holdingNode = leaderNode.next;

    leaderNode.next = newNode;
    newNode.next = holdingNode;
    newNode.previous = leaderNode;
    holdingNode.previous = newNode;

    this.length++;

    return this;
  }

  remove(index) {
    const nodeToRemove = this.traverseToIndex(index);

    const nodeToRemovePrevious = nodeToRemove.previous;
    const nodeToRemoveNext = nodeToRemove.next;

    nodeToRemovePrevious.next = nodeToRemoveNext;
    nodeToRemoveNext.previous = nodeToRemovePrevious;

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

const linkedList = new DoublyLinkedList(10);

linkedList.append(11);
linkedList.append(12);
console.log(linkedList.print());
linkedList.prepend(9);
linkedList.prepend(8);
console.log(linkedList.print());
linkedList.insert(1, 55);
linkedList.insert(3, 88);
console.log(linkedList.print());
linkedList.remove(2);
console.log(linkedList.print());
