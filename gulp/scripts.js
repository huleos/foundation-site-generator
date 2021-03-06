// Scripts Task
/////////////////////////////////////////
'use strict';

const gulp            = require('gulp'),
			uglify          = require('gulp-uglify'),
			concat          = require('gulp-concat'),
			sourcemaps      = require('gulp-sourcemaps'),
			plumber         = require('gulp-plumber'),
			gutil           = require('gulp-util');

const PRODUCTION = gutil.env.production;

const jsFiles = [
	'./node_modules/jquery/dist/jquery.js',
	'./node_modules/foundation-sites/dist/foundation.js',
	'src/assets/js/main.js'
];

gulp.task('scripts', () => {
		return gulp.src(jsFiles)
		.pipe(plumber())
		.pipe(sourcemaps.init())
	  .pipe(concat('main.js'))
	  .pipe(PRODUCTION ? uglify() : gutil.noop())
	  .pipe(sourcemaps.write('.'))
	  .pipe(gulp.dest('./dist/assets/js'));
});