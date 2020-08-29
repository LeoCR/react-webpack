const path=require('path');
const webpack = require('webpack'); 
var HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports={
    entry:{
        app: path.resolve(__dirname, "src/index.js")
    },
    output:{
        path: path.resolve(__dirname, "build"),
        filename: '[name].js',
        publicPath:'/build/'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader:'babel-loader',
                options:{
                    presets:[
                        "@babel/env"
                    ]
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader',
                ]
            },
        ]
    },
    resolve: {
        extensions: ["*",".js", ".jsx"]
    },
    watch: true,
    devServer:{
        contentBase:[path.join(__dirname,'build/')],
        port:3000,
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            filename:'./index.html',
            template: "./public/index.html",
        }),
    ]
}