const stickbars = new Swiper(".stickbars-swiper", {
  slidesPerView: 1,
  // spaceBetween: 10,
  // allowTouchMove: false,
  centeredSlides: true,
  speed: 1000,
  loop: true,
  // loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".stickbars-next",
    prevEl: ".stickbars-prev",
    clickable: true,
  },

  breakpoints: {
    768: {
      //브라우저가 768보다 클 때
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 10,
      slidesOffsetBefore: 10,
      centeredSlides: true,
    },
  },
});

const pintBg = new Swiper(".pintBg-swiper", {
  loop: true,
  effect: "fade",
  allowTouchMove: false,
});

const pintProduct = new Swiper(".pintProduct-swiper", {
  loop: true,
  effect: "fade",
  allowTouchMove: false,
});

const pintText = new Swiper(".pintText-swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".pint-next ",
    prevEl: ".pint-prev",
    clickable: true,
  },
});

pintText.controller.control = pintProduct;
pintProduct.controller.control = pintText;
pintProduct.controller.control = pintBg;

const sns = new Swiper(".sns-swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

window.addEventListener("scroll", function () {
  const logoOffset = document.querySelector(".gnb h1");

  if (window.scrollY > 0) {
    logoOffset.classList.add("on");
  } else {
    logoOffset.classList.remove("on");
  }
});


const mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
