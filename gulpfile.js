var gulp = require('gulp')
var fs = require('fs')
var browserify = require('browserify')
var babelify = require('babelify')

gulp.task('default', function () {
  // place code for your default task here
})
gulp.task('watch', function () {
  gulp.watch(['index.js', 'js/**/*.js'], function (event) {
    browserify({ debug: true })
      .transform(babelify)
      .require('./index.js', { entry: true })
      .bundle()
      .on('error', function (err) { console.log('Error: ' + err.message) })
      .pipe(fs.createWriteStream('bundle.js'))
  })
})
