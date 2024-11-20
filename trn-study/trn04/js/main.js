window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        console.log(sct)
        sct > 0
        ? document.querySelector('#Header').classList.add('on')
        : document.querySelector('#Header').classList.remove('on');
    });

    const MainSlider = new Swiper('.MainSlider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable : true,
          },
      });


    const SCE_ELE = document.querySelectorAll('.active-event');
    window.addEventListener('scroll', ()=> {
        let sct = window.scrollY;
        SCE_ELE.forEach(el => {
            sct > el.offsetTop - 300
            ? el.classList.add('on')
            : el.classList.remove('on')
        })
    });


})