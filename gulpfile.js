/* Require the node modules */
var gulp    = require('gulp');
var watch   = require('gulp-watch');
var minify  = require('gulp-uglify');
var coffee  = require('gulp-coffee');
var lint    = require('gulp-coffeelint');


/* Lint, compile and minify CoffeeScript */
gulp.task('build', function(){
    return gulp.src('./index.coffee')
        .pipe(lint())
        .pipe(lint.reporter())
        .pipe(coffee())
        .pipe(minify())
        .pipe(gulp.dest('./'))
});


/* Watch for changes and refresh */
gulp.task('watch', function(){
    gulp.watch('./index.coffee', ['build']);
});


/* Defualt gulp task */
gulp.task('default', ['build', 'watch']);
