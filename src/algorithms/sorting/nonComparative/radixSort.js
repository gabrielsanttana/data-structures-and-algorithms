function getDigit(number, radix, longestNumberLength) {
  const numberString = number.toString();
  const numberSize = numberString.length;

  const mod = longestNumberLength - numberSize;

  return numberString[radix - mod] || 0;
}

function getLongestNumberLength(array) {
  let longestNumberLength = 0;

  for (let i = 0; i < array.length; i++) {
    const currentNumberLength = array[i].toString().length;
    longest =
      currentNumberLength > longestNumberLength
        ? currentNumberLength
        : longestNumberLength;
  }

  return longestNumberLength;
}

function radixSort(array) {
  const longestNumberLength = getLongestNumberLength(array);

  const buckets = new Array(10).fill().map(() => []); // make an array of 10 arrays

  for (let i = longestNumberLength - 1; i >= 0; i--) {
    while (array.length) {
      const current = array.shift();
      buckets[getDigit(current, i, longestNumberLength)].push(current);
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }

  return array;
}

console.log(radixSort([456, 11, 23])); // [11, 23, 456]
