var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var browserSync = require('browser-sync').create();

gulp.task('serve', ['tsc'], function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch("ts/*.ts", ['tsc']);
    gulp.watch([
        "*.html",
        "js/*.js",
        "*.css"
    ]).on('change', browserSync.reload);
});

gulp.task('tsc', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("js"));
});

gulp.task('default', ['serve']);