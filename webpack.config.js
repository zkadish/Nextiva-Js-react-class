var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO: add the extract text plugin
// TODO: look at adding variables into the html
// TODO: add unit testing
// TODO: look at css modules

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: [/\.css$/, /\.scss$/],
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          { 
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: 'dist',
  }
}