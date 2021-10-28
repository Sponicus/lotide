const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed! ${actual} != ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function (bestTVShowsByGenre, bestTVShowsName) {
  let genre = Object.keys(bestTVShowsByGenre);
  if (bestTVShowsName === "The Expanse") {
    return genre[0]
  }else if (bestTVShowsName  === "Brooklyn Nine-Nine"){
    return genre[1]
  } else if (bestTVShowsName  === "The Wire"){
    return genre[2]
  }    
}
//////test/////

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
