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