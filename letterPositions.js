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
  // loop through sentence. 
  for(let i = 0; i < sentence.length; i++) {
    /*console.log(i);
    console.log(sentence[i]);*/
    //add each letter to a key in results and add their position to the key as part of an array. Make sure no spaces are added to the object
    if (sentence[i] === " ") {
      //do nothing
    } else if (results[sentence[i]] !== undefined) {
      //add position to key
      results[sentence[i]].push(i);
      //console.log(i);
    } else {
      //add letter and positiom
      results[sentence[i]] = [i]
      //console.log(sentence[i]);
    }   
  }
  //console.log(results)
  //return said object with results 
  return results;
};

///// Test /////
//letterPositions('hello dear')
assertArraysEquals(letterPositions("hello").e, [1]);