$(function () {
    $("#utb").YTPlayer({
      videoURL: "https://youtu.be/irn6NVUDK-A",
      containment: ".Header",
      autoPlay: true,
      showControls: false,
      mute: true,
    });
  
    $(".project_slider").slick({
      dots: true,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      speed: 1500,
      autoplay: true,
      pauseOnHover: false,
    });
  
    $(".news_slider").slick({
      dots: true,
      prevArrow: $(".prevArrow"),
      nextArrow: $(".nextArrow"),
      autoplay: true,
      pauseOnHover: false,
      slidesToShow: 3,
      slidesToScroll: 3,
    });
  
  });
  