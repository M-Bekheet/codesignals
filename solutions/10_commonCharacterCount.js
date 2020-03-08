/*
  Given two strings, find the number of common characters between them.

  Example

  For s1 = "aabcc" and s2 = "adcaa", the output should be
  commonCharacterCount(s1, s2) = 3.

  Strings have 3 common characters - 2 "a"s and 1 "c".

*/

function commonCharacterCount(s1, s2) {
  s1 = s1.split(''), s2 = s2.split(''), count = 0;
  s1.forEach(a => {
    if (s2.indexOf(a) !== -1) {
      count++;
      s2[s2.indexOf(a)] = '';
    }
  })
  return count;
}
