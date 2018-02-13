var gulp = require('gulp'),
    path = require('path'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    rtlcss = require('gulp-rtlcss');

gulp.task('build', function() {
    return gulp.src([path.join('scss', '**/*.scss')])
        .pipe(sass().on('error', sass.logError))      
        .pipe(gulp.dest('dist'))  
        // .pipe(rtlcss())
        // .pipe(rename({ suffix: '-rtl' }))
        // .pipe(gulp.dest('dist'))
});

gulp.task('default', ['build']);