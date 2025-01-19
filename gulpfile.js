const {src, dest, watch, parallel, series} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
let cssmin = require('gulp-cssmin');

const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');

const svgSprite = require('gulp-svg-sprite');

const clean = require('gulp-clean');


function pages() {
  return src('app/*.html')
    .pipe(browserSync.stream())
}

function scripts() {
  return src([
    'node_modules/rateyo/src/jquery.rateyo.js',
    'node_modules/imask/dist/imask.js',
    'node_modules/swiper/swiper-bundle.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
    'app/js/main.js',
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles() {
  return src([
    'node_modules/rateyo/src/jquery.rateyo.css',
    'node_modules/swiper/swiper-bundle.css',
  ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function sass() {
  return src(
    'app/scss/style.scss',
  )
    .pipe(concat('style.min.css'))
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({overrideBrowserslist: ['last 10 version']}))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function images() {
  return src(['app/images/content/**/*.*'])
    .pipe(newer('app/images/content-mod'))
    .pipe(avif({quality: 50}))

    .pipe(src('app/images/content/**/*.*'))
    .pipe(newer('app/images/content-mod'))
    .pipe(webp())

    .pipe(src('app/images/content/**/*.*'))
    .pipe(newer('app/images/content-mod'))
    .pipe(imagemin())

    .pipe(dest('app/images/content-mod'))
}

function sprite() {
  return src('app/images/sprite/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg',
          example: true
        }
      },
      svg: {
        transform: [
          function(svg) {
            return svg.replace(/(<style>.*?<\/style>)/g, '');
          }
        ]
      }
    }))
    .pipe(dest('app/images/'))
}

function spriteReuse() {
  return src('app/images/sprite.svg')
    .pipe(dest('app/images/'))
}

function watching() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
  watch(['app/scss/*.scss'], sass)
  watch(['app/images/content/*.*'], images)
  watch(['app/images/fonts/*.*'], fonts)
  watch(['app/js/main.js'], scripts)
  watch(['app/*.html']).on('change', browserSync.reload)
}

function fonts() {
  return src('app/fonts/*.*')
    .pipe(fonter({
      formats: ['woff', 'ttf']
    }))
    .pipe(src('app/fonts/*.ttf'))
    .pipe(ttf2woff2())
    .pipe(dest('app/fonts'))
}

function building() {
  return src([
    'app/css/libs.min.css',
    'app/css/style.min.css',
    'app/images/icons/*.*',
    'app/images/content-mod/*.webp',
    'app/images/sprite.svg',
    'app/images/svg/*.*',
    'app/images/sprite.svg',
    'app/fonts/*.*',
    'app/js/libs.min.js',
    'app/js/main.min.js',
    'app/*.html',
  ], {base: 'app'})
    .pipe(dest('dist'))
}



function cleanDist() {
  return src('dist')
    .pipe(clean())
}


exports.sass = sass;
exports.pages = pages;
exports.images = images;
exports.fonts = fonts;
exports.sprite = sprite;
exports.spriteReuse = spriteReuse;
exports.scripts = scripts;
exports.watching = watching;
exports.building = building;

exports.default = parallel(styles, scripts, sass, pages, watching)
exports.build = series(cleanDist, building);