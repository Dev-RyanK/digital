// 1. 다음 과정에 따라 최대값을 찾는 max()함수를 만들어보세요.
// - 매개변수로 max([1, 2, 3, 4])와 같은 배열을 받는 max()함수를 만들어보세요.
// - hint) 본문의 min() 함수를 응용하세요.

function max(array) {
    let output = array[0] // 첫번째 index
//of는 요소 in은 index에 for는 for. 값이 아니라 순서(인덱스)! in이 index 라고 생각, 속성, 더 자세한 값
    for (const item of array) {
        // 현재 output보다 더 큰 item이 있다면
        if (output < item) {
        // output 값을 item으로 변경
        output = item
        }  
    }
    return output
}

const testArray = [1, 2, 3, 4]
console.log(`${testArray} 중에서`)
console.log(`최대값 = ${max(testArray)}`)