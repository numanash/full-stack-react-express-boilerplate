const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./client/public/index.html",
    filename: path.join('./', 'dist', 'index.html')
});

module.exports = {
    mode: "development",
    entry: "./client/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[hash].js",
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    plugins: [htmlPlugin],
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: { name: '/images/[name].[ext]' }
            }
        ]
    }
};