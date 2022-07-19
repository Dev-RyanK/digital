// 삼항연산자

let input = prompt("숫자를 입력하세요.")
let number = Number(input)
// Number(input) % 2 === 0 ? alert("짝수") : alert ("홀수")

// 홀짝이 아닌 경우
// Number(input) % 2 === 0 ? alert ("짝수") : Number(input) % 2 === 1 ? alert("홀수") : alert("숫자 아님")
// a ? b : (c ? d : e) 이렇게 돌아감

// 홀짝이 아닌 경우2 하는 중
// a ? (b ? c : d) : e
Number(input) % 2 === 0 ? Number(input) % 2 === 1 ? alert("홀수") : alert("짝수") : alert("숫자 아님")