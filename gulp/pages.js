// Templates Task
/////////////////////////////////////////
'use strict';

const gulp      = require('gulp'),
    	panini    = require('panini'),
			plumber   = require('gulp-plumber');
 
gulp.task('pages', () => {
  gulp.src('./src/pages/**/*.html')
  	.pipe(plumber())
    .pipe(panini({
    	root: './src/pages/',
      layouts: './src/layout/'
    }))
    .pipe(gulp.dest('./dist'));
}
);