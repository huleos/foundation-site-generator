// Styles Task
/////////////////////////////////////////
'use strict';

const gulp            = require('gulp'),
			sass            = require('gulp-sass'),
			prefix          = require('gulp-autoprefixer'),
			sourcemaps      = require('gulp-sourcemaps'),
			plumber         = require('gulp-plumber'),
			gutil           = require('gulp-util');

const PRODUCTION = gutil.env.production;

gulp.task('styles', () => {
	return gulp.src('./src/assets/scss/*.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: [
				'./node_modules/foundation-sites/scss'
			]
		}))
		.pipe(sass())
		.pipe(prefix({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		// .pipe(sass({outputStyle: 'compressed'}))
		.pipe(PRODUCTION ? sass({outputStyle: 'compressed'}) : gutil.noop())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/assets/css'));
});

