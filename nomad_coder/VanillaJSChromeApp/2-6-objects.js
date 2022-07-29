const playerName = 'ryan';
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = 'little bit';
// Not a good idea
// have to remember all the variables exist
// with property(name, points, fat ...) it gets too long

const player1 = ['ryan', 121212, true, 'little bit'] // not good also, cuz it doesn't tell what is for what
// player[0] == name ... can happen this way BUT...

const player = {
  name: 'ryan',
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player['name']);
player.fat = false;
player.lastName = 'kwon';
player.points = player.points + 15; // current value + added value
console.log(player);