const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed! ${actual} != ${expected}`);
  }
};

// naming the function eqArrays.
const eqArrays = function(array1,array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
  //compare arrays.
  //need to loop throuhg to grab the arrays to be compared.
  //need to loop through to grab the variables inside each array to compare them.
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should pass