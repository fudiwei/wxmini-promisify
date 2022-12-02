import gulp from 'gulp';
import gulp$babel from 'gulp-babel';
import gulp$eslint from 'gulp-eslint';
import gulp$rimraf from 'gulp-rimraf';
import gulp$stripDebug from 'gulp-strip-debug';
import gulp$uglify from 'gulp-uglify';

gulp.task('clean', () => {
    return gulp
        .src(['dist/**/*.js', 'dist/**/*.js.map'], {
            read: false
        })
        .pipe(gulp$rimraf({
            force: true
        }));
});

gulp.task('eslint', () => {
    return gulp
        .src(['src/**/*.js'])
        .pipe(gulp$eslint())
        .pipe(gulp$eslint.format())
        .pipe(gulp$eslint.failAfterError());
});

gulp.task('dist', gulp.series('clean', () => {
    const babelOptions = {
        presets: [
            [
                '@babel/preset-env', {
                    modules: false
                }
            ]
        ]
    };

    return gulp
        .src(['src/**/*.js'])
        .pipe(gulp$stripDebug())
        .pipe(gulp$babel(babelOptions))
        .pipe(gulp$uglify())
        .pipe(gulp.dest('dist'));
}));

gulp.task('default', gulp.series('clean', 'dist'));
