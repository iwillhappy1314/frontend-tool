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

      '-2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      '-xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      '-lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      '-md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      '-sm': {'max': '639px'},
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
        primary: 'var(--primary-color)',
        alt    : 'var(--alt-color)',
        gray   : {
          '100': 'var(--gray-100)',
          '200': 'var(--gray-200)',
          '300': 'var(--gray-300)',
          '400': 'var(--gray-400)',
          '500': 'var(--gray-500)',
          '600': 'var(--gray-600)',
          '700': 'var(--gray-700)',
          '800': 'var(--gray-800)',
          '900': 'var(--gray-900)',
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
