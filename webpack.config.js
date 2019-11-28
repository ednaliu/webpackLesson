const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry:'./src/index.js',//入口文件
  'mode': 'development',//development打包的时候不会被压缩
  entry: {
    main: './src/index.js',
  },//入口文件
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        // loader:'file-loader',
        loader: 'url-loader',
        options: {
          // placeholder:占位符
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          // limit:204800//20kb
          limit: 10240//10kb
        }
      }
    },
    {
      test: /\.(eot|ttf|svg)$/,
      use: {
        loader: 'file-loader',
      }
    },
    {
      test: /\.(css|scss)$/,
      use: [
        'style-loader',
        {
          'loader': 'css-loader',
          options: {
            importLoaders: 2,
            modules:true//开启css模块化打包
          }
        },
        'sass-loader',
        'postcss-loader'
      ]//不可以调换顺序，如果调换则会出现错误
      // loader执行顺序是从下到上，从右到左
    }

    ]
  },
  output: {//打包文件之后放的位置
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')//绝对路径
  },
  plugins: [new HtmlWebpackPlugin()]
}