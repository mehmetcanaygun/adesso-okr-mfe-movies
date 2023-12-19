const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/',
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'movieSearch',
      filename: 'remoteEntry.js',
      exposes: {
        './MovieSearchApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv(),
  ],
};

module.exports = merge(commonConfig, devConfig);
