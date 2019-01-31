$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var currentHeight = document.getElementById('header').offsetHeight;
        
        if (scroll >= currentHeight - 92){
            $('section.navigation').addClass('fixed');
        } else {
            $('section.navigation').removeClass('fixed');
        }
    });
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});