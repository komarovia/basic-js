const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str != 'string') {
    str = String(str);
  }

  let result = [];
  let tempArr = [];

  if (!options.separator) {options.separator = "+";}

  if (options.hasOwnProperty("addition")) {
    if (typeof options.addition != 'string') {
      options.addition = String(options.addition);
    }
		
    if (!options.additionSeparator) {options.additionSeparator = "|";}

		tempArr.push(str);
    tempArr.push(options.addition);

    for (let i = 1; i < options.additionRepeatTimes; i++) {
			tempArr.push(options.additionSeparator);
      tempArr.push(options.addition);
    }
    str = tempArr.join('');
  }

for (let i = 1; i < options.repeatTimes; i++) {
  result.push(str);
  result.push(options.separator);
}
result.push(str);
  
return result.join('');
};