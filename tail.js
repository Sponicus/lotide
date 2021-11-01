const assertEqual = require('./assertEqual');

const tail = function(actual) {
  let result = actual.slice(1);
  return result;
};

module.exports = tail;