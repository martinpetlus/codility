const { expect } = require('chai');

const { solution } = require('./PermMissingElem');

describe('PermMissingElem', () => {
  it('[]', () => {
    expect(solution([])).to.equal(1);
  });

  it('[1]', () => {
    expect(solution([1])).to.equal(2);
  });

  it('[2, 3, 1, 5]', () => {
    expect(solution([2, 3, 1, 5])).to.equal(4);
  });
});
