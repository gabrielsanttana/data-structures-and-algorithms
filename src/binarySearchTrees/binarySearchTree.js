class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;

            return this;
          }

          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;

            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }

  remove() {}

  lookup() {}

  _traverse(node) {
    const tree = {
      value: node.value,
    };

    tree.left = node.left === null ? null : this._traverse(node.left);
    tree.right = node.right === null ? null : this._traverse(node.left);

    return tree;
  }
}
