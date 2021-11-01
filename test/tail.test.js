// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');


describe('#tail', () => {

  it('return 3 for words.length', () => {
    assert.deepEqual(words.length, 3);
  });

  it('return 1 for words.slice(2)', () => {
    assert.deepEqual(words.slice(2).length,1);
  });

  it('return 2 for words.slice(1)', () => {
    assert.deepEqual(words.slice(1).length, 2);
  });
});

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);
// assertEqual(words.slice(2).length, 1);
// assertEqual(words.slice(1).length, 2);  