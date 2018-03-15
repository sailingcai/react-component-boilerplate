// Important modules this config uses
const path = require('path');
const webpack = require('webpack');

module.exports = require('./webpack.base.babel')({
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(process.cwd(), 'src/index.js'),
  ],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },

  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    }),
  ],
  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
});
