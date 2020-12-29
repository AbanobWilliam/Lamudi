$(document).ready(function(){
    $('a.mobile-button').click(function(e){
        e.preventDefault();
        $(this).toggleClass('opened');
        $('.menus').slideToggle();
    });
});
$('.colleages-carousel').owlCarousel({
    loop:true,
    margin: 80,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots: false,
        },
        600:{
            items:2,
            nav:true,
            dots: false,
        },
        1000:{
            items:3,
            nav:true,
            dots: false,
        }
    }
});