function scrollAppearLanding() {

    var txt1 = document.querySelector('.animated-landing-txt1')
    txt1.classList.add('animated-landing-txt1-fade');

    var txt2 = document.querySelector('.animated-landing-txt2')
    txt2.classList.add('animated-landing-txt2-fade');

    var txt3 = document.querySelector('.animated-landing-txt3')
    txt3.classList.add('animated-landing-txt3-fade');

}

setTimeout(scrollAppearLanding, 1000);

//////////////////////////

function scrollAppear() {
    var screenPosition = window.innerHeight;

    var serviceImg1 = document.querySelector('.animated-service-img1');
    var serviceImg1Position = serviceImg1.getBoundingClientRect().top;

    var serviceImg2 = document.querySelector('.animated-service-img2');
    var serviceImg2Position = serviceImg2.getBoundingClientRect().top;

    var serviceImg3 = document.querySelector('.animated-service-img3');
    var serviceImg3Position = serviceImg1.getBoundingClientRect().top;

    if (serviceImg1Position < screenPosition) {
        serviceImg1.classList.add('animated-service-img1-fade');
    }

    if (serviceImg2Position < screenPosition) {
        serviceImg2.classList.add('animated-service-img2-fade');
    }

    if (serviceImg3Position < screenPosition) {
        serviceImg3.classList.add('animated-service-img3-fade');
    }

    var serviceTxt1 = document.querySelector('.animated-service-txt1');
    var serviceTxt1Position = serviceTxt1.getBoundingClientRect().bottom;

    var serviceTxt2 = document.querySelector('.animated-service-txt2');
    var serviceTxt2Position = serviceTxt2.getBoundingClientRect().bottom;

    var serviceTxt3 = document.querySelector('.animated-service-txt3');
    var serviceTxt3Position = serviceTxt3.getBoundingClientRect().bottom;

    if (serviceTxt1Position < screenPosition) {
        serviceTxt1.classList.add('animated-service-txt1-fade');
    }

    if (serviceTxt2Position < screenPosition) {
        serviceTxt2.classList.add('animated-service-txt2-fade');
    }

    if (serviceTxt3Position < screenPosition) {
        serviceTxt3.classList.add('animated-service-txt3-fade');
    }
    /*
    var aboutImg1 = document.querySelector('.animated-about-img1');
    var aboutImg1Position = aboutImg1.getBoundingClientRect().top;

    var aboutImg2 = document.querySelector('.animated-about-img2');
    var aboutImg2Position = aboutImg2.getBoundingClientRect().top;

    if (aboutImg1Position < screenPosition) {
        aboutImg1.classList.add('animated-about-img1-fade');
    }

    if (aboutImg2Position < screenPosition) {
        aboutImg2.classList.add('animated-about-img2-fade');
    }

    var aboutHeading1 = document.querySelector('.animated-about-heading1');
    var aboutHeading1Position = aboutHeading1.getBoundingClientRect().bottom;

    var aboutHeading2 = document.querySelector('.animated-about-heading2');
    var aboutHeading2Position = aboutHeading2.getBoundingClientRect().bottom;

    if (aboutHeading1Position< screenPosition) {
        aboutHeading1.classList.add('animated-about-heading1-fade');
    }

    if (aboutHeading2Position< screenPosition) {
        aboutHeading2.classList.add('animated-about-heading2-fade');
    }

    var aboutTxt1 = document.querySelector('.animated-about-txt1');
    var aboutTxt1Position = aboutTxt1.getBoundingClientRect().bottom;

    var aboutTxt2 = document.querySelector('.animated-about-txt2');
    var aboutTxt2Position = aboutTxt2.getBoundingClientRect().bottom;

    if (aboutTxt1Position< screenPosition) {
        aboutTxt1.classList.add('animated-about-txt1-fade');
    }

    if (aboutTxt2Position< screenPosition) {
        aboutTxt2.classList.add('animated-about-txt2-fade');
    }
    */

    let specialTxt1 = document.querySelector('.animated-special-txt1');
    let specialTxt1Position = specialTxt1.getBoundingClientRect().bottom;

    if (specialTxt1Position< screenPosition) {
        specialTxt1.classList.add('animated-special-txt1-fade');
    }

    let specialCard1 = document.querySelector('.animated-special-card1');
    let specialCard1Position = specialCard1.getBoundingClientRect().top;

    if (specialCard1Position< screenPosition) {
        specialCard1.classList.add('animated-special-card1-fade');
    }

    let specialCard2 = document.querySelector('.animated-special-card2');
    let specialCard2Position = specialCard2.getBoundingClientRect().top;

    if (specialCard2Position< screenPosition) {
        specialCard2.classList.add('animated-special-card2-fade');
    }


    let specialCard3 = document.querySelector('.animated-special-card3');
    let specialCard3Position = specialCard1.getBoundingClientRect().top;

    if (specialCard3Position< screenPosition) {
        specialCard3.classList.add('animated-special-card3-fade');
    }

    let specialTxt2 = document.querySelector('.animated-special2-txt1');
    let specialTxt2Position = specialTxt2.getBoundingClientRect().bottom;

    if (specialTxt2Position< screenPosition) {
        specialTxt2.classList.add('animated-special2-txt1-fade');
    }

    let special2Card1 = document.querySelector('.animated-special2-card1');
    let special2Card1Position = special2Card1.getBoundingClientRect().top;

    if (special2Card1Position< screenPosition) {
        special2Card1.classList.add('animated-special2-card1-fade');
    }

    let special2Card2 = document.querySelector('.animated-special2-card2');
    let special2Card2Position = special2Card2.getBoundingClientRect().top;

    if (special2Card2Position< screenPosition) {
        special2Card2.classList.add('animated-special2-card2-fade');
    }


    let special2Card3 = document.querySelector('.animated-special2-card3');
    let special2Card3Position = special2Card1.getBoundingClientRect().top;

    if (special2Card3Position< screenPosition) {
        special2Card3.classList.add('animated-special2-card3-fade');
    }

    let specialHeading = document.querySelector('.services-txt-heading');
    let specialHeadingPosition = specialHeading.getBoundingClientRect().top;;

    if (specialHeadingPosition< screenPosition) {
        specialHeading.classList.add('service-txt-heading-fade');
    }


    let contactTxt2 = document.querySelector('.animated-footer-txt2');
    let contactTxt2Position = contactTxt2.getBoundingClientRect().top;

    if (contactTxt2Position< screenPosition) {
        contactTxt2.classList.add('animated-footer-txt2-fade');
    }

    let contactTxt3 = document.querySelector('.animated-footer-txt3');
    let contactTxt3Position = contactTxt3.getBoundingClientRect().top;

    if (contactTxt3Position< screenPosition) {
        contactTxt3.classList.add('animated-footer-txt3-fade');
    }

    let contactTxt4 = document.querySelector('.animated-footer-txt4');
    let contactTxt4Position = contactTxt4.getBoundingClientRect().top;

    if (contactTxt4Position< screenPosition) {
        contactTxt4.classList.add('animated-footer-txt4-fade');
    }

    let contactTxt5 = document.querySelector('.animated-footer-txt5');
    let contactTxt5Position = contactTxt5.getBoundingClientRect().top;

    if (contactTxt5Position< screenPosition) {
        contactTxt5.classList.add('animated-footer-txt5-fade');
    }

    let contactTxt6 = document.querySelector('.animated-footer-txt6');
    let contactTxt6Position = contactTxt4.getBoundingClientRect().top;

    if (contactTxt6Position< screenPosition) {
        contactTxt6.classList.add('animated-footer-txt6-fade');
    }

    let contactTxt7 = document.querySelector('.animated-footer-txt7');
    let contactTxt7Position = contactTxt7.getBoundingClientRect().top;

    if (contactTxt7Position< screenPosition) {
        contactTxt7.classList.add('animated-footer-txt7-fade');
    }

    let contactTxt8 = document.querySelector('.animated-footer-txt8');
    let contactTxt8Position = contactTxt8.getBoundingClientRect().top;

    if (contactTxt8Position< screenPosition) {
        contactTxt8.classList.add('animated-footer-txt8-fade');
    }

    let map = document.querySelector('.animated-map');
    let mapPosition = map.getBoundingClientRect().top;

    if (mapPosition < screenPosition) {
        map.classList.add('animated-map-fade');
    }

}

window.addEventListener( 'scroll', scrollAppear );