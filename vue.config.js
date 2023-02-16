/*
 * @Title: 
 * @Author: Liy
 * @Date: 2023-02-16 13:59:52
 * @Description: 
 */
require('events').EventEmitter.defaultMaxListeners = 0
const moment = require('moment')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const version = moment().format('YYYY-MM-DD-HH-mm-ss')
const config = {
  lintOnSave: false,
  indexPath: 'app.html',
  publicPath: '/',
  productionSourceMap: false,
  configureWebpack: {
    resolve: { extensions: [".js", ".json"] },
    module: {},
    devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-source-map',
    plugins: [

      new MiniCssExtractPlugin({
        // 修改打包后css文件名
        filename: `css/${version}/[name].[hash].css`,
        chunkFilename: `css/${version}/[name].[hash].css`
      })
    ],
    output: {
      filename: `js/${version}/[name].[hash].js`,
      chunkFilename: `js/${version}/[name].[hash].js`
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html'
    }
  },
  devServer: {
    host: 'localhost',
    https: false
  },
  css: {
    loaderOptions: {
      postcss: {}
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  }
}

module.exports = config



