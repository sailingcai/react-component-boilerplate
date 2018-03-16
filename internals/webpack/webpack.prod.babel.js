// Important modules this config uses
const path = require('path');
const webpack = require('webpack');

module.exports = require('./webpack.base.babel')({
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(process.cwd(), 'src/index.js'),
  ],
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  // antd的便捷导入支持
  babelQuery: {
    plugins: [
      ['import', {
        libraryName: 'antd',
        style: true,
      }],
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    }),
  ],
  devtool: 'source-map',
});
