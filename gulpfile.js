var gulp = require('gulp');
var download = require('gulp-download');

gulp.task('download',function() {
  download('http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz')
    .pipe( gulp.dest("data/"));
  download('http://yann.lecun.com/exdb/mnist/train-labels-idx1-ubyte.gz')
    .pipe( gulp.dest("data/"));
});
