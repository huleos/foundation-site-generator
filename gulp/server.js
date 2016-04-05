// Server Task
/////////////////////////////////////////
'use strict';

const gulp            = require('gulp'),
      browserSync     = require('browser-sync').create();

gulp.task('server', () => {
  browserSync.init([
  	'./dist/*.html',
  	'./dist/assets/css/*.css',
  	'./dist/assets/js/*.js'
  	], {
      server: {
      	baseDir: './dist'
      }
  });
});

