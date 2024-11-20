$(function () {
   

  var visual = new Swiper(".main-visual-swiper", {
    slidesPerView: "3",
spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".main-button-next",
        prevEl: ".main-button-prev",
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });


    var archive = new Swiper(".archive-swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });

    var program = new Swiper(".program-swiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      navigation: {
        nextEl: ".program-button-next",
        prevEl: ".program-button-prev",
      },
    });

    var inner = new Swiper(".inner-swiper", {
      slidesPerView: "3",
  spaceBetween: 30,
        effect: "fade",
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });

      // program과 inner 슬라이더 연동 제어
      program.controller.control = inner;
      inner.controller.control = program;
  
  })
  