/*
Link: https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5

You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4.
*/

function avoidObstacles(inputArray) {
  let length = 1;
  let i = 0;
  while (i < inputArray.length){
    if(inputArray[i] % length === 0){
      length++;
      i = 0;
    } else{
      i++
    }
  }
  return length;
}

console.log(
  avoidObstacles(
    [999, 1000]
  )
)