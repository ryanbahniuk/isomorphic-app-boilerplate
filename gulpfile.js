const gulp = require('gulp');
const gulpif = require('gulp-if');
const babel = require('gulp-babel');
const path = require('path');
const del = require('del');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');

const srcPath = path.join('.', 'lib');
const distPath = path.join('.', 'dist');

const assetsSrcPath = path.join(srcPath, 'assets');
const assetsDistPath = path.join(distPath, 'assets');

const jsSrcPath = path.join(assetsSrcPath, 'js');
const jsDistPath = path.join(assetsDistPath, 'js');
const cssSrcPath = path.join(assetsSrcPath, 'stylesheets');
const cssDistPath = path.join(assetsDistPath, 'stylesheets');
const imagesSrcPath = path.join(assetsSrcPath, 'images');
const imagesDistPath = path.join(assetsDistPath, 'images');

gulp.task('build-images', () => {
  gulp.src(path.join(imagesSrcPath, '**', '*'))
    .pipe(gulp.dest(imagesDistPath));
});

gulp.task('build-css', () => {
  const milligramSrcPath = path.join('.', 'node_modules', 'milligram', 'dist', 'milligram.min.css');
  const normalizeSrcPath = path.join('.', 'node_modules', 'normalize.css', 'normalize.css');

  del(path.join(cssDistPath, '*'));

  gulp.src(milligramSrcPath)
    .pipe(gulp.dest(cssDistPath));

  gulp.src(normalizeSrcPath)
    .pipe(gulp.dest(cssDistPath));
});

gulp.task('compile-js', () => {
  del(path.join(distPath, '**', '*.js'));

  return gulp.src(path.join(srcPath, '**', '*.js'))
    .pipe(babel())
    .pipe(gulp.dest(distPath))
});

gulp.task('bundle-js', ['compile-js'], () => {
  const isProduction = process.env.NODE_ENV === 'production'
  const entryPoint = path.join(jsDistPath, 'app.js');
  const browserifyOptions = {
    entries: [entryPoint],
    debug: !isProduction,
    cache: {},
    packageCache: {}
  }

  return browserify(browserifyOptions)
    .bundle()
    .pipe(source('app.bundle.js'))
    .pipe(buffer())
    .pipe(gulpif(isProduction, uglify()))
    .pipe(gulp.dest(jsDistPath));
});

gulp.task('remove-js', ['bundle-js'], () => {
  return del(path.join(jsDistPath, 'app.js'));
});

gulp.task('build-js', ['compile-js', 'bundle-js', 'remove-js']);
gulp.task('build', ['build-images', 'build-css', 'build-js']);

