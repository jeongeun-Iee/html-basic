window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".family-site");

  function handleBtnClick() {
    btn.classList.toggle("on");
  }
  btn.addEventListener("click", handleBtnClick);

  const main = new Swiper(".main", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
  });

  const card = new Swiper(".card", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".cure-next",
      prevEl: ".cure-prev",
      clickable: true,
    },
  });

  const review = new Swiper(".review", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".review-next",
      prevEl: ".review-prev",
      clickable: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  // 팝업창
  const LINK_LI = document.querySelectorAll(".ft_top .right li");
  const LINK_CON = document.querySelectorAll(".ft_top .content .link");

  LINK_LI.forEach((it, idx) => {
    it.addEventListener("click", () => {
      if (it.classList.contains("on")) {
        it.classList.remove("on");
        LINK_CON[idx].classList.remove("on");
      } else {
        LINK_LI.forEach((el) => el.classList.remove("on"));
        it.classList.add("on");
        LINK_CON.forEach((el) => el.classList.remove("on"));
        LINK_CON[idx].classList.add("on");
      }
    });
  });

  const COOKIE = document.cookie;
  if (!COOKIE) {
    document.querySelector(".popup").style.display = "block";
  }

  document.querySelector(".popup button").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
  });

  document.querySelector(".popup input").addEventListener("change", () => {
    // setCookie('name', 'popup', 1)
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = "name=popup;" + expires + ";path=/";
    document.querySelector(".popup").style.display = "none";
  });

  document.querySelector(".popup").addEventListener("wheel", (e) => {
    e.preventDefault();
  });

});

const mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
