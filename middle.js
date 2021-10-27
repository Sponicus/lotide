const assertArraysEquals = function(array1,array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed!`);
  } else {
    console.log(`❌❌❌ Assertion Failed!`);
  }
};

const eqArrays = function(array1,array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(array) {
  let middleArray = [];
  // determine if even or odd
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    // determine the middle numbers for even
    middleArray.push(array[Math.floor(array.length / 2 - 1)]);
    middleArray.push(array[Math.floor(array.length / 2)]);
  } else {
    // determine the middle number for odd
    middleArray.push(array[Math.floor(array.length / 2)]);
  }
  return middleArray;
};

middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEquals(middle([1]), []);
assertArraysEquals(middle([1, 2]), []);
assertArraysEquals(middle([1, 2, 3]), [2]);
assertArraysEquals(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEquals(middle([1, 2, 3, 4, 5]), [3]); assertArraysEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4]);





