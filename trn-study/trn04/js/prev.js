window.addEventListener('DOMContentLoaded', () => {
    const H1 = document.querySelector('h1');
    const TOGGLE = function () {
        this.classList.add('on')
    }
    H1.addEventListener('click', TOGGLE)

    const ddd = new Swiper('.ddd', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          on : {
            // init: function () {
            //     console.log('swiper initalized');
            // },
            slideChangeTransitionEnd: function () {
                console.log(this.slides.length, this.realIndex);
                document.querySelectorAll('.swiper-slide').forEach(e => e.classList.remove('on'));
                let itm = document.querySelector('.swiper-slide-active');
                itm.classList.add('on');

                document.querySelector('h1 strong').innerText = `${this.realIndex + 1} / ${this.slides.length - 2}`;
            }
          }
      })


})