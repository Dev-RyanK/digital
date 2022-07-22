// 이전에 반복문 부분에서 살펴보았던 다음과 같은 코드를 배열의 forEach 메소드를 사용하는 형태로 변경해주세요.

// const array = ['사과', '배', '귤', '바나나']
// console.log('# for in 반복문')
// for (const i in array){
// console.log(i)
// }

// console.log('# for of 반복문')
// for (const i of array){
// console.log(i)
// }

const array = ['사과', '배', '귤', '바나나']
console.log('# for in 반복문')
array.forEach((value, index) => {console.log(index)})
console.log('# for of 반복문')
array.forEach((value, index) => {console.log(value)})

// let array = ['사과', '배', '귤', '바나나']
// // console.log('# for in 반복문')
//   array = array.forEach(function(value, index) {
//   return index
// })
// // console.log('# for of 반복문')
//   array = array.forEach(function(value, index) {
//   return value
// }) // 왜 안 되지