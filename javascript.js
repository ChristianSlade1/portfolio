$(".about").click(function() {
    $(".home-page2").fadeOut(750);
    $(".about-page").delay(1000).fadeIn(750);    
});
$(".menu").click(function() {
    $(".menu1").slideToggle();
});

$(".about").click(function() {
    $(".about-all").show();
});
$(".contact1").click(function() {
    $(".home-page2").fadeOut(750);
    $(".contact-page").delay(1000).fadeIn(750);
});
$('.home').click(function() {
    $(".contact-page").fadeOut(750);
    $(".about-page").fadeOut(750);
    $(".home-page2").delay(1000).fadeIn(750);
});
$('.home1').click(function() {
    $(".contact-page").fadeOut(750);
    $(".about-page").fadeOut(750);
    $(".home-page2").delay(1000).fadeIn(750);
});
