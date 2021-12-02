let mix = require('laravel-mix');

// mix.js('src/app.js', 'dist').setPublicPath('dist');
mix.postCss('_site/css/event.css', '_site/css')
    .postCss('_site/css/home.css', '_site/css')
    .postCss('_site/css/styles.css', '_site/css');