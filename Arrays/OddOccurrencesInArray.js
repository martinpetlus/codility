function solution(A) {
  let result = 0;

  A.forEach((a) => {
    // eslint-disable-next-line no-bitwise
    result ^= a;
  });

  return result;
}

module.exports = {
  solution,
};
