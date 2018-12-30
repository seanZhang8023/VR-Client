'use strict';

var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var gutil = require('gulp-util');

function pack(done) {
  webpack(webpackConfig, function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      colors: true
    }));
    done();
  });
}
pack.depends = ['clean'];
module.exports = pack;
