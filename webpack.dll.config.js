const webpack = require('webpack')
const path = require('path')
var vendors = [
    'chai',
    'classnames',
    'cors',
    'crypto',
    'expect',
    'fetchival',
    'generate-password',
    'history',
    'json-loader',
    'jsonwebtoken',
    'lolex',
    'minimatch',
    'moment',
    'path',
    'promiscuous',
    'q',
    'raw-loader',
    'react',
    'react-bootstrap',
    'react-cookie',
    'react-datepicker',
    'react-dom',
    'react-hot-loader',
    'react-redux',
    'react-resizable-and-movable',
    'react-router',
    'react-router-redux',
    'lodash',
    'antd',
    'react-draggable',
    'react-d3',
    'react-color',
    'redux',
    'redux-actions',
    'redux-form',
    'redux-logger',
    'redux-router',
    'redux-thunk',
    'style-loader',
    'svg-url-loader',
    'whatwg-fetch',
    'node-loader',
    'es6-promise',
    'babel-plugin-import',
    'babel-polyfill',
    'babel-plugin-transform-object-assign',
    'translate.js',
    'flux-standard-action'
]
module.exports = {
    entry: {
        vendors: vendors
    },
    output: {
        filename: '[name].dll.js',
        path: 'dist',
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname,
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: ['babel'],
                exclude: /.*node_modules((?!kandy-redux).)*$/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']

                }
            }
        ]
    }
}