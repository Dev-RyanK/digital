// 참고 https://dasima.xyz/자바스크립트-math-random-범위-자릿수

const num = Math.random() // 0-1 사이의 난수를 생성
console.log(num)

// 최대값 지정은 *를 쓴다. 0에는 어떤 수를 곱해도 0이기 때문에 최대값인 1에 곱해지는 수를 선택
console.log(num * 10) // 0-10
console.log(num * 50) // 0-50
console.log(num * 10 - 5) // -5 <= 5
console.log(num * 50 - 25) // -25 <= 25

// Math.floor() 객체는 소숫점을 절삭. floor()는 주어진 숫자와 같거나 더 '작은' 정수 중에서 '가장 큰 값'을 반환.
console.log(Math.floor(num * 10 - 5)) // -5 <= 5
console.log(Math.floor(num * 50 - 25)) // -25 <= 25
console.log(Math.floor(2.5)) // 2를 반환
console.log(Math.floor(-2.5)) // -3을 반환

// 최소값을 0 이상으로 지정
// (Math.random() * (최대값-최소값)) + 최소값.
// (Math.random()) + 1이 아닌 이유는 양변에 모두 1을 더해 난수 생성 범위가 1~11이 되어버리기 때문.
console.log((Math.random() * (10-2)) + 2) //2-10

// 0-10 사이 정수값만 추출. 0.xxx는 모두 0으로 변환
console.log(Math.floor((Math.random() * 10)))