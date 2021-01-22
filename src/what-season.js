const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(Array.isArray(date) || new Date(date).getMilliseconds() == 0) return error  
  let month = new Date(date).getMonth()
  if(isNaN(month)) return 'Unable to determine the time of year!'
  return (month < 2 || month == 11) ? 'winter' : (month > 7) ? 'autumn (fall)' : (month < 5) ? 'spring' : 'summer'
};
