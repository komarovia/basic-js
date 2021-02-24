const CustomError = require("../extensions/custom-error");

const chainMaker = {
	arr: [],
  getLength() {
  return this.arr.length;
	},
  addLink(value) {
	this.arr.push(`( ${value} )`);
	return this;
  },
  removeLink(position) {
		if (position < 0 || position > this.arr.length) {
			this._delChain();
			throw new Error();
		}
	else {this.arr.splice(position - 1, 1);
	return this;}
},
  reverseChain() {
this.arr.reverse();
	return this;
},
finishChain() {
	const finChain = this._returnChain();
	this._delChain();
	return finChain;
},
_delChain() {
	this.arr.length = 0;
},
_returnChain() {
	return this.arr.join('~~');
},
};

module.exports = chainMaker;
