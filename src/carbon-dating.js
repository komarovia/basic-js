const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(sampleActivity === undefined || sampleActivity !== 'string') {
    return false;
  }
  else {const k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil( (Math.log(MODERN_ACTIVITY / +sampleActivity)) / k );
  return t};
  };

