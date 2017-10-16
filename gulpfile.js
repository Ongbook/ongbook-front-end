var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify		 = require('gulp-uglify');

gulp.task('default', ['ongbook', 'css', 'libs']);

gulp.task('libs', function() {
  return gulp.src([
      './node_modules/angular/angular.min.js',
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/angular-ui-router/release/angular-ui-router.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.min.js',
      '//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap.min.js',
      '//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js',
      './node_modules/angular-animate/angular-animate.min.js',
      './node_modules/angular-touch/angular-touch.min.js',
      './node_modules/angularjs-toaster/toaster.min.js'
  	])
		.pipe(concat('vendor.min.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('css', function () {
    return gulp.src([
      './assets/css/style.css',
      './assets/css/font-awesome.min.css',
      './assets/css/sb-admin-2.min.css',
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './node_modules/angularjs-toaster/toaster.min.css'
    ])
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
    return gulp.watch('./src/**/*.js', ['ongbook']);
});

gulp.task('ongbook', function () {
   return gulp.src([
     './src/ongbook.js',
     './src/routes.js',
     './src/controllers/**/*.js',
     './src/services/**/*.js',
     './src/directives/**/*.js'
   ])
   .pipe(ngAnnotate())
   .pipe(uglify())
   .pipe(concat('ongbook.min.js'))
   .pipe(gulp.dest('./dist'));
});