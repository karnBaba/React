var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry:  SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                          loader: "css-loader"
                        },
                        {
                          loader: "less-loader"  
                        }
                    ],
                    fallback: "style-loader"
                })

            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000' 
            },
            {
                test: /\.(jpe*g|png|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../images/'
                    }
                }]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {  
                test: /\.jsx?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react']
                }
            }
            
        ]
       
    },
    resolve: {
        extensions: ['.js', '.jsx'],
   },
   externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:8080'
        })
    },
   plugins: [
    new ExtractTextPlugin("[name].css")
    //if you want to pass in options, you can do so:
    //new ExtractTextPlugin({
    //  filename: 'style.css'
    //})
  ]
};

module.exports = config;
