var gulp = require('gulp');
var rsync = require('gulp-rsync');
 
gulp.task('deploy', function() {
  return gulp.src('dist/**')
    .pipe(rsync({
      root: 'dist/',
      hostname: '116.196.86.186',
      port : 3222,
      destination: '/var/www/spider.xiaokele.site/html/'
    }));
});