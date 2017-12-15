const path = require('path')

module.exports = function () {
  return {
    test: /\.vue$/,
    exclude: [
      /(node_modules|bower_components)/
    ],
    include: path.join(__dirname, '..'),
    use: [
      {
        loader: 'vue-loader',
        options: {
          loaders: {
            js: {
              loader: 'babel-loader',
              options: {
                presets: [
                  'env'
                ]
              }
            }
            // js: 'babel-loader!eslint-loader'
          },
          esModule: true
        }
      }
    ]
  }
}
