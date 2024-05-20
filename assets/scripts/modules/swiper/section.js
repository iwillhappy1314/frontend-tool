export default class WenpriseISectionCarouselClass extends elementorModules.frontend.handlers.SwiperBase {
  getDefaultSettings() {
    return {
      selectors : {
        container      : '.wprs-section-carousel',
        swiperContainer: '.elementor-container',
        slide          : '.elementor-top-column',
      },
      attributes: {
        dataSliderOptions: 'swiper-options',
        dataAutoplayHover: 'autoplay-hover',
      },
    };
  }

  getDefaultElements() {
    const selectors = this.getSettings('selectors');

    const elements = {
      $swiperContainer: this.$element.find(selectors.container),
    };

    elements.$slides = this.$element.find(selectors.slide);

    return elements;
  }

  initSlider() {
    const $slider        = this.elements.$swiperContainer,
          settings       = this.getSettings(),
          pause_on_hover = $slider.data(settings.attributes.dataAutoplayHover);

    if (!$slider.length) {
      return;
    }

    /**
     * Add buttons and pagination
     */
    $slider.append('<div class="swiper-pagination"></div>');
    $slider.append('<div class="elementor-swiper-button elementor-swiper-button-next" tabindex="0" role="button" aria-label="Next slide">\n' +
        '                 <i aria-hidden="true" class="eicon-chevron-right"></i><span class="elementor-screen-only">Next</span>\n' +
        '           </div>');
    $slider.append('<div class="elementor-swiper-button elementor-swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide">\n' +
        '             <i aria-hidden="true" class="eicon-chevron-left"></i><span class="elementor-screen-only">Previous</span>\n' +
        '           </div>');

    $slider.addClass('swiper-container');
    $slider.find('.elementor-container').addClass('swiper-wrapper');
    $slider.find('.elementor-column').addClass('swiper-slide');

    this.swiper = new Swiper(
        $slider,
        $slider.data(this.getSettings('attributes.dataSliderOptions')),
    );

    if ('yes' === pause_on_hover) {
      this.togglePauseOnHover(true);
    }
  }

  onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

    this.initSlider();
  }

  onElementChange(propertyName) {
    if (0 === propertyName.indexOf('width')) {
      this.swiper.update();
    }
  }

  onEditSettingsChange(propertyName) {
    if (1 >= this.getSlidesCount()) {
      return;
    }

    if ('activeItemIndex' === propertyName) {
      this.swiper.slideToLoop(this.getEditSettings('activeItemIndex') - 1);
    }
  }
}