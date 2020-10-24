function getFirstRecurringItem(array) {
  if (!array || array.length <= 0) {
    return undefined;
  }

  let alreadyShowedItems = [];

  for (let i = 0; i < array.length; i++) {
    if (!alreadyShowedItems.includes(array[i])) {
      alreadyShowedItems.push(array[i]);
    } else {
      return array[i];
    }
  }

  return undefined;
} //Time = O(n^2) Space = O(1)

function getFirstRecurringItem2(array) {
  let map = {};

  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] !== undefined) {
      return array[i];
    } else {
      map[array[i]] = i;
    }
  }
} //Time = O(n) Space = O(n)

console.log(getFirstRecurringItem([2, 3, 3, 2, 5, 4, 4, 4, 4]));
console.log(getFirstRecurringItem2([2, 3, 3, 2, 5, 4, 4, 4, 4]));
