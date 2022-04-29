const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.value = String(value);
    this.chain.push(this.value);
    return this;
  },
  removeLink(position) {
    if (!this.chain[position-1]) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`)
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const arr = this.chain;
    this.chain = [];
    return '( ' + arr.join(' )~~( ') + ' )'
  }
};

module.exports = {
  chainMaker
};
