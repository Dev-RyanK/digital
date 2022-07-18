let output = ''
    for (let a = 1; a<10; a++) { //i를 0부터 시작하면 한 줄 띄어쓰고 시작되어버림
        for (let b = 0; b < a; b++) {
            output += '*' //별 생성
        }
        output += '\n' //줄 생성
    }
    console.log(output)