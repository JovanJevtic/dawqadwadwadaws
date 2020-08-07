$(document).ready(function(){
  $('#next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.prev();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('#prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.next();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  });
});