// Scripts Task
/////////////////////////////////////////
'use strict';

const gulp            = require('gulp'),
			uglify          = require('gulp-uglify'),
			concat          = require('gulp-concat'),
			sourcemaps      = require('gulp-sourcemaps'),
			plumber         = require('gulp-plumber');

gulp.task('scripts', () => {
		gulp.src([
			'./node_modules/jquery/dist/jquery.js',
			'./node_modules/foundation-sites/dist/foundation.js',
			'./src/assets/js/main.js'
		])
		.pipe(plumber())
		.pipe(sourcemaps.init())
	  .pipe(uglify())
	  .pipe(concat('main.js'))
	  .pipe(sourcemaps.write('.'))
	  .pipe(gulp.dest('./dist/assets/js'));
});