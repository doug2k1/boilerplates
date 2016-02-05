var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('build', function () {
    return browserify('./src/index.js', {
            debug: false
        })
        .transform('babelify')
        .bundle()
        .pipe(source('./bundle.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/**/*.js', ['build']);
});

gulp.task('default', ['watch']);
