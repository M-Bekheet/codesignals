/*
  Link: https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN

  Given a rectangular matrix of characters, add a border of asterisks(*) to it.

  Example
  For

  picture = ["abc",
            "ded"]

  the output should be

  addBorder(picture) = ["*****",
                        "*abc*",
                        "*ded*",
                        "*****"]

*/

function addBorder(picture) {
  let newPic = picture.map(a => '*' + a + '*')
  let length = newPic[0].length;
  
  newPic.unshift('')
  newPic.push('')

  for (let i = 0; i < length; i++) {
    newPic[0] = newPic[0] + '*'
    newPic[newPic.length - 1] = newPic[newPic.length - 1] + '*'
  }
  return newPic;
}


console.log(addBorder(["abc", "ded"]))