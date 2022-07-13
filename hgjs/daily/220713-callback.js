// filter 함수의 콜백 함수 부분을 채워서 1)홀수만 추출, 2) 100이하의 수만 추출, 3) 5로 나눈 나머지가 0인 수만 추출해주세요. 그리고 코드의 실행 결과를 적어보세요.

// // 변수 선언
// let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76]

// // 처리
// let oddNumbers = numbers.filter(function(value) {
//     return value % 2 === 1
// })
// oddNumbers = numbers.map(function(value, index, array) {
//     return value <= 100
// })
// oddNumbers = numbers.filter(function(value){
//     return value % 5 === 0
// })

// // 출력
// console.log(`${oddNumbers}`)

// 변수 선언
let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76]

// 처리
// function을 생략하고 return 자리에 화살표를 쓴다
numbers = numbers
    .filter((value) => value % 2 === 1)
    .filter((value) => value <= 100)
    .filter((value) => value % 5 === 0)
// 출력
console.log(numbers)