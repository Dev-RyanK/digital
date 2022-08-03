 // if, else

const age = prompt('How old are you?');
console.log(age);
console.log(typeof '15', typeof parseInt('15')); // string, number
console.log(age, parseInt(age));
const age = parseInt(prompt('How old are you?'));

// prompt takes message string and default string
// prompt doesn't take CSS. very old function. not using this anymore
// parseInt() --> changes string into number. cannot process strings
// console.log(typeof variable) --> shows the type of the variable