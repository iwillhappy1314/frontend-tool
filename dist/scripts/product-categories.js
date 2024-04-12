/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************************!*\
  !*** ./assets/scripts/modules/product-categories.js ***!
  \******************************************************/
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
(function ($) {
  'use strict';

  $(window).on('elementor/frontend/init', function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/digitaz-product-categories.default', function ($scope) {
      var asyncSwiper = elementorFrontend.utils.swiper;
      var carousel = $('.digitaz-carousel', $scope);
      var data = carousel.data('settings'),
        rtl = $('body').hasClass('rtl');
      console.log(data);
      var swiperConfig = {
        slidesPerView: parseInt(data.items),
        spaceBetween: 24,
        speed: 300,
        autoplay: data.autoplay,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        },
        loop: data.loop,
        breakpoints: {
          640: {
            slidesPerView: parseInt(data.items_mobile),
            spaceBetween: 16
          },
          768: {
            slidesPerView: parseInt(data.items_tablet),
            spaceBetween: 24
          },
          1024: {
            slidesPerView: parseInt(data.items_laptop),
            spaceBetween: 24
          }
        }
      };
      new asyncSwiper(carousel, swiperConfig).then(function (newSwiperInstance) {
        console.log('New Swiper instance is ready: ', newSwiperInstance);
      });
    });
  });
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=product-categories.js.map