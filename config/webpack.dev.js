var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

var host = helpers.getParameterValueFromOption("--host", "http://localhost")
var port = helpers.getParameterValueFromOption("--port", 8080);

var applicationDomainWithPath = "http://"+ host + ":" + port + "/";
console.log(applicationDomainWithPath);

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: applicationDomainWithPath,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
