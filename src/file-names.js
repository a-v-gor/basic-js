const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let namesObj = {};
  let resArr = [];
  for (let i = 0; i < names.length; i++){
    if(!Object.keys(namesObj).includes(names[i])){
      if (names[i].match(/\(\d+\)/)) {
        const name = names[i].match(/\w+/)[0];
        const num = names[i].match(/\d+/)[0];
        if (namesObj[name] == num) {
          namesObj[names[i]] = 1
        }
      } else {
        namesObj[names[i]] = 0;
      }
    } else {
      namesObj[names[i]]++;
    }
    if(namesObj[names[i]]){
      resArr.push(names[i]+'('+namesObj[names[i]]+')');
    } else {
      resArr.push(names[i]);
    }
    
  }
  return resArr;
}

module.exports = {
  renameFiles
};
