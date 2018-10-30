const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
//   optimization: {
//     minimize: false,
//     minimizer: [new UglifyJsPlugin({
//       include: /\.min\.js$/
//     })]
//   }
};