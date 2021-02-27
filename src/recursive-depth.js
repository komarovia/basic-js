const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;

    for (let i = 0; i < arr.length; i++) {
			let item = 1;
      if (Array.isArray(arr[i])) {
        item = item + this.calculateDepth(arr[i]);
        if (counter < item) {
          counter = item;
        };
      };
    };
    return counter;
  };
};