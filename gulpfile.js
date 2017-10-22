/* Require the node modules */
var gulp    = require('gulp');
var watch   = require('gulp-watch');
var minify  = require('gulp-uglify');
var coffee  = require('gulp-coffee');
var live    = require('gulp-livescript');
var lint    = require('gulp-coffeelint');
var gutil   = require('gutil');


/* Lint, compile and minify CoffeeScript */
gulp.task('build', function(){
    return gulp.src('./index.ls')
        .pipe(lint())
        .pipe(lint.reporter())
        .pipe(live({bare: true})
            .on('error', gutil.log))
        .pipe(minify())
        .pipe(gulp.dest('./'))
});


/* Watch for changes and refresh */
gulp.task('watch', function(){
    gulp.watch('./index.coffee', ['build']);
});


/* Defualt gulp task */
gulp.task('default', ['build', 'watch']);
