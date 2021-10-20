function mergeSort(numbers) {
  if (numbers.length < 2) {
    return numbers;
  }

  const middle = Math.floor(numbers.length / 2);

  const leftArray = numbers.slice(0, middle);
  const rightArray = numbers.slice(middle);

  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  return merge(sortedLeftArray, sortedRightArray);
}

function merge(leftArray, rightArray) {
  const mergedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      mergedArray.push(leftArray.shift());
    } else {
      mergedArray.push(rightArray.shift());
    }
  }

  return mergedArray.concat(leftArray, rightArray);
}

console.log(mergeSort([4, 1, 3])); // [1, 3, 4]

// O(n * log(n))
