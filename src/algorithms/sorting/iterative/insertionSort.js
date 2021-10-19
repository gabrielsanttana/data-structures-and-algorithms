function insertionSort(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    let numberToInsert = numbers[i];
    let j;

    for (j = i - 1; numbers[j] > numbers[i] && j >= 0; j--) {
      numbers[j + 1] = numbers[j];
    }

    numbers[j + 1] = numberToInsert;
  }

  return numbers;
}

console.log(insertionSort([4, 1, 3, 7, 6])); // [ 1, 3, 4, 6, 7 ]

// O(n^2)
