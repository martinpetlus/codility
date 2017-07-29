function solution(A) {
  const N = A.length;
  // Sum from 1 to N + 1
  // (n * (n + 1)) / 2
  const sum = ((N + 1) * (N + 2)) / 2;
  let result = sum;

  A.forEach((a) => {
    result -= a;
  });

  return result;
}

module.exports = {
  solution,
};
