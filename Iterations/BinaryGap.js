function solution(N) {
  let maxLength = 0;
  let currLength = 0;
  let canCount = false;

  while (N > 0) {
    if (N % 2 === 1) {
      canCount = true;
      currLength = 0;
    } else if (canCount) {
      currLength += 1;
    }

    maxLength = Math.max(currLength, maxLength);

    // eslint-disable-next-line no-param-reassign
    N = Math.floor(N / 2);
  }

  return maxLength;
}

module.exports = {
  solution,
};
