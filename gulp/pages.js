// Templates Task
/////////////////////////////////////////
'use strict';

const gulp      = require('gulp'),
    	panini    = require('panini'),
			plumber   = require('gulp-plumber');
 
gulp.task('pages', () => {
  gulp.src('./src/views/pages/**/*.html')
  	.pipe(plumber())
    .pipe(panini({
    	root: './src/views/pages/',
      layouts: './src/views/layout/',
      partials: './src/views/partials/'
    }))
    .pipe(gulp.dest('./dist'));
}
);