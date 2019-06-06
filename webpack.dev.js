let merge = require('webpack-merge')
let baseConfig = require('./webpack.config')
let path = require('path')
module.exports = merge(baseConfig, {
    mode:'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port:8003,
        proxy: {
          '/v1': 'http://localhost:3001'
        },
        open: 'Google Chrome',
        hot: true
      }
})