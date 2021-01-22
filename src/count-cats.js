const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let result = 0;
  for(let cat of backyard){
    result += cat.filter(item => item == '^^').length
  }
  return result
};
