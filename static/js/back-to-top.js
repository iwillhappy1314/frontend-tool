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
/*!***********************************************!*\
  !*** ./assets/scripts/modules/back-to-top.js ***!
  \***********************************************/
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
jQuery(document).ready(function ($) {
  function goToTop() {
    var $goToTopEl = $('.rs-back-to-top'),
        elementScrollSpeed = $goToTopEl.attr('data-speed'),
        elementScrollEasing = $goToTopEl.attr('data-easing');

    if (!elementScrollSpeed) {
      elementScrollSpeed = 700;
    }

    if (!elementScrollEasing) {
      elementScrollEasing = 'easeOutQuad';
    }

    $goToTopEl.click(function () {
      $('body,html').stop(true).animate({
        'scrollTop': 0
      }, Number(elementScrollSpeed), elementScrollEasing);
      return false;
    });
  }

  function goToTopScroll() {
    var $goToTopEl = $('.rs-back-to-top'),
        elementMobile = $goToTopEl.attr('data-mobile'),
        elementOffset = $goToTopEl.attr('data-offset');

    if (!elementOffset) {
      elementOffset = 250;
    }

    if (elementMobile !== 'true') {
      return true;
    }

    if ($(window).scrollTop() > Number(elementOffset)) {
      $goToTopEl.fadeIn();
    } else {
      $goToTopEl.fadeOut();
    }

    console.log($(window).scrollTop());
    console.log(Number(elementOffset));
  }

  goToTop();
  window.addEventListener('scroll', function () {
    goToTopScroll();
  });
});
})();

/******/ })()
;
//# sourceMappingURL=back-to-top.js.map