$(function () {

    $('.main_slider').on('init afterChange', function (e, s, c) {
        console.log(e, s, c);
        $('.slider01 .box .num').text("0" + (c ? c + 1 : 1) + " / " + "0" + s.slideCount);
        $('.slider01 .content>li').eq(c).addClass('on').siblings().removeClass('on');
    });

    $('.main_slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '250px'
    });

    $('.slider01 .slider_arrows i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    })
    $('.slider01 .slider_arrows i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    });

    $('.left_slider').slick({
        arrows: false,
        fade:true,
    });
    $('.right_slider').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.left_slider',
    });

    $('.slider02 .right i:nth-child(1)').on('click', function () {
        $('.right_slider').slick('slickPrev')
    })
    $('.slider02 .right i:nth-child(2)').on('click', function () {
        $('.right_slider').slick('slickNext')
    });



})