const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let answer = {
    turns: Math.pow(2, disksNumber) - 1,
  }
  answer.seconds = Math.floor(3600 / turnsSpeed * answer.turns)
  return answer
};
