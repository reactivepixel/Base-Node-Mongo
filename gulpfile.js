var gulp 								= require('gulp'),
    child_process   		= require('child_process'),
		nodemon 						= require('gulp-nodemon');

gulp.task('mongod', function(){
	child_process.exec('mongod', function (err,stdout,stderr) {
		console.log(stdout);
	})
});

gulp.task('dev', function () {
  nodemon({
    script: 'app.js'
  , ext: 'js handlebars'
  , env: { 'PORT': 3000 }
  })
})

gulp.task('default', ['mongod', 'dev']);