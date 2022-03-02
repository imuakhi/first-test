$(document).ready(function(){
    //banner
    $('.banner-slider-all').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
    });
    //mobile screen slider
    $('.all-screen-slider').slick({
        arrows: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:"0px",
        autoplaySpeed: 2000,
        dots: true,
    });
    $('.feedback-text-slider').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        asNavFor:".all-img-slider",
    });
    $('.all-img-slider').slick({
        arrows: false,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:"0px",
        autoplaySpeed: 2000,
        dots: true,
        asNavFor:".feedback-text-slider",
    });
    new VenoBox({
        selector: '.my-video-links',
    });
});
