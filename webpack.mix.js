let mix = require('laravel-mix');
let webpack = require('webpack');

require('laravel-mix-tailwind');
require('laravel-mix-versionhash');
require('laravel-mix-copy-watched');
require('mix-white-sass-icons');

mix.setPublicPath('./');

mix.webpackConfig({
    externals: {
        jquery: 'jQuery',
    },
    plugins  : [
        new webpack.ProvidePlugin({
            $              : 'jquery',
            jQuery         : 'jquery',
            'window.jQuery': 'jquery',
        })],
});

mix.sass('assets/styles/styles.scss', 'dist/styles').
    sass('assets/styles/editor.scss', 'dist/styles').
    tailwind().
    options({
        postCss: [
            require('css-mqpacker'),
        ],
    });

mix.js('assets/scripts/editor.js', 'dist/scripts').
    js('assets/scripts/modules/product-categories.js', 'dist/scripts').
    js('assets/scripts/scripts.js', 'dist/scripts');

mix.copyWatched('assets/images', 'dist/images').
    copyWatched('assets/scripts/plugins', 'static/js').
    copyWatched('assets/fonts', 'dist/fonts');

if (mix.inProduction()) {
    mix.versionHash();
    mix.icons('assets/icons', 'assets/fonts', 'assets/styles/icons.scss');
} else {
    mix.sourceMaps();
    mix.webpackConfig({devtool: 'source-map'});
}

mix.browserSync({
    proxy         : 'http://starter.test/',
    files         : [
        {
            match  : [
                './dist/**/*',
                '../**/*.php',
            ],
            options: {
                ignored: '*.txt',
            },
        },
    ],
    snippetOptions: {
        whitelist: ['/wp-admin/admin-ajax.php'],
        blacklist: ['/wp-admin/**'],
    },
});