/*
  Link: https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

  Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

  Given two arrays a and b, check whether they are similar.

  // note: I have no credit for this specific solution, but I chose it as it's pretty better than mine
*/


function areSimilar(a, b) {
  const aDiff = a.filter((x, i) => x !== b[i]);
  const bDiff = b.filter((x, i) => x !== a[i])
  return aDiff.length === 0 || aDiff.length === 2 && aDiff.join('') === bDiff.reverse().join('')
}

console.log(
  areSimilar([1, 2, 3], [2, 1, 3])
)