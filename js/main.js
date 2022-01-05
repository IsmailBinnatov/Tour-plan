$(document).ready(function () {
  
  const hotelSwiper = new Swiper('.hotel-slider', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 2000,

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
      
    autoplay: {
        delay: 5000,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

  });

  const reviewsSlider = new Swiper('.reviews-slider', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 2000,

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
      
    autoplay: {
        delay: 5000,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

  });



var menuButton = document.querySelector('.menu-button')

menuButton.addEventListener('click', function() {
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
})

var modalButton = $('[data-toggle="modal"]')
var modalButtonClose = $('.modal__close')
  modalButton.on('click', openModal)
  modalButtonClose.on('click', closeModal)

  function openModal() {
    var targetModal = $(this).attr('data-href')
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible')
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible')
  }

  function closeModal(e) {
    e.preventDefault()
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.removeClass('modal__overlay--visible')
    modalDialog.removeClass('modal__dialog--visible')
  }

  $('.form').each(function () { 
    $(this).validate({
     errorClass: 'invalid',
     messages: {
      name: "Укажите ваше Имя",
      email: {
        required: "Введите почту для связи",
        email: "Почта должна быть похоже на: name@domain.com"
      },
      phone: {
        required: 'Укажите номер для связи'
      },
     },
    });
  });
  AOS.init();
});