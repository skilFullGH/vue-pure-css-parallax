const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const dir = __dirname + '/..'

const commonConfig = {
  output: {
    path: path.resolve(dir + '/dist/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /(node_modules|bower_components)/
        ],
        include: [
          dir
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      // {
      //   test: /\.css$/,
      //   use: 'style!less!css'
      // }
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

// module.exports = [
//   merge(commonConfig, {
//     entry: path.resolve(dir + '/src/index.js'),
//     output: {
//       filename: 'vue-pure-parallax.min.js',
//       libraryTarget: 'window',
//       library: 'VuePureParallax'
//     }
//   }),
//   // merge(commonConfig, {
//   //   entry: path.resolve(dir + '/src/index.js'),
//   //   output: {
//   //     filename: 'vue-pure-parallax.js',
//   //     libraryTarget: 'umd',
//   //     library: 'vue-pure-parallax',
//   //     umdNamedDefine: true
//   //   }
//   // })
// ];

module.exports = {
  entry: path.resolve(dir + '/src/index.js'),
  output: {
    path: path.resolve(dir + '/dist/'),
    filename: 'vue-pure-parallax.min.js',
    libraryTarget: 'window',
    library: 'VuePureParallax'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /(node_modules|bower_components)/
        ],
        include: [
          dir
        ],
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            {
              "targets": {
                "browsers": ["last 2 versions", "ie >= 8"]
              }
            }
          ]
        }
      },
      // {
      //   test: /\.vue$/,
      //   use: 'vue-loader'
      // },
      // {
      //   test: /\.css$/,
      //   use: 'style!less!css'
      // }
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
