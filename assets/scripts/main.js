'use strict';

var loadjs = require('loadjs');

import footerNav from './components/footer-nav';
import stickyNav from './components/sticky';
import RevealHeader from './components/reveal-header';
import menuToggle from './components/off-canvas-menu';

const dropdownEl = document.querySelectorAll('.rs-dropdown-toggle');
const popoverEl = document.querySelectorAll('.rs-popover');
const toolTipEL = $('[data-tippy-content]');
const youtubeEl = document.querySelectorAll('.rs-lazyYT');
const navTreeEl = $('.widget_nav_menu, .widget_product_categories, .widget-nav_menu');
const sidebarEL = $('.rs-sticky-left, .rs-sticky-right');
const popupEL = $('.rs-popup-image,.rs-popup-gallery,.rs-popup-video');
const isotopeEL = $('.rs-isotope__filter');
const meanMenuEL = $('.rs-mean-menu');
const accordionEL = $('.rs-accordion-container');
const swiperEL = $('.rs-swiper');
const wowEL = $('.wow');
const scrollSpyEL = $('.rs-scroll-nav');
const splideEL = document.querySelectorAll('.splide');

if (dropdownEl.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/dropdown.js'], 'dropdown');
}

if (popoverEl.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/popover.js'], 'popover');
}

if (toolTipEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/tooltip.js'], 'tooltip');
}

if (wowEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/wow.js'], 'wow');
}

if (youtubeEl.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/lazy-youtube.js'], 'lazy-youtube');
}

if (navTreeEl.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/nav-tree.js'], 'nav-tree');
}

if (sidebarEL.length > 0 && $(document).width() > 1024) {
    loadjs([wenpriseSettings.staticPath + 'js/sticky-sidebar.js'], 'sticky-sidebar');
}

if (popupEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/magnific-popup.js'], 'magnific-popup');
}

if (isotopeEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/isotope.js'], 'isotope');
}

if (accordionEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/accordion.js'], 'accordion');
}

if (meanMenuEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/meanmenu.js'], 'meanmenu');
}

if (swiperEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'css/swiper.css', wenpriseSettings.staticPath + 'js/swiper.js'], 'swiper');
}

if (wowEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/wow.js'], 'wow');
}

if (scrollSpyEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/scrollspy.js'], 'scrollspy');
}

if (splideEL.length > 0) {
    loadjs([wenpriseSettings.staticPath + 'js/splide.js'], 'splide');
}

footerNav();
stickyNav();
RevealHeader();
menuToggle();