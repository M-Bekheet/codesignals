/*
  Link: https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico
  
  Given a string, find out if its characters can be rearranged to form a palindrome.

  Example

  For inputString = "aabb", the output should be
  palindromeRearranging(inputString) = true.

  We can rearrange "aabb" to make "abba", which is a palindrome.
*/

function palindromeRearranging(inputString) {
  let arr = inputString.split('').sort();
  let arranged = []

  const countStr = str => arr.filter(a => a === str).length;

  arr.forEach((a, i) => {
    if (countStr(a) % 2 === 0) {
      arr[arr.indexOf(a)] = ''
      arr[arr.indexOf(a)] = ''
      arranged.unshift(a);
      arranged.push(a);
    } else {
      arr[arr.indexOf(a)] = ''
      arranged.splice(Math.ceil(arranged.length / 2), 0, a)
    }
  })

  return arranged.join('') === arranged.reverse().join('')
}