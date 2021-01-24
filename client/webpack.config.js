const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {test: /\.css$/, use:['style-loader','css-loader']},
          {test: /\.less$/, loader:["style-loader","css-loader",{loader:"less-loader",options:{lessOptions:{javascriptEnabled:true}}}]}
        ]
    },
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:5000',
            secure: false,
            changeOrigin: true

          },
 
        },
        historyApiFallback: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: './public/index.html'
        })
      ]
  }