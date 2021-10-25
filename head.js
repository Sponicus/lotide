const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed!`);
  } else {
    console.log(`❌❌❌ Assertion Failed!`);
  }
};

let head = function (a, b) {
  for ( i of a ) {
    if ( a[i] === b) {
      return i;
    };
  };
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Lighthouse", "Labs", "Hello"]), "Lighthouse")
assertEqual(head([]), 6);
assertEqual(head([6]), 6);
