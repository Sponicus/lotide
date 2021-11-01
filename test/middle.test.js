const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it('return [] from [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('return [] from [1, 2]', () => {
    assert.deepStrictEqual(middle([1, 2]), []);
  });

  it('return [2] from [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('return [3] from [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('return [2, 3] from [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('return [3, 4] from [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
