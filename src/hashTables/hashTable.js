class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentRow = this.data[address];

    if (currentRow) {
      for (let i = 0; i < currentRow.length; i++) {
        if (currentRow[i][0] === key) {
          return currentRow[i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length + 1; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }

    return keysArray;
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 5);
myHashTable.set('apples', 5);
myHashTable.set('oranges', 5);
console.log(myHashTable.keys());
