const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = defineConfig({
  publicPath: '/reklempub/',
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
      }),
      new ImageMinimizerPlugin({
        minimizerOptions: {
          plugins: [
            ['mozjpeg', { quality: 70 }],
            ['pngquant', { quality: [0.6, 0.8] }],
            ['webp', { quality: 75 }],
          ],
        },
      }),
    ],
  },
})
