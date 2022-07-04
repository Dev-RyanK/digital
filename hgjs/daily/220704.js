let output = ''
    for (let a = 1; a<10; a++) { 
        for (let b = 5; b < a; b++) {
            output += '*' //별 생성
        }
        output += '\n' //줄 생성
    }
    console.log(output)