const { expect } = require('chai');

const { solution } = require('./CyclicRotation');

describe('CyclicRotation', () => {
  it('empty array', () => {
    expect(solution([], 3)).to.eql([]);
  });

  it('one element array', () => {
    expect(solution([1], 5)).to.eql([1]);
  });

  it('K = 3', () => {
    expect(solution([3, 8, 9, 7, 6], 3)).to.eql([9, 7, 6, 3, 8]);
  });
});
