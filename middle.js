const assertArraysEquals = require('./assertArraysEquals');

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
module.exports = middle;