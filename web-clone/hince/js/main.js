$(function () {

  $('.story-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    arrows: false,
    draggable: true,
    cssEase: 'linear'
  });

  $('.nail .left-box').slick({
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    arrows: false,
    draggable: true,
    cssEase: 'linear',
    asNavFor: '.nail .right-box'
  });

  $('.nail .right-box').slick({
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    arrows: true,
    draggable: true,
    cssEase: 'linear',
    asNavFor: '.nail .left-box',

    prevArrow : $('.nail-prevArrow'), 
    nextArrow : $('.nail-nextArrow'), 

  });

  $('.left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.target'
  });

  $('.mid-box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.target',

    prevArrow : $('.mid-prevArrow'), 
    nextArrow : $('.mid-nextArrow'), 
  });

  $('.right').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    asNavFor: '.target',
    focusOnSelect: true
  });



})
