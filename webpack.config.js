const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require('path');

const CPU_NUMBER = require('os').cpus().length;

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
        new ForkTsCheckerWebpackPlugin({
            memoryLimit: 4096,
            eslint: false,
            tslint: false,
            checkSyntacticErrors: true,
            measureCompilationTime: true,
            tsconfig: __dirname + "/tsconfig.json",
            workers: Math.max(CPU_NUMBER - 2, 1),
            async: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0',
        socket: '/tmp/crm-frontend-server.csilence.sock',
        disableHostCheck: true
    }
};
