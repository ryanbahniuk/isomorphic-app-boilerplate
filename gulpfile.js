const gulp = require('gulp');
const gulpif = require('gulp-if');
const path = require('path');
const del = require('del');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');

const assetsPath = path.join('.', 'public');
const cssPath = path.join(assetsPath, 'stylesheets');
const jsPath = path.join(assetsPath, 'javascripts');

gulp.task('build-css', () => {
  const milligramSrcPath = path.join('.', 'node_modules', 'milligram', 'dist', 'milligram.min.css');
  const normalizeSrcPath = path.join('.', 'node_modules', 'normalize.css', 'normalize.css');

  del(path.join(cssPath, '*'));

  gulp.src(milligramSrcPath)
    .pipe(gulp.dest(cssPath));

  gulp.src(normalizeSrcPath)
    .pipe(gulp.dest(cssPath));
});

gulp.task('build-js', () => {
  const isProduction = process.env.NODE_ENV === 'production'
  const entryPoint = path.join(jsSrcPath, 'app.js');
  const browserifyOptions = {
    entries: [entryPoint],
    debug: true,
    cache: {},
    packageCache: {}
  }

  del(path.join(jsPath, '*'));

  return browserify(browserifyOptions)
    .transform("babelify")
    .bundle()
    .pipe(source('app.bundle.js'))
    .pipe(buffer())
    .pipe(gulpif(isProduction, uglify()))
    .pipe(gulp.dest(jsPath));
});

gulp.task('build', ['build-css', 'build-js']);

