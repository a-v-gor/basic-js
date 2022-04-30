const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let resArr = [];
  for (let i = 0; i < String(n).length; i++) {
    const arrN = String(n).split('');
    arrN.splice(i, 1);
    const num = arrN.join('')
    resArr.push(num);
  }
  return Math.max(...resArr);
}

module.exports = {
  deleteDigit
};
