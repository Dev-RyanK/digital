let output = ''
    for (let a = 1; a<=5; a++) { 
        for (let b = 1; b<=5; b++) {
            output += '*' //별 생성
        }
        output += '\n' //줄 생성
    }
    console.log(output)

let output = ''
    for (let a = 1; a<=5; a++) {
        for (let b = 6; b>a; b--) {
            output += '*'
        }
        output += '\n'
    }
    console.log(output)

let output = ''
    for (let a = 1; a<=5; a++) {
        for (let b = 1; b<=a; b++) {
            output += '*'
        }
        output += '\n'
    }
    console.log(output)