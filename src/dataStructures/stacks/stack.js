class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingNode = this.top;
      this.top = newNode;
      this.top.next = holdingNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;

    this.length--;

    return this;
  }
}

const myStack = new Stack();

console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.pop());
