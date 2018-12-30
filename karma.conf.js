var config = require('./tasks/config');

var options = {
  singleRun: true,
  frameworks: ['mocha', 'sinon-chai'],
  reporters: ['mocha'],
  browsers: ['Chrome'],
  files: [].concat(
    config.src.tests
  ),
  preprocessors: {
    './tests/**/*.spec.js': ['webpack']
  },
  webpack: {
    resolve: {
      extensions: ['', '.js', '.ts'],
      modulesDirectories: ['node_modules', 'src']
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader' },
        { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
      ]
    }
  },
  webpackMiddleware: {
    stats: {
      color: true,
      chunkModules: false,
      modules: false
    }
  }
};

module.exports = function(karmaConfig) {
  karmaConfig.set(options);
};

module.exports.options = options;
