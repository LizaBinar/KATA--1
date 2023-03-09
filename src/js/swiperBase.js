import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';


export const initMobileSwiper = function (swiperClass, paginationClass) {
  const swiper = new Swiper(swiperClass, {

    modules: [Navigation, Pagination],
    slidesPerView: 1.25,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: paginationClass,
      clickable: true
    },
    breakpoints: {
      360: {
        slidesPerView: 1.25,
      },
      400: {
        slidesPerView: 1.6,
      },
      460: {
        slidesPerView: 1.8,
      },
      520: {
        slidesPerView: 2.1,
      },
      600: {
        slidesPerView: 2.4,
      },
      680: {
        slidesPerView: 2.6,
      }
    }
  });

  if (document.documentElement.clientWidth >= 768) {
    swiper.destroy()
  }
};

initMobileSwiper(".repairsSwiper", ".repairs__pagination")
initMobileSwiper(".servicesSwiper", ".services__pagination")
initMobileSwiper(".pricesSwiper", ".prices__pagination")
