
import cors from 'cors'
import express from 'express'
import path from 'path'
import http from 'http'
import fs from 'fs'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'
let serve = () => {
    let app = express();
    let httpServer = http.Server(app);
    app.use(express.static('public'))
    app.use(express.static('dist'))
    app.use(express.static('server/avatar'))
    let compiler = webpack(webpackConfig)
    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        noInfo: true
    }))
    app.use(webpackHotMiddleware(compiler))
    app.use(cors())



    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../index.html'))

    })
    var server = httpServer.listen(process.env.PORT, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("应用实例，访问地址i为 http://%s:%s", host, port);
    })
}

module.exports = serve
