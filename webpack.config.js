var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: "/src",
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test : /\.jsx?/,
        include : APP_DIR,
        use: [
          {loader: "babel-loader"}
        ]
    }]
  },
  plugins: [
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/',
    },
    {
      reload: false
    })
  ]
//   devServer: {
//     contentBase: __dirname + "/src/public/",
//     port: 8080,
// },
};

module.exports = config;
