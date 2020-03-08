/*
  Link: https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg
  
  You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

  Example

  For inputArray = [1, 1, 1], the output should be
  arrayChange(inputArray) = 3.
*/

function arrayChange(inputArray) {
  let change = 0;

  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      change = change + (inputArray[i - 1] - inputArray[i] + 1);
      inputArray[i] = inputArray[i - 1] + 1
    }
  }

  return change;
}

console.log(
  arrayChange([[1, 1, 1]])
)