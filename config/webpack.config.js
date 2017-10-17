const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const commonConfig = {
  output: {
    path: path.resolve(__dirname + '/dist/')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
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
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
      filename: 'vue-pure-parallax.min.js',
      libraryTarget: 'window',
      library: 'VuePureParallax'
    }
  }),
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
      filename: 'vue-pure-parallax.js',
      libraryTarget: 'umd',
      library: 'vue-pure-parallax',
      umdNamedDefine: true
    }
  })
];
