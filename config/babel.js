const path = require('path')

module.exports = function () {
  return {
    test: /\.js$/,
    exclude: [
      /(node_modules|bower_components)/
    ],
    include: path.join(__dirname, '..'),
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            'env'
          ]
        }
      }
    ]
  }
}
