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
    port: 2019,
    host: 'localhost',
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}