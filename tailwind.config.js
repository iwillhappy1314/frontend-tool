const purgecssWhiteList = require('@wenprise/purgecss-with-wordpress');

module.exports = {
  content    : [
    '../frontend/assets/scripts/**/*.js',
    '../bbpress/**/*.php',
    '../includes/**/*.php',
    '../related-post-plugin/**/*.php',
    '../src/**/*.php',
    '../parts/**/*.php',
    '../wenprise/**/*.php',
    '../templates/**/*.php',
    '../template-parts/**/*.php',
    '../woocommerce/**/*.php',
    '../functions.php',
    '../header.php',
    '../footer.php',
    '../index.php',
    '../home.php',
    '../archive.php',
    '../taxonomy.php',
    '../author.php',
    '../search.php',
    '../sidebar.php',
    '../page.php',
    '../single.php',
    '../comments.php',
    '../archive-project.php',
    '../single-project.php',
    '../archive-product.php',
    '../single-product.php',
    '../page-templates.php',
    '../single-member.php',
    '../single-business.php',
    '../single-company.php',
    '../../../plugins/wenprise-content-components/templates/**/*.php',
    '../404.php',
  ],
  safelist   : purgecssWhiteList.whitelist.concat([
    'ln-letters',
    'letterCountShow',
    'mr-1',
    'mr-2',
    'mb-2',
    'mb-6',
    'mb-4',
    'py-16',
    'block',
    'flex',
    'inline-block',
    'items-center',
    'justify-center',
    'text-primary',
    {
      pattern: /bg-(red|green|blue)-(100|200|300)|rs-.+|mean-.+|hs-.+|flex-*|mr-2/,
    },
  ]),
  theme      : {
    screens  : {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'widescreen': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'desktop': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'laptop': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'tablet': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'phone': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    container: {
      screens: {
        minsm : {min: '640px'},
        minmd : {min: '768px'},
        minlg : {min: '1024px'},
        minxl : {min: '1280px'},
        min2xl: {min: '1360px'},
      },
    },
    extend   : {
      colors: {
        primary  : '#e50011',
        secondary: '#9e7b07',
        gray     : {
          '100': '#f5f5f5',
          '200': '#eee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
      },
    },
  },
  variants   : {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins    : [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
