const { expect } = require('chai');

const { solution } = require('./BinaryGap');

describe('BinaryGap', () => {
  it('6', () => {
    expect(solution(6)).to.equal(0);
  });

  it('328', () => {
    expect(solution(328)).to.equal(2);
  });

  it('66561', () => {
    expect(solution(66561)).to.equal(9);
  });
});
