let output = ''
    for (let i = 1; i<=3; i++) {
      for (let j = 1; j<=5; j++) {
        output += '*' //별 생성
      }
      output += '\n' //줄 생성
    }
    console.log(output)