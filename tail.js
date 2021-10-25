const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed! ${actual} != ${expected}`);
  }
};

const tail = function (actual) {
  let result = actual.slice(1)
  return result;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);
assertEqual(words.slice(2).length, 3);
assertEqual(words.slice(3),3)