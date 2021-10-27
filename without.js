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

const without = function (source,itemsToRemove) {
  for(let i = 0; i < itemsToRemove.length; i++) {
    source = source.filter(function (source) {
      if(source !== itemsToRemove[i]){
      return source
    }
  })
      //Arrow function below
    //source = source.filter(source => source !== itemsToRemove[i])
  };
return source;
};

console.log(without([1,2,3,4,5,6,7,8,9,0],[2,4,5]));
assertArraysEquals(without([1,2,3,4,5,6,7,8,9,0],[2,4,6,8,0]), [1,3,5,7,9]);
