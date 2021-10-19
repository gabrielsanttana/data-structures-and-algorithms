function reverseString1(string) {
  if (!string || string.length < 2 || typeof string !== 'string') {
    return;
  }

  const revertedString = [];
  const totalItems = string.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    revertedString.push(string[i]);
  }

  return revertedString.join('');
}

const reverseString2 = (string) => string.split('').reverse().join('');

const reverseString3 = (string) => [...string].reverse().join('');

console.log(reverseString1('hello'));
console.log(reverseString2('hello'));
console.log(reverseString3('hello'));
