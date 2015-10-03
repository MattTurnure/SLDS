var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    notify = require('gulp-notify'),
    del    = require('del'),
    rename = require("gulp-rename");

gulp.task('SLDSscss', function () {
    return gulp.src('node_modules/@salesforce-ux/design-system/assets/styles/*')
        .pipe(rename(function (path) {
            path.extname = '.scss'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(notify({message: 'SLDSscss task complete'}));
});

gulp.task('SLDSstyles', function () {
    return gulp.src('node_modules/@salesforce-ux/design-system/assets/styles/*')
        .pipe(gulp.dest('dist/assets/styles'))
        .pipe(notify({message: 'SLDSstyles task complete'}));
});

gulp.task('SLDSwebfonts', function () {
    return gulp.src('node_modules/@salesforce-ux/design-system/assets/fonts/webfonts/*')
        .pipe(gulp.dest('dist/assets/fonts/webfonts'))
        .pipe(notify({message: 'SLDSwebfonts task complete'}));
});

gulp.task('SLDSicons', function () {
    return gulp.src('node_modules/@salesforce-ux/design-system/node_modules/@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/**/*')
        .pipe(gulp.dest('dist/assets/icons'));
});

gulp.task('clean', function (cb) {
    return del(['dist'], cb);
});

gulp.task('build', ['SLDSscss', 'SLDSstyles', 'SLDSwebfonts', 'SLDSicons']);
gulp.task('default', ['build']);