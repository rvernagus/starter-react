import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default [
  {
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
        {test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader?minimize!sass-loader')}
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
    target: 'node',
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
