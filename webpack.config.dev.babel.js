import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

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
      {test: /\.ejs$/, loaders: ['raw-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/web/html/index.ejs',
      filename: '../views/index.ejs',
      inject: true
    })
  ]
}
