const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js"
    },
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.(c|sc|sa)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}