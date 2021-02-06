const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(typeof str != 'string') str = String(str)
  let result = '';
  if(options.repeatTimes == undefined) options.repeatTimes = 1
  for(let i = 0; i < options.repeatTimes; i++){
    result += str;

    if(options.addition !== undefined){
      if(options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1

      for(let j = 0; j < options.additionRepeatTimes; j++){
        result += options.addition;
        if(j + 1 < options.additionRepeatTimes) result += options.additionSeparator == undefined ? '|' : options.additionSeparator
      }
    }
    
    if(i + 1 < options.repeatTimes) result += options.separator == undefined ? '+' : options.separator
  }
  return result
};
  
