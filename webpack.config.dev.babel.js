import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

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
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']}
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
    })
  ]
}
