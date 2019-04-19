const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
    entry: {
      bundle: './src/index.js'
    },
    output: {
      path: path.join(__dirname, 'public'),
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[name].js'
    },
    devtool: 'inline-source-map',
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: 
            ['@babel/plugin-transform-runtime', 
            ['@babel/plugin-proposal-decorators', { "decoratorsBeforeExport": true }]],
          
        }
      },  {
        test: /\.scss$/,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
            'postcss-loader',
          ],
        },
        {
        test: /\.(svg|png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // limit: 8192,
            name: 'image/[hash:8].[name].[ext]'
          }
        }]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'scss/[name].css',
            chunkFilename: 'scss/[id].css',
      }),
      new HtmlWebpackPlugin({
        template: './static/index.html'
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      proxy: {
        "/v1": "http://localhost:3001"
      }
    }
  }