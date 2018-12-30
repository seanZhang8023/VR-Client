'use strict';

var gulp = require('gulp');
var config = require('./config');

function watch() {
    gulp.watch(config.src.js, ['lint']);
}

watch.depends = ['lint', 'serve'];
module.exports = watch;
