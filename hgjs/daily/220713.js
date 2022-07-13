// forEach(): 배열이 갖고 있는 함수. 단순하게 배열 내부의 요소를 사용, 콜백함수를 호출함

const numbers = [11, 22, "냠", 44, 55]
numbers.forEach(function (value, index, array) {
    console.log(`${index}번째 요소: ${value}`)
})

// [결과]
// 0번째 요소: 11
// 1번째 요소: 22
// 2번째 요소: 냠 (...)


// map(): 콜백함수에서 리턴한 값들을 기반으로 새로운 배열을 만드는 함수

// 배열 선언
let numbers = [11, 22, "nyam", 44, 55]
// 배열의 모든 값 제곱
numbers = numbers.map(function(value, index, array) {
    return value * value
})
// 출력
numbers.forEach(console.log)

// 결과: 값value 인덱스index [배열]의 꼴
// 121 0 [ 121, 484, NaN, 1936, 3025 ]
// 484 1 [ 121, 484, NaN, 1936, 3025 ]
// NaN 2 [ 121, 484, NaN, 1936, 3025 ]
// 1936 3 [ 121, 484, NaN, 1936, 3025 ]
// 3025 4 [ 121, 484, NaN, 1936, 3025 ]


// filter(): 콜백함수에서 리턴하는 값이 트루인 것들만 모아서 새로운 배열을 만드는 함수

const numbers = [0, 1, 2, 3, 4, 5]
const evenNumbers = numbers.filter(function(value) {
    return value % 2 === 0
})

console.log(`원래 배열: ${numbers}`)
console.log(`짝수만 추출: ${evenNumbers}`)

// 결과:
// 원래 배열: 0,1,2,3,4,5
// 짝수만 추출: 0,2,4
