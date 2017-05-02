import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  devtool: 'source-map',
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
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/web/html/index.hbs',
      filename: '../views/index.hbs',
      inject: true
    })
  ]
}
