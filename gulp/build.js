/**********************************************
 Build Task
***********************************************/
'use strict';

const gulp      = require('gulp'),
    	del       = require('del'),
    	sequence  = require('run-sequence');

gulp.task('build', () => {
  sequence('clean', ['pages', 'styles', 'scripts', 'images']);
});

gulp.task('default', ['build', 'server'], () => {
	gulp.watch(['./src/**/*.html'], ['pages']);
	gulp.watch('./src/assets/scss/**/*.scss', ['styles']);
	gulp.watch(['./src/assets/js/**/*.js'], ['scripts']);
	gulp.watch('./scr/assets/img/**/*', ['images']);
});