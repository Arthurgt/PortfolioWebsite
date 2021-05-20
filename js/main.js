let typed = new Typed(".typing", {
    strings: ["Technology Lover", "Developer", "Team Player", "Ambitious Person"],
    typeSpeed: 90,
    backSpeed: 30,
    loop: true
});

$(document).ready(function () {


    let $btns = $('.projects .button-group button');


    $btns.click(function (e) {

        $('.projects .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.projects .row').isotope({
            filter: selector
        });

        return false;
    })

    $('.projects .button-group #btn1').trigger('click');

    $('.projects .row .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    let nav_offset_top = $('.navbar').height() + 50;

    function navbarFixed() {
        if ($('.navbar').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.navbar').addClass('navbar_fixed');
                } else {
                    $('.navbar').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();
});