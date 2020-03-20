const webpack = require('webpack');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require('path');

const scriptLoaders = [{
    loader: 'ts-loader',
    options: {
        happyPackMode: true,
        configFile: __dirname + "/tsconfig.json"
    }
}];

module.exports = {
    context: __dirname,
    entry: ["./src/index.tsx"],
    mode: 'development',
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                include: /src/,
                use: scriptLoaders
            },
            {
                test: /\.(js|jsx)$/,
                use: 'react-hot-loader/webpack',
                include: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve( __dirname, 'src/index.html' ),
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
    }
};
