const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const step = 2 ** disksNumber - 1;
  const time = Math.floor(3600 / turnsSpeed * step);
  const obj = {turns: step, seconds: time};
  return obj;
 };
