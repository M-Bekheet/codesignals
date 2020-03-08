/*
  Link: https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM

  Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

  Example

  For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
  sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/


function sortByHeight(a) {
  ppl = a.filter(m => m !== -1).sort((a, b) => a - b);
  return a.map((height) => {
    return height === -1 ? -1 : ppl.shift()
  })
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))