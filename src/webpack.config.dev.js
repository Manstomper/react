const prodConfig = require('./webpack.config.js');
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(prodConfig, {
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
    }),
    new StylelintPlugin(),
  ],
});
