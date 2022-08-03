const age = parseInt(prompt('how old are you?'));
if(isNaN(age)) {
  console.log('please give specific number');
} else if(age < 18) {
  console.log('you are too young to drink');
} else if(50 < age) {
  console.log('you may want to stop drinking');
} else {
  console.log('thank you for writing your age.')
};

if(isNaN(age) || age <0) {
  console.log('please write positive number');
} else if(age >= 18 && age <= 50) {
  console.log('you can drink');
} else if(age > 50 && age <= 80) {
  console.log('you should excercise')
} else if(age > 80) {
  console.log('you can do whatever you want')
}