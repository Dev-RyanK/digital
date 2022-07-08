// 익명함수 생김새 function () {}
// 선언적 함수 생김새 function 이름 () {}

// A부터 B까지 범위를 지정했을 때 범위 안의 숫자를 모두 곱하는 함수를 만들어 보세요. (hint) 분문의 sumAll() 함수를 응용하세요. 초기값을 무엇으로 해야할지 생각해보세요.

// function sumAll(a,b) {
//     let output = 0
//     for (let i = a; i <= b; i++) {
//         output += i
//     }
//     return output
// }

// console.log(`1부터 100까지의 합: ${sumAll(1, 100)}`)

function multiplyALL(a,b) {
    let output = 1
    for (let i = a; i <=b; i++) {
        output *= i
    }
    return output
}

console.log(multiplyALL(1,20))
console.log(multiplyALL(1,30))