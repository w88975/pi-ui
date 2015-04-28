var gulp = require('gulp');
var stylus = require("gulp-stylus");

gulp.task('build',['stylus','html','js']);

gulp.task('stylus',function () {
    gulp.src(["src/**/*.styl","test/*.styl"])
        .pipe(stylus())
        .pipe(gulp.dest('bin'));
});

gulp.task('html',function () {
    gulp.src(["src/**/*.html","test/*.html"])
        .pipe(gulp.dest('bin'));
});


gulp.task('js',function () {
    gulp.src(["src/**/*.js"])
        .pipe(gulp.dest('bin'));
});
