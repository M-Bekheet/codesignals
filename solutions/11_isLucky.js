/*
  Link: https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ
  
  Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

  Given a ticket number n, determine if it's lucky or not.

  Example

    For n = 1230, the output should be
    isLucky(n) = true;
    For n = 239017, the output should be
    isLucky(n) = false.

*/

function isLucky(n) {
  let num = n.toString().split(''),

    part1 = num.slice(0, num.length / 2).reduce((acc, val) => parseInt(acc) + parseInt(val)),

    part2 = num.slice(num.length / 2).reduce((acc, val) => parseInt(acc) + parseInt(val));
    
  return part1 === part2
}

console.log(isLucky(1230))