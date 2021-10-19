function bubbleSort(numbers) {
  let swapped = false;

  do {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i + 1]) {
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        swapped = true;
      } else {
        swapped = false;
      }
    }
  } while (swapped);

  return numbers;
}

console.log(bubbleSort([4, 1, 3, 7, 6])); // [ 1, 3, 4, 6, 7 ]

// O(n^2)
