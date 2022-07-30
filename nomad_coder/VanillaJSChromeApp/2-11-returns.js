// to get data and do sth without console.log
// use function to give result *in* the code

const age = 31;
function calculateKrAge(ageOfForeigner){
  return ageOfForeigner + 2; // return: function communicates outside of it
}
const krAge = calculateKrAge(age);
console.log(krAge);

const cal = {
  plus: function(a, b){
    return a + b;
  },
  minus: function(a, b){
    return a - b;
  },
  times: function(a, b){
    return a * b;
  },
  divide: function(a, b){
    return a / b;
  },
  power: function(a, b){
    return a ** b;
  }
};

const plusResult = cal.plus(2, 3);
const minusResult = cal.minus(plusResult, 10);
const timesResult = cal.times(10, minusResult);
const divideResult = cal.divide(timesResult, plusResult);
const powerResult = cal.power(divideResult, minusResult);