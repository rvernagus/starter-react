import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  devtool: 'source-map',
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
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader')}
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/web/html/index.html',
      filename: 'index.html',
      inject: true
    }),
    new ExtractTextPlugin({
      filename: 'main.css',
      disable: false,
      allChunks: true
    })
  ]
}
