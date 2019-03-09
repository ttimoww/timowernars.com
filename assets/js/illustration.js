/**
 * Set the height of the illustration based on width (Ratio: 1:1.603)
 * Trigger: Window resize
 */
$(window).resize(function () { 
    let illustrationWidth = $('.illustration').width();
    $('.illustration').height(illustrationWidth * 1.6);
});

/**
 * Set the height of the illustration based on width (Ratio: 1:1.603)
 * Trigger: Document ready
 */
$(document).ready(function () {
    let illustrationWidth = $('.illustration').width();
    $('.illustration').height(illustrationWidth * 1.6);
});

/**
 * Listener on mouse move that moves the eyes
 */
$('body').mousemove(function(event) {
    var eye = $(".illustration__face__eye");
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });