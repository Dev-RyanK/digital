  var Body={
    SetColor: function(color) {
      $('body').css('color',color);
      // document.querySelector('body').style.color=color;
    },
    SetBackgroundColor: function(color) {
      $('body').css('backgroundColor',color);
      // document.querySelector('body').style.backgroundColor=color;
    }
  } //JS 값은 대소문자를 구분하므로 꼭! 맞춰야 됨 setColor와 SetColor는 다른 값이다

  var Links={
    SetColor: function(color) {
      // var alist=document.querySelectorAll('a');
      // var i=0;
      // while (i<alist.length) {
      //   alist[i].style.color=color;
      //   i=i+1;
      // }
      $('a').css('color',color); //길 잃은 괄호 없는지 꼭 보자~~!!!!
    }
  }

  function nightDayHandler(self) {
    var target=document.querySelector('body');
      if(self.value === 'night') {
        Body.SetBackgroundColor('black');
        Body.SetColor('white');
        self.value='day';

        Links.SetColor('powderblue');
      } else {
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        self.value='night';

        Links.SetColor('blue');
        }
      }
