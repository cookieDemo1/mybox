// const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  publicPath: './',
  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      alias:{
        // 默认已经配置了'@'别名
        // '@': 'src',
        // vue cli3中别名可以使用@
        '_assets': '@/assets',
        '_store': '@/store',
        '_components': '@/components',
        '_router': '@/router',
        '_views': '@/views',
        '_api': '@/api',
        '_utils': '@/utils'
      }
    },
  },
  // webpack配置
  // configureWebpack: {

    // optimization: {
    //   // js代码压缩
    //   minimizer: [
    //     new UglifyJsWebpackPlugin({
    //       uglifyOptions: {
    //         warnings: false,
    //         compress: {
    //           pure_funcs: ['console.log']
    //         }
    //       }
    //     })
    //   ],
    //   // 公共代码抽离
    //   splitChunks: {
    //     cacheGroups: {
    //       vendor: {
    //         chunks: 'all',
    //         test: /node_modules/,
    //         name: 'vendor',
    //         minChunks: 1,
    //         maxInitialRequests: 5,
    //         minSize: 0,
    //         priority: 100
    //       },
    //       common: {
    //         chunks: 'all',
    //         test: /[\\/]src[\\/]js[\\/]/,
    //         name: 'common',
    //         minChunks: 2,
    //         maxInitialRequests: 5,
    //         minSize: 0,
    //         priority: 60
    //       },
    //       styles: {
    //         name: 'styles',
    //         test: /\.(sa|sc|c)ss$/,
    //         chunks: 'all',
    //         enforce: true,
    //       },
    //     },
    //   }
    // }
  // },

  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/cgi-bin': {
        target: 'http://172.16.14.100/cgi-bin/',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/cgi-bin': ''
        }
      }
    }
  }
}