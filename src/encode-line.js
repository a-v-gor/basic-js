const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let strArr = str.split('');
  let resArr = [];
  let count = 1;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == strArr[i+1]) {
      count ++;
    } else {
      if (count > 1) {
        resArr.push(count);
        count = 1;
        
      }
      resArr.push(strArr[i])
    }
  }
  return resArr.join('');
}

module.exports = {
  encodeLine
};
