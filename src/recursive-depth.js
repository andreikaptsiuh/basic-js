const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for(let array of arr){
      if(Array.isArray(array)){
        depth += this.calculateDepth(array)
      }
    }
    return depth
  }
};
