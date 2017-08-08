jQuery(function ($) {
    $('.menu-ico').click(function () {
        $('.responsive-menu').toggleClass('expand');
    })
})

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 0.5) {
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    }
});