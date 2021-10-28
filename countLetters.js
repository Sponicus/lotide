const assertEqual = function(actual, expected) {
  /// with Mentor has to adjust assertEqual function for Object
  let result = true;
  for (let t in actual) {
    if (actual[t] !== expected[t]) {
      result = false;
    }
  }

  if (result === true) {
    ///// end of adjusted assertEqual function for Object
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed! ${actual} != ${expected}`);
  }
};

// Take in String, Return count of each letter in that sentence

const countLetters = function(allLetters) {
  let results = {};
  // loop through string
  for (let letter of allLetters) {
    //IF it is first time add letter to object and ommit spaces and count all letters
    if (letter === " ") {
    } else if (results[letter] > 0) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  //console.log(results)
  return results;
};


//countLetters('hello')
//console.log(countLetters('hello'));
assertEqual(countLetters('rohit'), { r: 1, o: 1, h: 1, i: 1, t: 1 });
assertEqual(countLetters('hello'), { h: 1, e: 1, l: 2, o: 1 });
assertEqual(countLetters("a walk in the park"), { a: 3, w: 1, l: 1, k: 2, i: 1, n: 1, t: 1, h: 1, e: 1, p: 1, r: 1});