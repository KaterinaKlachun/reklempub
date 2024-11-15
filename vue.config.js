const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/reklempub/',
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
      }),
    ],
  },
})
