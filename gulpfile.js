let gulp=require('gulp');
let watch=require('gulp-watch');
let postcss= require('gulp-postcss');
let autoprefixer=require('autoprefixer'),
cssvars=require('postcss-simple-vars'),
nested=require('postcss-nested');

gulp.task('default',function(){
    console.log('Task 1');
});
gulp.task('html',function(){
    console.log('Imagine sth useful being done to your html here');
});
gulp.task('styles',function(){
    gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars,nested,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));

});
gulp.task('watch',function(){
    watch('./app/index.html',function(){
        console.log('Index.html modified');
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css',function(){
        gulp.start('styles');
    });
});
