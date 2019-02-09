let gulp=require('gulp'),
postcss= require('gulp-postcss'),
autoprefixer=require('autoprefixer'),
cssvars=require('postcss-simple-vars'),
nested=require('postcss-nested'),
cssimport=require('postcss-import');

gulp.task('styles',function(){
    gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport,cssvars,nested,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});