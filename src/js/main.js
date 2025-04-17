import Swiper from 'swiper';
import { Navigation, Scrollbar, } from 'swiper/modules';
import { UseBurger } from './components/burger.js';

UseBurger();

// Slider(trainers__slider)
new Swiper('.trainers__slider', {
  modules: [Navigation, Scrollbar],
  navigation: {
    prevEl: '.trainers__slider-prev',
    nextEl: '.trainers__slider-next'
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    381: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1201: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1441: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }
  // loop: true,
});