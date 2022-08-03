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