function capitalize(string) {
  let string2 = string.charAt(0).toUpperCase() + string.slice(1);

  return string2;
}
function reverseString(string) {
  let reverse;
  for (let i = string.length - 1; i >= 0; i--) {
    reverse = reverse + string[i];
  }
  return reverse;
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

function caesarCipher(string, shift) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let shifted;
  for (let i = 0; i < string.length; i++) {
    if (alphabet.indexOf(string[i]) === -1) {
      shifted = shifted + string[i];
    } else {
      let num = alphabet.indexOf(string[i]) + shift;
      if (num > 26) num = num - 26;
      shifted = shifted + alphabet[num];
    }
  }
  return shifted;
}

function analyzeArray(array) {
  let object = {};
  let average = avgArray(array);
  let min = minArray(array);
  let max = maxArray(array);
  let length = array.length;
  object["average"] = average;
  object["min"] = min;
  object["max"] = max;
  object["length"] = length;
  return object;
}
function avgArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  let avg = sum / array.length;
  return avg;
}
function minArray(array) {
  let min = 1000000;
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) min = array[i];
  }
  return min;
}
function maxArray(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  return max;
}

module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator,
  caesarCipher: caesarCipher,
  analyzeArray: analyzeArray,
};
