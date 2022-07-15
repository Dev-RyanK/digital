# 막혔던 부분
// with masonry
new Masonry("#posts .grid", { 
  itemSelector : '.grid-item',
  gutter : 20
});
--> #posts.grid 아니고 #posts .grid !! (띄어쓰기) id가 posts인 아래에 들어가 있는 class grid 라는 뜻!

  .grid .grid-item {
    width: calc(100% - 20px); /*for making 2 columns*/
  }
--> calc 안에서 수식(빼기, -)과 값(20px)은 띄어쓴다

- 뭔가 안 돌아가면 class명 제대로 썼는지, 태그 잘 닫혔는지 확인

# 해야될 부분
- 초안 디자인 목업?
- 메뉴 구성 및 메뉴명 바꾸기
- progress bar(잔디) 삽입
- progress bar 일정 너비 이하에서 사라지게 하기
- 이미지 대신 텍스트 미리보기 (300자?) 나오게
- 튜토리얼 비디오에서 배운 것들 정리
- 컬러코드 바꾸기(link:hover)
- ppt, 타임랩스 만들기
- 7일치 글 슬라이더에 삽입
- 결과보고서 쓰기

# 쓸 거
- 띄어쓰기 하나, 세미콜론 하나에 구동이 되고 안 되고가 달라져서 어려웠음
- 뿌듯했음
- 

# 배운 점
- php, MySQL 개념, 장단점 (쉽다 vs 보안성 떨어짐, 처음부터 구성해야됨)
- 