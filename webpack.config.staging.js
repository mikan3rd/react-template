var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'development';
const sourcePath = path.join(__dirname, './public');
const buildPath = path.join(__dirname, './_build');
const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor-[hash].js',
  }),
  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index_develop.html'),
    path: buildPath,
    filename: 'index.html',
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(nodeEnv),
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
      drop_console: false,
    },
    output: {
      comments: false,
    },
  }),
];

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      'eslint-loader',
    ],
    enforce: 'pre',
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
    ],
  },
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  },
];

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    js: path.join(__dirname, 'app/assets/javascripts/src/index.js'),
    vendor: [
      'babel-polyfill',
      "change-case",
      "chart.js",
      "dateformat",
      'react-dom',
      'react-redux',
      'react-router',
      'react',
      'redux',
      "es6-promise",
      "geolib",
      "jquery",
      "material-ui",
      "react-chartjs-2",
      "react-clipboard-icon",
      "react-cookie",
      "react-copy-to-clipboard",
      "react-lazyload",
      "react-router-redux",
      "react-tap-event-plugin",
      "redux-saga",
    ],
  },
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'app-[hash].js',
  },
  plugins,
  module: {
    rules,
  },
};
