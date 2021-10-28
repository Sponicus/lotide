const assertArraysEquals = function (array1,array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed!`);
  } else {
    console.log(`❌❌❌ Assertion Failed!`);
  };
};

const eqArrays = function(array1,array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const results = {};

  //Step 1) Define Object Structure To Return

  return results;
};

///// Test /////

assertArraysEquals(letterPositions("hello"), { h:[1], e: [1], l:[2], o:[1] });