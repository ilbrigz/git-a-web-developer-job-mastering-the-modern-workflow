var gulp = require('gulp'), //imports the gulp library
watch = require('gulp-watch'),//imports the watch 
browserSync = require('browser-sync').create();// server


gulp.task('watch', function(){////////////////////// gulp watch task

	browserSync.init({
		notify: false, //removes notification uppon changes
		server: {
			baseDir: "app"//points to the folder the browser will open
		}
	});

	watch('./app/index.html', function() {// this command watches the html for changes
		browserSync.reload();//reloads browser
	});

	watch('./app/assets/styles/**/*.css', function() { //double qoutes selects future folders
		gulp.start('cssInject');//a css task
	});

});


//updates changes in css
gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});
