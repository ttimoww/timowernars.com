$(window).ready(function(){


  $(window).scroll(function(){
    animateHeader();
  });

});

const animateHeader = function(){
  let scrolled = $(window).scrollTop();
  let windowHeight = $(window).height();

  if(scrolled === 0){
    $('#landing-background').css('width', '50%');
    $('#landing-image').css('left', '50%');
    $('#landing-text').css('opacity', '0');
    $('#landing-scroll-down').css('opacity', '1');
  }else{
    $('#landing-background').css('width', '0');
    $('#landing-image').css('left', '100%');
    $('#landing-text').css('opacity', '1');
    $('#landing-scroll-down').css('opacity', '0');
  }
}
