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
      .set('comp', resolve('examples/components'))
  },

  devServer: {
    port: 2019,
    host: 'localhost'
  }
}