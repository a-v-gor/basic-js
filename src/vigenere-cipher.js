const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(bool) {
    this.modification = (bool || bool === undefined) ? 'direct' : 'reverse';
  }

  createEncryptedLetter (messageLetter, keyLetter) {
    const rawForEncryptArr = this.createRawForEncryptTable(messageLetter);
    return rawForEncryptArr[keyLetter.codePointAt(0) - 65]
  }

  createDecryptedLetter (messageLetter, keyLetter) {
    const rawForDecryptArr = this.createRawForEncryptTable(keyLetter);
    return String.fromCodePoint(rawForDecryptArr.indexOf(messageLetter) + 65)
  }

  createRawForEncryptTable(letter){
    let rawForEncryptTable = [];
    const move = letter.codePointAt(0);
    for (let i = 0; i < 26; i++) {
      let moveIt = i + move;
      if (moveIt > 90) {
        moveIt = moveIt - 26;
      }
      rawForEncryptTable.push(String.fromCodePoint(moveIt));
    }
    return rawForEncryptTable;
  }

  createKeyString(messageForWork, keyWord) {
    // make key-string as long as message or longer

    const lengthForCryptKey = Math.ceil(messageForWork.length/keyWord.length);
    let longKeyForCryptArr = [];
    for (let i = 0; i < lengthForCryptKey; i++){
      longKeyForCryptArr.push(keyWord)
    }

    // make correct key-string

    longKeyForCryptArr = longKeyForCryptArr.join('').split('');
    let rightKeyForCryptArr = [];
    for (let i = 0; i < messageForWork.length; i++){
      if (messageForWork[i].codePointAt(0) < 65 || messageForWork[i].codePointAt(0) > 90){
        rightKeyForCryptArr.push(messageForWork[i]);
      } else {
        rightKeyForCryptArr.push(longKeyForCryptArr.shift())
      }
    }
    return rightKeyForCryptArr;
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined){
      throw new Error('Incorrect arguments!')
    }

    // key and message to uppercase

    const rightMessage = message.toUpperCase();
    const rightKey = key.toUpperCase();
    const fullArrKey = this.createKeyString(rightMessage, rightKey);

    // encrypt message

    let encryptedStrArr = [];
    for (let i = 0; i < message.length; i++){
      if (rightMessage[i].codePointAt(0) < 65 || rightMessage[i].codePointAt(0) > 90) {
        encryptedStrArr.push(rightMessage[i]);
      } else {
        encryptedStrArr.push(this.createEncryptedLetter(rightMessage[i], fullArrKey[i]));
      }
    }

    if (this.modification == 'direct') {
      return encryptedStrArr.join('');
    } else {
      return encryptedStrArr.reverse().join('');
    }
  }
  
  decrypt(message, key) {
    if(message === undefined || key === undefined){
      throw new Error('Incorrect arguments!')
    }
    const rightKey = key.toUpperCase();
    let decryptedStrArr = [];
    
    const fullArrKey = this.createKeyString(message, rightKey);
    for (let i = 0; i < message.length; i++){
      if (message[i].codePointAt(0) < 65 || message[i].codePointAt(0) > 90) {
        decryptedStrArr.push(message[i]);
      } else {
        decryptedStrArr.push(this.createDecryptedLetter(message[i], fullArrKey[i]))
      }
    }

    if (this.modification == 'direct') {
      return decryptedStrArr.join('');
    } else {
      return decryptedStrArr.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
