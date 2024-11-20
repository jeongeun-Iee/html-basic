
$(function () {

  $('.main_slider').slick({
      // dots: true,
      autoplay: true,
      pauseOnHover: false,
  });

  $('.menu_slider').slick({
      slidesToShow: 4,
      autoplay: true,
      pauseOnHover: false,
  });
  $('.follow-slider').slick({
      slidesToShow: 5,
      autoplay: true,
      pauseOnHover: false,
  });

  $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 400) {
        $('#header .container').addClass('on');
      } else {
        $('#header .container').removeClass('on');
      }
    });
  $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 400) {
        $('#header .container a').addClass('on');
      } else {
        $('#header .container a').removeClass('on');
      }
    });
  $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 400) {
        $('.contact').addClass('on');
      } else {
        $('.contact').removeClass('on');
      }
    });


})