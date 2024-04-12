import scrollSpy from 'simple-scrollspy';

export default function() {
  if (document.getElementsByClassName('rs-scroll-nav').length > 0) {
    scrollSpy('.rs-scroll-nav', {
      sectionClass    : '.elementor-top-section',
      menuActiveTarget: 'li > a',
      offset          : 100,
      smoothScroll    : false,
    });
  }
}