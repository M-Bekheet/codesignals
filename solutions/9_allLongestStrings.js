/*
  Link: https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL

  Given an array of strings, return another array containing all of its longest strings.

  Example

  For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
  allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/

function allLongestStrings(inputArray) {
  let length = 0;
  inputArray.forEach(i => {
    length = i.length > length ? i.length : length;
  })
  return inputArray.filter(i => i.length === length)
}

console.log(
  allLongestStrings(["aba", "aa", "ad", "vcd","aba"])
)