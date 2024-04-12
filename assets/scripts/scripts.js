'use strict';
//import CommonCarouselClass from './modules/swiper/commen';
//import SectionCarouselClass from './modules/swiper/section';
import WenpriseScrollSpy from './modules/scrollspy';
import WenpriseAnimate from './modules/animate';
import WenpriseWow from './modules/wow';

require('script-loader!../../node_modules/jquery-waypoints/waypoints');

/**
 * 初始化Swiper
 */
jQuery(window).on('elementor/frontend/init', () => {
  //const addWidgetHandler = ($element) => {
  //  elementorFrontend.elementsHandler.addHandler(CommonCarouselClass, {
  //    $element,
  //  });
  //};

  //const addSectionHandler = ($element) => {
  //  elementorFrontend.elementsHandler.addHandler(SectionCarouselClass, {
  //    $element,
  //  });
  //};

  //elementorFrontend.hooks.addAction('frontend/element_ready/rsea-slider.default', addWidgetHandler);
  //elementorFrontend.hooks.addAction('frontend/element_ready/rsea-testimonial.default', addWidgetHandler);
  //elementorFrontend.hooks.addAction('frontend/element_ready/rsea-posts-loop.default', addWidgetHandler);
  //elementorFrontend.hooks.addAction('frontend/element_ready/section', addSectionHandler);
});

(function($) {

  $(document).ready(function() {
    new WenpriseAnimate();
    new WenpriseWow();
  });

  window.onload = function() {
    new WenpriseScrollSpy();
  };

  //window.onscroll = function() {
  //  wenpriseElementor.navSticky();
  //};

})(jQuery);