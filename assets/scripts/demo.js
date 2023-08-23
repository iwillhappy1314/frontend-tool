import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

if ($('#rs-news-slider').length > 0) {
    new Splide('#rs-news-slider', {
        type    : 'loop',
        autoplay: true,
        arrows  : false,
        perPage : 1,
    }).mount();
}