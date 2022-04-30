const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let deepDepth = 1;
    let arrOfArrs = arr.filter(element => Array.isArray(element));
    arr = arr.flat();
    if (arrOfArrs.length) {
      deepDepth = 1 + this.calculateDepth(arr);
    } else {
      deepDepth = 0;
    }
    return Math.max(deepDepth, 1);
  }
}

module.exports = {
  DepthCalculator
};
