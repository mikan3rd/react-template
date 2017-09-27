var path = require('path');
var webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'development';
const sourcePath = path.join(__dirname, './public');
const buildPath = path.join(__dirname, './build');
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
  new webpack.HotModuleReplacementPlugin(),
  new DashboardPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(nodeEnv),
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
      'react-dom',
      'react-redux',
      'react-router',
      'react',
      'redux',
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
  devServer: {
    contentBase: './public/',
    historyApiFallback: true,
    port: 3030,
    compress: false,
    inline: true,
    hot: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/,
    },
  },
};
