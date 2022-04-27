const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  let result = [];
  arr.forEach(element => {
    if ((typeof element == 'string') && element.length) {
      result.push(element.match(/\w[^0-9]{0}/));
    }
  });
  if (result.length) {
    result = result.map(item => item[0].toUpperCase());
    result.sort();
    return result.join('');
  }
  return false;
}

module.exports = {
  createDreamTeam
};
