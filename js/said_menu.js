$(document).ready(function() {
    $('.header-hamburger').on('click', function() {
        $('body').toggleClass('show-nav');
    });

    $('.nav::before').on('click', function() {
        $('body').removeClass('show-nav');
    });
});
