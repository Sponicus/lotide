const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed! ${actual} != ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let obj1Array = Object.keys(object1);
  let obj2Array = Object.keys(object2);
  for (let i of obj1Array) {
    if (obj1Array.length === obj2Array.length && obj1Array[i] === obj2Array[i]) {
      return true
    }
  return false
  }
};

//////test//////
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd,dc), true);


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);