const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.jsx',
  },

  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: path.join(__dirname, '/dist'),
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        include: [
          path.resolve(__dirname, 'src/icons'),
        ],
        loader: 'svg-sprite-loader',
        options: { extract: false },
        test: /\.svg$/,
      },
      {
        exclude: /node_modules/,
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.join(__dirname, '/src/stylesheets')],
              },
            },
          },
        ],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: false,
    })],
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      stylesheets: path.resolve(__dirname, 'src/stylesheets'),
      icons: path.resolve(__dirname, 'src/icons'),
    },
    extensions: ['.js', '.jsx', './index.js'],
  },
};
