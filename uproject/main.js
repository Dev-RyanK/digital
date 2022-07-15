let toggle = document.querySelector ("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse")

toggle.addEventListener('click', function(){
  collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

// with masonry
new Masonry("#posts .grid", { //띄어쓰기 주의ㅠㅠ
  itemSelector : '.grid-item',
  gutter : 20
});

// swiper library initialization
new Swiper('.swiper-container', {
  direction : 'horizontal',
  loop : true,
  slidesPerView : 10,
  autoplay : {
    delay : 3000
  },
  //responsive breakpoints
  breakpoints : {
    '@0' : {
      slidesPerView : 4
    },
    // 888px
    '@1.00' : {
      slidesPerView : 5
    },
    // 1110px
    '@1.25' : {
      slidesPerView : 6
    },
    // 1330px
    '@1.50' : {
      slidesPerView : 6
    }
  }
})