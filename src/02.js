function containsCommonItem1(array1, array2) {
  //O(a * b)

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }

  return false;
}

function containsCommonItem2(array1, array2) {
  //O(a + b)

  let map = {};

  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      const item = array1[i];
      map[array1[i]] = item;
    }
  }

  for (let j = 0; j < array2.length; j++) {
    if (map[array2[i]]) {
      return true;
    }
  }

  return false;
}

function containsCommonItem3(array1, array2) {
  return array1.some((item) => array2.includes(item));
}
