import path from 'path'
import webpack from 'webpack'
import polyfill from 'babel-polyfill'
import config from './tasks/config'
import webpackDll from './webpack.dll.config'

export default {
    context: path.join(__dirname, 'client'),
    devtool: 'cheap-module-eval-source-map',
    historyApiFallback: true,
    entry: {
        app: [
            'babel-polyfill',
            'webpack-hot-middleware/client',
            './' + config.src.main
        ]
    },
    output: {
        path: path.join(__dirname, config.dest),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                VA_BASE_URL: JSON.stringify(process.env.VA_BASE_URL)
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json')
        })
    ],
    resolve: {
        alias: {
            'redux': path.join(__dirname, 'node_modules/redux')
        },
        extensions: ['', '.js', '.json', '.node'],
        fallback: path.join(__dirname, 'node_modules')
    },
    resolveLoader: {fallback: path.join(__dirname, 'node_modules')},
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: ['babel'],
                exclude: /.*node_modules((?!kandy-redux).)*$/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']

      }
    },
      {
        test: /\.(png|jpe?g|ico|bmp|gif)$/,
        loader: 'file?&limit=10000name=/img/[name].[ext]?[hash]'},

    {

      test: /\.(scss|css)$/,
      loaders: ['style', 'css', 'sass'],
      include: __dirname
    },
      {
      test: /\.svg/,
      loader: 'svg-url-loader'
    },

      {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'file?name=[path][name].[ext]'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.node$/,
      loader: 'node'
    }],
    noParse: /node_modules\/json-schema\/lib\/validate\.js/
  }
}
