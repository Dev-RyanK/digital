// function(): 반복해서 사용할 수 있는 코드 조각. 코드를 캡슐화, 여러 번 실행하게 해 줌
// keyword name (parameter) {body}

function sayHello(nameOfPerson, age){
  //whatever i write here plays with sayHello
  console.log('Hello my name is ' + nameOfPerson + ' and I am ' + age);
}
sayHello('ryan', 10);
sayHello('mimac', 23);
sayHello('zol', 22);
// 각 이름 출력

function plus(firstNum, secondNum){
  console.log(firstNum + secondNum);
}

function divide(a, b){
  console.log(a / b);
}
plus(8, 60);
divide(98, 20);
// console.log()는 {} 안에서만 유효하다. plus()와 divide()의 () 안의 값은 각각의 function 안에서만 존재하기 때문. 

const player = {
  name: 'ryan',
  sayHello: function(otherPersonsName){
    console.log('hello ' + otherPersonsName + ' nice to meet you');
  }
}

console.log(player.name);
player.sayHello('zzpre'); // sayHello에 할당된 otherPersonsName에 값을 넣는다
player.sayHello('ryan');