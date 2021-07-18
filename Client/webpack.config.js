const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: './src/index',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        publicPath:"/"
    },
    module:{
        rules:[
            {test: /\.(js)$/, use:"babel-loader"},
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
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        })
    ]
};