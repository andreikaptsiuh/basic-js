const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  members = members.map(item => typeof item === "string" ? item.trim()[0].toUpperCase() : '');
  return members.sort().join('')
};
