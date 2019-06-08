const { DefinePlugin } = require( 'webpack' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const CleanWebpackPlugin = require( 'clean-webpack-plugin' )
const path = require( 'path' )
const dotenv = require( 'dotenv' )

function getEnv (){
    // call dotenv and it will return an Object with a parsed key 
    const env = dotenv.config().parsed
    // reduce it to a nice object, the same as before
    return Object.keys( env ).reduce( ( prev, next ) => {
      prev[`process.env.${next}`] = JSON.stringify( env[next] )
      return prev
    }, {} )
  
}

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join( __dirname, 'dist' ),
    // publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name][id].bundle.js'
  },
  module: {
    rules: [
      {
        enforce:'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins:
            ['@babel/plugin-transform-runtime',
              ['@babel/plugin-proposal-decorators', { 'decoratorsBeforeExport': true }]]
        }
      }, {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              publicPath: '../'
            }
          },
          
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
    },   
     
      {

				test: /\.(jpg|png|gif)$/,
				use: {
						loader: 'url-loader',
						options: {
								limit: 50,
								fallback: 'file-loader',
								name: '[name].[ext]',
								publicPath: 'assets/img/',
								outputPath: 'assets/img/'
						}
				}
			}
    ]
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../src/components'),
      '@scss': path.resolve(__dirname, '../src/scss'),
      '@img': path.resolve(__dirname, '../src/img'),
      '@': path.resolve(__dirname, '../src')
    },
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'css/[name].css',
      chunkFilename: 'css/[name]-[id].css',
    } ),
    new HtmlWebpackPlugin( {
      template: './static/index.html'
    } ),
    new CleanWebpackPlugin(),
    new DefinePlugin( getEnv() )
  ],
  
 
}
