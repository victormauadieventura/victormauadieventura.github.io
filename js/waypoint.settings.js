//Default active on home
$('.waypoint-home').addClass("active");


/*
 Smooth scrolling
 */
$(".waypoint-home").click(function() {
    $('html, body').animate({
        scrollTop: $("html").offset().top - 92
    }, 1000);
    return false;
});

$(".waypoint-novidades").click(function() {
    $('html, body').animate({
        scrollTop: $("#novidades").offset().top - 91
    }, 1000);
    return false;
});

$(".waypoint-abusados").click(function() {
    $('html, body').animate({
        scrollTop: $("#abusados").offset().top - 91
    }, 1000);
    return false;
});

$(".waypoint-manda-nudes").click(function() {
    $('html, body').animate({
        scrollTop: $("#manda-nudes").offset().top - 91
    }, 1000);
    return false;
});

$(".waypoint-post").click(function() {
    $('html, body').animate({
        scrollTop: $("#post").offset().top - 91
    }, 1000);
    return false;
});

$(".waypoint-all-posts").click(function() {
    $('html, body').animate({
        scrollTop: $("#all-posts").offset().top - 91
    }, 1000);
    return false;
});