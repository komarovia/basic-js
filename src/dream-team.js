const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let a = "";
	let b = "";
  if (Array.isArray(members) === true) {
	members.map(item => {
	if (typeof item	=== "string") {b = item.replace(/\s/g, ''); a = a + b.split('', 1)} else {false};
	});
	if (a === "") {return false}
	else {a = a.toUpperCase();
		a = a.split('');
	a = a.sort();
	a = a.join('');
	return a}}
  else {return false}
};
