import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import nodeExternals from 'webpack-node-externals'

export default [
  {
    entry: {
      main:  path.resolve(__dirname, 'src/web/js/main.jsx')
    },
    target: 'web',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/wwwroot'),
      publicPath: '/'
    },
    module: {
      loaders: [
        {test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader?minimize!sass-loader')},
        {test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader']}
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/web/html/app.html',
        filename: 'app.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        },
        inject: true,
        hash: true,
        showErrors: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin({
        filename: 'main.css',
        disable: false,
        allChunks: true
      })
    ]
  },
  {
    entry: {
      main:  path.resolve(__dirname, 'src/server/prodServer.js')
    },
    externals: [nodeExternals()],
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']}
      ]
    },
    plugins: [ ]
  }
]
