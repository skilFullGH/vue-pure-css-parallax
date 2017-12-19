const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const babel = require('../config/babel')
const vue = require('../config/vue')

const dir = path.join(__dirname, '..')

const commonConfig = {
  output: {
    path: path.resolve(path.join(dir, 'dist'))
  },
  module: {
    rules: [
      babel(),
      vue(),
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ]
}

module.exports = [
  merge(commonConfig, {
    entry: path.resolve(path.join(dir, '/src/index.js')),
    output: {
      filename: 'vue-pure-parallax.min.js',
      libraryTarget: 'window',
      library: 'VuePureParallax'
    }
  }),
  merge(commonConfig, {
    entry: path.resolve(path.join(dir, '/src/index.js')),
    output: {
      filename: 'vue-pure-parallax.js',
      libraryTarget: 'umd',
      library: 'vue-pure-parallax',
      umdNamedDefine: true
    }
  })
]
