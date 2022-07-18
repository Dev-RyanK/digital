// 삼항연산자

let input = prompt("number")
let number = Number(input)
Number(input) % 2 === 0 ? alert("짝수") : alert ("홀수")

// 홀짝이 아닌 경우에는 어떻게?? (푸는 중)
Number(input) % 2 === 0 ? alert ("짝수") ? Number(input) % 2 === 1 : alert("홀수") : alert("숫자 아님")
