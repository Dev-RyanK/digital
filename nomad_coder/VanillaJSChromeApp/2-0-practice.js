const crown = ['ksw', 'kmk'];

console.log(crown);
crown.push('pcy'); // push는 method임. 객체의 속성인 function이므로 ()를 쓴다.
crown.prpt = 'hotel'; // 여기서 .은 property를 추가함.
console.log(crown); // [ 'ksw', 'kmk', 'pcy', prpt: 'hotel' ]
crown[3] = 'lht';
crown[0] = '사장님';
console.log(crown); // 0번째 인덱스인 'ksw'를 '사장님'으로 바꾸고 property를 제외한 네 번째에 'lht'를 추가함

const cal = {
  add: function(a, b){
    console.log(a + b)
  }
}

cal.add(2, 5);
console.log(cal);