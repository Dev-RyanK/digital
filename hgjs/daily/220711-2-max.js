const max = function (first, ...rests) {
    //변수 선언
    let output
    let items
    
    //매개변수의 자료형에 따라 조건 분기
    if (Array.isArray(first)) { //어쩐 자료가 배열인지 확인함. Array.isArray는 메소드. 일반적인 typeof 연산자로는 배열을 확인할 수 없다.
        output = first[0]
        items = first
    } else if (typeof(first) === 'number') {
        output = first
        items = rests
    }

    //최대값 구하는 공식
    for (const item of items) {
        if (output < item) {
            output = item
        }
    }
    return output
}

console.log(`max(배열): ${max([1, 2, 3, 4])}`)
console.log(`max(숫자, ...): ${max(1, 2, 3, 4)}`)