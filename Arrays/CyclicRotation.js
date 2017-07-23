/* eslint-disable no-param-reassign */

function solution(A, K) {
  const N = A.length;

  while (K > 0 && N > 0) {
    const last = A[N - 1];

    for (let i = N - 1; i > 0; i -= 1) {
      A[i] = A[i - 1];
    }

    A[0] = last;
    K -= 1;
  }

  return A;
}

module.exports = {
  solution,
};
