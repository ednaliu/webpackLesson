const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  // entry:'./src/index.js',//入口文件
  'mode': 'development',//development打包的时候不会被压缩
  devtool:'cheap-module-eval-source-map',
  entry: {
    main: './src/index.js',
    // sub: './src/index.js',
  },//入口文件
  devServer:{
    contentBase:'./dist',
    open:true,
    hot:true,
    hotOnly:true
  },
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
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          'loader': 'css-loader',
          options: {
            importLoaders: 2,
            // modules:true//开启css模块化打包
          }
        },
        'sass-loader',
        'postcss-loader'
      ]//不可以调换顺序，如果调换则会出现错误
      // loader执行顺序是从下到上，从右到左
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }

    ]
  },
  output: {//打包文件之后放的位置
    // publicPath:'http://cdn.com.cn',//打包之后可以src里面的内容可以添加
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')//绝对路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}