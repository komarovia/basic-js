const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let newArray = [];
  if (backyard.length === 0) {return 0}
			else {for (let i = 0; i < backyard.length; i++){
						newArray = newArray + backyard[i].slice([0]) + ",";
					}

			newArray = newArray.split(",");
			let someUsers = newArray.filter(item => item === '^^');
  return someUsers.length;}
};