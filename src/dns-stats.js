const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let resultObj = {};
  
  function countDomains (arr, str) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].endsWith(str)) {
        count++;
      }
    }
    return count;
  }

  for (let i = 0; i < domains.length; i++) {
    let word = domains[i];
    let arrWord = word.split('.');
    let domain1 = arrWord[arrWord.length-1];
    resultObj['.'+domain1] = countDomains(domains, domain1);
    let domain2 = arrWord[arrWord.length-2];
    resultObj['.'+domain1+'.'+domain2] = countDomains(domains, domain2+'.'+domain1);
    if (arrWord.length > 2) {
      let domain3 = arrWord[arrWord.length-3];
      resultObj['.'+domain1+'.'+domain2+'.'+domain3] = countDomains(domains, domain3+'.'+domain2+'.'+domain1);
    }
  }
  return resultObj;
}

module.exports = {
  getDNSStats
};
