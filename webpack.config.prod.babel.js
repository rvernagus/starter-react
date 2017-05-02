import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

export default {
  entry: {
    main:  path.resolve(__dirname, 'src/web/js/main.js')
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/wwwroot'),
    publicPath: '/'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.handlebars$/, loaders: ['raw-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/web/html/index.hbs',
      filename: '../views/index.hbs',
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
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
