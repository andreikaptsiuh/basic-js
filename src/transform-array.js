const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) return error
  let result =[];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == `--double-next` && i+1 < arr.length){
      result.push(arr[i+1])
      continue
    } 
    if(arr[i] == `--double-prev` && i > 0 && arr[i-2] != '--discard-next'){
      result.push(arr[i-1])
      continue
    }
    result.push(arr[i])
  }
  const discardCommands = [`--discard-next`,  `--discard-prev`, `--double-next`, `--double-prev`];
  return result.filter((item, index) => !discardCommands.includes(item) &&  arr[index - 1] != `--discard-next` &&
  arr[index+1] != `--discard-prev`)
};
