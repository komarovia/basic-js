const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    specSymbol = [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "(", ")", ",", ".", "/", "|", "*", "-", "&", "^", "%", "'", ":", "_", "+", "="];

  constructor(flag = true) { 
    this.flag = flag; 
  }

  encrypt(message, key) {
    if (!message || !key) { throw new Error(); }

		message = message.toUpperCase();
    key = key.toUpperCase();

    let linkMessage = message;
    let arrMessage = message.split('');
    let arrKey = key.split('');
    let result = "";

    point: for (let i = 0; i < arrMessage.length; i++) {
      for (let y = 0; y < this.specSymbol.length; y++) {
        if (arrMessage[i] == this.specSymbol[y]) { arrMessage.splice(i, 1); i--; continue point }
      }
    }

    if (arrKey.length > arrMessage.length) {
      arrKey.splice(arrMessage.length, arrKey.length - arrMessage.length);
}

    for (let y = 0; y < arrMessage.length; y++) {
      if (arrMessage.length != arrKey.length) { arrKey.push(arrKey[y]) }
      else { break };
    }

    key = arrKey.join('');
    message = arrMessage.join('');

    for (let i = 0; i < key.length; i++) {
      let keyI = this.alphabet.indexOf(key[i]);
      let messageI = this.alphabet.indexOf(message[i]);
      if ((messageI + keyI) >= 26) { result += this.alphabet[(messageI + keyI) - 26]; }
      else { result += this.alphabet[messageI + keyI] }
    }

    result = result.split('');
    arrMessage = linkMessage.split('');

    for (let i = 0; i < arrMessage.length; i++) {
      for (let y = 0; y < this.specSymbol.length; y++) {
        if (arrMessage[i] == this.specSymbol[y]) { result.splice(i, 0, this.specSymbol[y]) };
      }
    }

    return this.flag ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();

    let linkMessage = message;
    let arrMessage = message.split('');
    let arrKey = key.split('');
    let result = "";

    point: for (let i = 0; i < arrMessage.length; i++) {
      for (let y = 0; y < this.specSymbol.length; y++) {
        if (arrMessage[i] == this.specSymbol[y]) { arrMessage.splice(i, 1); i--; continue point }
      }
    }

    if (arrKey.length > arrMessage.length) {
      arrKey.splice(arrMessage.length, arrKey.length - arrMessage.length);
}

    for (let y = 0; y < arrMessage.length; y++) {
      if (arrMessage.length != arrKey.length) { arrKey.push(arrKey[y]) }
      else { break };
    }

    key = arrKey.join('');
    message = arrMessage.join('');

    for (let i = 0; i < key.length; i++) {
      let keyI = this.alphabet.indexOf(key[i]);
      let messageI = this.alphabet.indexOf(message[i]);
      if (keyI == messageI) { result += "A"; continue }
      if ((messageI + 26 - keyI) > 26) { result += this.alphabet[(messageI + 26 - keyI) - 26]; }
      else { result += this.alphabet[messageI + 26 - keyI] }
    }
    result = result.split('');
    arrMessage = linkMessage.split('');

    for (let i = 0; i < arrMessage.length; i++) {
      for (let y = 0; y < this.specSymbol.length; y++) {
        if (arrMessage[i] == this.specSymbol[y]) { result.splice(i, 0, this.specSymbol[y]) };
      }
    }

    return this.flag ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
