//this allows gulp and gulp-watch to run

var gulp = require('gulp'), //imports the gulp library
watch = require('gulp-watch'),//imports the watch 
postcss = require('gulp-postcss'),//imports postcss 
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),//imports postcss-simple-vars for using variables
nested = require('postcss-nested'),//allows nesting
cssImport = require('postcss-import');

gulp.task('default', function() {// creats a gulp task
	console.log("Hooray - we crated a gulp tsk")
});

gulp.task('html', function() {// run this in the terminal with 'gulp html'
	console.log("Imagine something useful being done to your html here")
});

gulp.task('styles', function() {// run this in the terminal with 'gulp html'
 //////////////////////////////////////////////////////////////////////////POSTCSS
 return gulp.src('./app/assets/styles/styles.css')
 	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
 	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){// gulp watch task

	watch('./app/index.html', function() {// this command watches the html for changes
		gulp.start('html');//an html task
	});

	watch('./app/assets/styles/**/*.css', function() { //double qoutes selects future folders
		gulp.start('styles');//a css task
	});

});
