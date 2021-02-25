const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

	if (Array.isArray(arr) == false) {
    throw new Error();
  }

	    let newArr = [];

		for (let i = 0; i < arr.length; i++) {
	
				//'--double-next'
				if (arr[i] == '--double-next' && i !== arr.length - 1) {
				newArr.push(arr[i + 1]);
				continue;
			} 
				else if (arr[i] == '--double-next' && i == arr.length - 1) {
				continue;
			} 
//[----------------------------------------------------------]

				// --double-prev
				if (arr[i] == '--double-prev' && i == 0) {
					continue;
			}
			else if (arr[i] == '--double-prev' && arr[i - 2] == '--discard-next') {
				continue;
			}
				else if(arr[i] == '--double-prev') {
				newArr.push(arr[i - 1]);
				continue;
			}
//[----------------------------------------------------------]

				//--discard-next
				if(arr[i] == '--discard-next' && i == arr.length - 1){
					continue;
			} 
				else if(arr[i] == '--discard-next') {
				i++;
				continue;
			}
//[----------------------------------------------------------]

				//--discard-prev
				if (arr[i] == '--discard-prev' && i == 0) {
					continue;
			}
			else if (arr[i] == '--discard-prev' && arr[i - 2] == '--discard-next') {
				continue;
			}
				else if(arr[i] == '--discard-prev') {
					newArr.pop();
					continue;
			}
// [----------------------------------------------------------]
else {
				newArr.push(arr[i]);
				continue;
			}

		};
		return newArr;
};
