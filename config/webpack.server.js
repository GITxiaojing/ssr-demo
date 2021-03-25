const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: path.resolve(__dirname, '../src/server/index.js'),
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../build')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
           'react',
           'stage-0',
           'env',
          ]
        }
      }
    ]
  }
}