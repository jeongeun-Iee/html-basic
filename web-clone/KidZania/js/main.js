$(function () {

    $('.main-visual-slider').slick({
      infinite: true,
      autoplay: true,
      arrows: true,
      draggable: true,
      dots: false,
      autoplaySpeed : 10000,  
      cssEase: 'linear',

      prevArrow : $('.visual-prevArrow'), 
      nextArrow : $('.visual-nextArrow'), 
    });

    $('.notice .container').slick({
      infinite: true,
      autoplay: true,
      arrows: true,
      draggable: true,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      pauseOnHover: true,

      prevArrow : $('.notice-prevArrow'), 
      nextArrow : $('.notice-nextArrow'), 
    });

    $('.text-box').slick({
      infinite: true,
      autoplay: false,
      arrows: false,
      draggable: true,
      dots: false,
      fade: true, 
      autoplaySpeed : 10000,  
      cssEase: 'linear',
      asNavFor: '.video-box',
    });

    $('.video-box').slick({
      infinite: true,
      autoplay: false,
      arrows: false,
      draggable: true,
      dots: true,
      fade: true, 
      autoplaySpeed : 10000,  
      cssEase: 'linear',
      asNavFor: '.text-box',
    });


    $('.card-slider').slick({
      autoplay: false,
      arrows: false,
      draggable: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
    });
  
  })
  