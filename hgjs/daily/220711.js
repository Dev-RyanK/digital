// 최대값 구하기
// function max(...items) {
//     let output = items[0]
//     for (const item of items) {
//         if (output < item) { //item이 output보다 클 때
//             output = item //item을 갈아치운다. 더 큰 게 나오지 않을 때까지
//         }
//     }
//     return output
// }

// console.log(max(51, 12, 31, 103, 72))

function min(first, ...rests) {
    let output
    let items

    if (Array.isArray(first)) {
        output = first[0]
        items = first
    } else if (typeof first === 'number') {
        output = first
        items = rests
    }
}

for (const item of items) {
    if (output > item) {
        output = item
    }
    return output
}

console.log(`min(배열): ${min([52, 273, 32, 103, 275, 24, 57])}`)
console.log(`min(숫자): ${min(52, 273, 32, 103, 275, 24, 57)}`)

//뭔가 에러가 났는데 뭘까~