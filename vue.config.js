const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  productionSourceMap: false,
  publicPath: './',

  // 配置路径别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@comp', resolve('src/components'))
  },

  devServer: {
    port: new Date().getFullYear(),
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://www.baidu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}