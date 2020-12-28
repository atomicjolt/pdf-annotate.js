/**
* Credit: MasterOdin & mzabriskie
* https://github.com/Submitty/pdf-annotate.js
* Changes to support pdfjs-dist v2.4.456
*/
const path = require('path');

module.exports = {
  entry: './docs/main.js',

  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'docs', '__build__'),
    publicPath: '/__build__/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
};
