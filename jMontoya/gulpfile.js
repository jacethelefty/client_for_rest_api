const gulp = require('gulp'),
      eslint = require('gulp-eslint'),
      mocha = require('gulp-mocha'),
      files = ['test/*.js', '!node_modules//**'],
      webpack = require('webpack-stream');

// gulp.task('lint', function() {
//   return gulp.src(files)
//     .pipe(eslint({
//       extends: 'eslint:recommended', // imports general rules
//       ecmaFeatures: {
//         'modules': true,       // allows modules
//         'blockBindings': true,  // allows const
//         'arrowFunctions': true  // allows arrow functions
//       },
//       'rules': {
//         'no-console': 0,       // allows console.logs without throwing err
//         'semi': 2,             // requires semi-colons
//       },
//       envs: [
//         'node',
//         'mocha'
//       ]
//     }))
//     .pipe(eslint.format());
// });

gulp.task('html:dev', () => {
  gulp.src(__dirname + '/app/**/*.html')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('css:dev', () => {
  gulp.src(__dirname + '/app/*.css')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('webpack:dev', () => {
  gulp.src(__dirname + '/app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});

// gulp.task('mocha', function() {
//   return gulp.src(['test/*.js'], { read: false })
//     .pipe(mocha());
// });
//
// gulp.task('watch', function() {
//   gulp.watch(files, ['lint']);
// });

gulp.task('build:dev', ['webpack:dev', 'html:dev', 'css:dev']);
gulp.task('default', ['build:dev']);
// gulp.task('default', ['mocha', 'lint', 'watch', 'build:dev']);
