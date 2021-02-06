const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(boolean){
    this.boolean = boolean
  }
  encrypt(message, key) {
    if(message == undefined || key == undefined) return error;
    let mes = message.toUpperCase().split('').filter(x => x != ' ')
    key = key.toUpperCase()

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = '';
    let maxlength = Math.max(mes.length, key.length);

    for(let i = 0; i < maxlength; i++){
      let messageI = alphabet.indexOf(mes[(i >= mes.length ? i % mes.length : i)]);
      if(messageI == -1){
        code += mes[i];
        continue
      }
      let keyI = alphabet.indexOf(key[ (i >= key.length ? i % key.length : i)]);

      let c = alphabet[  (alphabet.length + messageI + keyI) % alphabet.length ];
      code += c;
    }
    let result = [];
    code = code.split('')
    for(let i = 0; i < message.length; i++){
      if(message[i] == ' ') {
        result.push(' ')
        code.unshift(' ')
        continue
      }
      result.push(code[i])
      
    }
    return this.boolean == false ? result.reverse().join('') : result.join('')
  }    
  decrypt(message, key) {
     if(message == undefined || key == undefined) return error;
    let mes = message.toUpperCase().split('').filter(x => x != ' ')
    key = key.toUpperCase()

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = '';
    let maxlength = Math.max(mes.length, key.length);

    for(let i = 0; i < maxlength; i++){
      let messageI = alphabet.indexOf(mes[(i >= mes.length ? i % mes.length : i)]);
      if(messageI == -1){
        code += mes[i];
        continue
      }
      let keyI = alphabet.indexOf(key[ (i >= key.length ? i % key.length : i)]);

      let c = alphabet[  (alphabet.length + messageI - keyI) % alphabet.length ];
      code += c;
    }
    let result = [];
    code = code.split('')
    for(let i = 0; i < message.length; i++){
      if(message[i] == ' ') {
        result.push(' ')
        code.unshift(' ')
        continue
      }
      result.push(code[i])
      
    }
    return this.boolean == false ? result.reverse().join('') : result.join('')
  }
}

module.exports = VigenereCipheringMachine;
