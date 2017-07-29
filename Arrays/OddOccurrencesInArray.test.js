const { expect } = require('chai');

const { solution } = require('./OddOccurrencesInArray');

describe('OddOccurrencesInArray', () => {
  it('first array', () => {
    expect(solution([9, 3, 9, 3, 9, 7, 9])).to.equal(7);
  });
});
