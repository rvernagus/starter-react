import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
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
<<<<<<< HEAD
      {test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader']}
=======
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader?minimize!sass-loader')}
>>>>>>> 9b3cf09e04feec6b7c0a05b28b625d664f37ceaf
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/web/html/index.html',
      filename: 'index.html',
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
}
