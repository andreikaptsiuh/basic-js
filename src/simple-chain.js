const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.link.length
  },
  addLink(value) {
    this.link.push(`~( ${value} )~`)
    return this
  },
  removeLink(position) {
    if(!Number.isInteger(position) || typeof position !== 'number' || this.link.length < position){
      this.link = []
      return thrown
    } 
    this.link.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.link.reverse()
    return this
  },
  finishChain() {
    let finishString = this.link.join('').slice(1, this.link.join('').length - 1)
    this.link = []
    return finishString
  },
  link: []
};

module.exports = chainMaker;
