/*
  Link: https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE
 
  Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

  Example

  For inputArray = [2, 4, 1, 0], the output should be
  arrayMaximalAdjacentDifference(inputArray) = 3.
 */

function arrayMaximalAdjacentDifference(inputArray) {
  let diff = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    diff = Math.max(Math.abs(inputArray[i] - inputArray[i + 1]), diff)
  }
  return diff;
}