// 모질라 문서에서 Math 객체와 관련된 내용을 읽고 사인 90도 값을 구해보세요. 참고로 사인 90도는 1입니다. 아주 단순하게 생각해서 구연하면 0.89399663…라는 결과가 나옵니다. 0.89399666…가 나왔다면 왜 그런지, 그리고 이를 어떻게 해야 제대로 사용할 수 있는지 구글 검색 등을 활용해서 알아보고 코드를 수정하세요.
const degree = Math.sin(90 * Math.PI/180)
console.log(degree)

// Math.Sin() 험수는 한 각에 대한 sin값을 반환한다. sin값은 직각삼각형에서 대변(세로)의 길이를 사변(기울어진 모서리)으로 나뉜 것을 의미. Math.sin() 메소드는 라디안으로 주어진 각도의 사인 값인 -1과 1 사이의 수를 반환. 그래서 라디안으로 변환을 해줘야 됨.
// 라디안 Radian, 호도弧度: 각도 단위. https://m.blog.naver.com/biomath2k/221867576248
// 라디안 변환법 https://en.wikipedia.org/wiki/Radian#Conversion_between_radians_and_degrees