export default class WenpriseCommonCarouselClass extends elementorModules.frontend.handlers.SwiperBase {
  getDefaultSettings() {
    return {
      selectors : {
        container         : '.wprs-swiper--carousel',
        slide             : '.swiper-slide',
        slideInnerContents: '.slider-content',
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

    elements.$slides = elements.$swiperContainer.find(selectors.slide);

    return elements;
  }

  initSlider() {
    const $slider        = this.elements.$swiperContainer,
          settings       = this.getSettings(),
          pause_on_hover = $slider.data(settings.attributes.pause_on_hover);

    if (!$slider.length) {
      return;
    }

    this.swiper = new Swiper(
        $slider,
        $slider.data(this.getSettings('attributes.dataSliderOptions')),
    );

    this.swiper.on('slideChangeTransitionStart', function() {
      const $sliderContent = $slider.find(settings.selectors.slideInnerContents);
      $sliderContent.hide();
    });

    this.swiper.on('slideChangeTransitionEnd', function() {
      const $currentSlide = $slider.find(settings.selectors.slideInnerContents);
      $currentSlide.show();
    });

    if ('yes' === pause_on_hover) {
      this.togglePauseOnHover(true);
    }
  }

  async onInit(...args) {
    super.onInit(...args);

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