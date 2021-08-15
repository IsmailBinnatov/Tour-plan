const swiper = new Swiper('.swiper-container', {

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
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

  });