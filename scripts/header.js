const hamburger = document.getElementById('hamburger');
const list = document.getElementById('header-list');
const links = document.querySelectorAll('.link');
const lines = document.querySelectorAll('.line');
const header = document.getElementById('header');
const bgImg = document.getElementById('bg-img');
const gap = document.getElementById('gap');

console.log(header.classList);

window.addEventListener('scroll', () => {
    //header.classList.remove('fixed-header');

    bgImg.classList.remove('bg-img_normal');
    bgImg.classList.add('bg-img_scrolled');

    gap.classList.remove('gap_scrolled');
    gap.classList.add('gap_scrolled');
});


/*function headerFun() {
    var screenPosition = window.innerHeight;

    let header = document.getElementById('header');
    let headerPosition = header.getBoundingClientRect().top;
    let aboutPage = document.querySelector('#about-page');
    let aboutPagePosition = aboutPage.getBoundingClientRect().bottom;
    

    if (headerPosition < aboutPagePosition) {
        header.classList.add('openh');
        console.log('som')
    }
}

window.addEventListener( 'scroll', headerFun );*/



/*
$(window).on('scroll', function () {
    if ($(window).scrollTop()){
        $('#header').addClass('openh');
    } else {
        $('#header').removeClass('openh');
    }
});*/

$(window).scroll(function(){
  var sticky = $('#header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('openh');
  else sticky.removeClass('openh');
});

hamburger.addEventListener('click', () => {

    list.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });

    lines.forEach(line => {
        line.classList.toggle('color');
    });

});

document.getElementById('comment-form-wrapp').classList.add("shadowed");
document.getElementById('comment-form-wrapp').classList.add("shadowed");

/*
const input = document.querySelectorAll('.input')[0];
const input2 = document.querySelectorAll('.input')[1];

input.addEventListener('click', (ele) => {
    document.getElementById('comment-form-wrapp').classList.add("shadowed");
    console.log('dasda')
});

input2.addEventListener('click', (ele) => {
    document.getElementById('comment-form-wrapp').classList.add("shadowed");
    console.log('dasda')
});*/