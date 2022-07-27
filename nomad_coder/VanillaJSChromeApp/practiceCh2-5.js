// Arrays

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
const daysOfWeek1 = mon + tue + wed + thu + fri + sat + sun // a bad idea, bc/ it cannot pull out certain element of the line
console.log(daysOfWeek1) //montuewedthufrisatsun

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const nonsense = [1, 2, "hello", false, null, true, undefined, "ryan"];

console.log(daysOfWeek)
console.log(nonsense);

// get item from array
console.log(daysOfWeek[5]);

// add more item to the array
nonsense.push('JS');
console.log(nonsense);

const toBuy = ['potato', 'tomato', 'pizza'];
toBuy.push('avocado');
console.log(toBuy[2])