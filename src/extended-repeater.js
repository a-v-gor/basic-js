const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const repeatTimes = options.repeatTimes || 1;


  function returnString(string, numRepeatTimes, strSeparator) {
    let arr = [];
    for (let i = 0; i < numRepeatTimes; i++) {
      arr.push(string);
    }
    return arr.join(strSeparator);
  }

  let resultStrForMultiple = String(str);

  if (Object.keys(options).includes('addition')) {
    resultStrForMultiple += returnString(String(options.addition), additionRepeatTimes, additionSeparator);
  }
  return returnString(resultStrForMultiple, repeatTimes, separator);
}

module.exports = {
  repeater
};
