module.exports = {
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            'stage-0',
            'env'
          ]
        }
      }
    ]
  }
}