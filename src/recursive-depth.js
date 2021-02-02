const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let temp = arr.filter(item => Array.isArray(item))
    let addition = temp.map(x => this.calculateDepth(x)).sort((a,b) => a - b).reverse()
    depth += addition[0] == undefined ? 0 : addition[0]
    return depth
  }
};
