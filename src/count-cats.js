const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let newArray = [];
  if (backyard.length === 0) {return 0}
			else {for (let i = 0; i < backyard.length; i++){
						newArray += backyard[i].slice() + ",";
					}

			newArray = newArray.split(",");
			newArray = newArray.filter(item => item === '^^');
  return newArray.length;}
};
