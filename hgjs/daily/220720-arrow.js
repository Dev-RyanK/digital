//화살표 함수 형태

// let numbers = [9, 11, 20, 36, 55, 73, 88, 107, 165, 222]

// numbers = numbers
//   .filter((i) => i % 2 === 1 && i <= 100 && i % 5 === 0)
// console.log(numbers)
// 결과: [55]

// function 형태
let numbers = [9, 11, 20, 36, 55, 73, 88, 107, 165, 222]
  numbers = numbers.filter(function(value) {
  return value % 2 === 1
}) // [9, 11, 55, 73, 107, 165]
  numbers = numbers.filter(function(value, index, array) {
  return value < 100
}) // [9, 11, 55, 73]
  numbers = numbers.filter(function(value) {
  return value % 5 === 0
}) // [55]

console.log(numbers)