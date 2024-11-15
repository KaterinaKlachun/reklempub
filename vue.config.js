const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = defineConfig({
  publicPath: '/reklempub/',
  transpileDependencies: true,
  configureWebpack: async () => {
    // Динамический импорт модуля imagemin-mozjpeg
    const imageminMozjpeg = await import('imagemin-mozjpeg');

    return {
      plugins: [
        new webpack.DefinePlugin({
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
        }),
        new ImageMinimizerPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i, // Определяем типы файлов для оптимизации
          minimizer: {
            implementation: imageminMozjpeg.default, // Используем динамически импортированный плагин
            options: {
              quality: 80, // Параметры качества для изображения
            },
          },
        }),
      ],
    };
  },
});
