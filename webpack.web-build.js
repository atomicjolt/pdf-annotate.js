/**
* Credit: MasterOdin & lopezjo
* https://github.com/Submitty/pdf-annotate.js
* Changes to support pdfjs-dist v2.4.456
*/
const path = require('path');

module.exports = {
  devtool: 'source-map',
  plugins: [],
  entry: 'index.js',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'web-dist'),
    library: 'PDFAnnotate',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['add-module-exports']
        }
      }
    ]
  }
};
