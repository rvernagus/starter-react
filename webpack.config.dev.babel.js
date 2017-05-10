import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import nodeExternals from 'webpack-node-externals'

export default [
  {
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
        {test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader')},
        {test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader']}
      ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: true
      }),
      new HtmlWebpackPlugin({
        template: 'src/web/html/app.html',
        filename: 'app.html',
        inject: true
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
      main:  path.resolve(__dirname, 'src/server/devServer.js')
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
