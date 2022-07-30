const player = {
  name: 'ryan',
  age: 31,
};

console.log(player);
player.name = 'zol';
console.log(player);
player.cool = 'soon';
console.log(player);

function plus(a, b) {
  console.log(a + b);
}

plus(5, 10);
plus(2, 3);

const calculator = {
  add: function(a, b) {
    console.log(a + b);
  },
  minus: function(a, b) {
    console.log(a - b);
  },
  divide: function(a, b) {
    console.log(a / b);
  },
  multiply: function(a, b) {
    console.log(a * b);
  },
  powerof: function(a, b) {
    console.log(a ** b);
  }
}

calculator.add(5, 2);
calculator.minus(5, 2);
calculator.divide(5, 2);
calculator.multiply(5, 2);
calculator.powerof(5, 2);