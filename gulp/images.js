// Images Task
/////////////////////////////////////////
'use strict';

const gulp            = require('gulp'),
			imagemin        = require('gulp-imagemin'),
			plumber         = require('gulp-plumber'),
			gutil           = require('gulp-util');

const PRODUCTION = gutil.env.production;

gulp.task('images', () => {
	return gulp.src('./src/assets/img/**/*')
		.pipe(plumber())
	  .pipe(PRODUCTION ?
			imagemin({
				optimizationLevel: 5,
				progressive: true,
				interlaced: true
			}) : gutil.noop())
	  .pipe(gulp.dest('./dist/assets/img'));
});

