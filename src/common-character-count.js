const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let result = [];
  for (let i = 0; i< arr1.length; i++) {
    let item = arr1[i];
    if (arr2.includes(item)) {
      result.push(item);
      arr1.splice(i,1);
      arr2.splice(arr2.indexOf(item),1);
      i--;
    }
  }
  return result.length;
}

module.exports = {
  getCommonCharacterCount
};
