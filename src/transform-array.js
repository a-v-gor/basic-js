const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!(Array.isArray(arr))) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let resultArr = [...arr];
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] == `--discard-next`) {
      if (resultArr[i+1]) {
        resultArr[i+1] = undefined;
      }
      resultArr[i] = undefined;
    } else if (resultArr[i] == `--discard-prev`) {
      if (resultArr[i-1]) {
        resultArr[i-1] = undefined;
      }
      resultArr[i] = undefined;
    } else if (resultArr[i] == `--double-next`) {
      if (resultArr[i+1]) {
        resultArr[i] = resultArr[i+1]
      } else {
        resultArr[i] = undefined;
      }
    } else if (resultArr[i] == `--double-prev`) {
      if (resultArr[i-1]) {
        resultArr[i] = resultArr[i-1]
      } else {
        resultArr[i] = undefined;
      }
    }
  }
  return resultArr.filter((item) => item != undefined);
}

module.exports = {
  transform
};
