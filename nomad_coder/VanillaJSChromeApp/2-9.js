// it's all about data type

// const: can't update
// let: can update
// when creating variables, keyword variable = value;
const a = 5;
let b = 6;
console.log(b);
b = 10; // update the variable b
console.log(b);

// number and 'string'
// booleans: true/false, 0/1, on/off
// null: 'there is nothing'
// undefined: it exists, but has no value
// array: [0, 1, 2, ...]
const toBuy = ['potato', 'tomato', 'pizza'];
console.log(toBuy);
toBuy[2] = 'water'; // get [second] index, and then update 'pizza' with 'water'
console.log(toBuy);
toBuy.push('one'); // add 'one' in the array
console.log(toBuy);