// Server Task
/////////////////////////////////////////
'use strict';

const gulp            = require('gulp'),
      browserSync     = require('browser-sync').create();

const watchFiles = [
  './dist/*.html',
  './dist/assets/css/*.css',
  './dist/assets/js/*.js'
];

gulp.task('server', (done) => {
  browserSync.init(watchFiles, {
    server: './dist',
      reloadDelay: 500
  });
  done();
});