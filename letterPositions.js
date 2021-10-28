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
  for(let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      //do nothing
    } else if (results[sentence[i]] !== undefined) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i]
    }   
  }
  return results;
};
assertArraysEquals(letterPositions("hello").e, [1]);