function quickSort(numbers) {
  if (numbers.length < 2) {
    return numbers;
  }

  let pivot = numbers[numbers.length - 1];

  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] < pivot) {
      leftArray.push(numbers[i]);
    } else {
      rightArray.push(numbers[i]);
    }
  }

  let sortedLeftArray = quickSort(leftArray);
  let sortedRightArray = quickSort(rightArray);

  return [...sortedLeftArray, pivot, ...sortedRightArray];
}

console.log(quickSort([4, 1, 3])); // [1, 3, 4]

// O(n log(n))
