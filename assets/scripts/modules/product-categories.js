(function($) {
  'use strict';
  $(window).on('elementor/frontend/init', () => {
    elementorFrontend.hooks.addAction('frontend/element_ready/digitaz-product-categories.default', ($scope) => {
      const asyncSwiper = elementorFrontend.utils.swiper;
      let carousel = $('.digitaz-carousel', $scope);

      let data = carousel.data('settings'),
          rtl  = $('body').hasClass('rtl');

      console.log(data);

      let swiperConfig = {
        slidesPerView: parseInt(data.items),
        spaceBetween : 24,
        speed        : 300,
        autoplay     : data.autoplay,
        navigation   : {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination   : {
          el: '.swiper-pagination',
        },
        loop         : data.loop,
        breakpoints  : {
          640 : {
            slidesPerView: parseInt(data.items_mobile),
            spaceBetween : 16,
          },
          768 : {
            slidesPerView: parseInt(data.items_tablet),
            spaceBetween : 24,
          },
          1024: {
            slidesPerView: parseInt(data.items_laptop),
            spaceBetween : 24,
          },
        },
      };

      new asyncSwiper(carousel, swiperConfig).then((newSwiperInstance) => {
        console.log('New Swiper instance is ready: ', newSwiperInstance);
      });

    });
  });
})(jQuery);


