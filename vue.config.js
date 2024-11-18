const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const path = require('path');
const glob = require('glob-all');

module.exports = defineConfig({
  publicPath: '/reklempub/',
  transpileDependencies: true,
  configureWebpack: async () => {
    // Динамический импорт модуля imagemin-mozjpeg
    const imageminMozjpeg = await import('imagemin-mozjpeg');

    return {
      optimization: {
        minimize: true, // Минификация JS и CSS
      },
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
        new PurgeCSSPlugin({
          paths: glob.sync([
            path.join(__dirname, './src/**/*.vue'), // Поиск используемых классов в .vue файлах
            path.join(__dirname, './public/index.html'), // и в HTML
          ]),
          safelist: ['safelist-class'], // Исключите классы, которые не должны удаляться
        }),
      ],
    };
  },
  css: {
    extract: true, // Вынесение CSS в отдельные файлы
    sourceMap: false, // Отключение карт кода для продакшна
  },
});
