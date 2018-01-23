/* Scroll on Top
-------------------------------------- */
$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
        $('.toTop').fadeIn(500);
    } else {
        $('.toTop').fadeOut(500);
    }
});
$('.toTop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

/* Menu Responsive
-------------------------------------- */
$('#btn_toggle').click(function(event) {
    event.preventDefault();
    $('.nav_header').stop().slideToggle();
});

/* Reponsive for meta
-------------------------------------- */
$(window).resize(function() {
    if (screen.width <= 767) {
        // $('meta[name="viewport"]').attr('content', 'width=767, user-scalable=no, shrink-to-fit=no');
    } else if (screen.width <= 1280) {
        $('meta[name="viewport"]').attr('content', 'width=1280, user-scalable=no, shrink-to-fit=no');
    } else {
        // $('meta[name="viewport"]').attr('content', 'width=device-width, user-scalable=no, shrink-to-fit=no');
    }
}).resize();
