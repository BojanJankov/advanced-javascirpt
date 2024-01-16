console.log("Script is working");

// Generating arrays

function printArray(array) {
  for (let number = 1; number <= 1000; number++) {
    if (number % 3 === 0) array.push(number);
  }

  return array;
}

let arrayofNumbersDivisibleBy3 = [];

console.log(printArray(arrayofNumbersDivisibleBy3));

function printArrayTwo(arrayTwo) {
  for (let number = 1; number <= 1000; number++) {
    if (number % 4 === 0) arrayTwo.push(number);
  }

  return arrayTwo;
}

let arrayofNumbersDivisibleBy4 = [];

console.log(printArrayTwo(arrayofNumbersDivisibleBy4));

function generateArray(array) {
  for (let number = 1; number <= 1000; number++) {
    if (number % 10 === 1) array.push(number);
  }
  return array;
}

let arrayOne = [];
console.log(generateArray(arrayOne));

// Clean arrays

const testArr = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];

function cleanValues(array) {
  const filterArray = [];
  for (let element of array) {
    if (typeof element === "string") {
      filterArray.push(element);
    }
  }
  return filterArray;
}

console.log(cleanValues(testArr));

function onlyNumbers(array) {
  const filterNumArray = [];
  for (let element of array) {
    if (typeof element === "number" && !Number.isNaN(element)) {
      filterNumArray.push(element);
    }
  }
  return filterNumArray;
}

const resultNumArray = onlyNumbers(testArr);
console.log(resultNumArray);
