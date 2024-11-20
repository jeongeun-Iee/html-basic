const main = new Swiper(".main.swiper.mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
  on: {
    activeIndexChange: () => {
      const active = document.querySelector('.main .swiper-slide-active');
    }
  }
});

const best = new Swiper(".best.swiper.mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  pagination: {
    el: ".best.swiper-pagination",
    clickable: true,
  },
});

const review = new Swiper(".review.swiper.mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 2.65,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
  pagination: {
    el: ".review.swiper-pagination",
    clickable: true,
  },
});

const Header = document.querySelector("#Header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    Header.classList.add("on");
  } else {
    Header.classList.remove("on");
  }
});

document.querySelector('.shopping_icon').addEventListener('click', ()=> {
  alert('로그인 후 관심상품 등록이 가능합니다.')
});