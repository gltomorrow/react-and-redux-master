const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const SRC = path.resolve(__dirname, 'src');

const VENDOR_MODULES = ['react', 'react-dom', 'react-redux', 'redux', 'redux-logger', 'redux-thunk', 'moment'];
const APP_ENTRY_POINT =  `${SRC}/index.js`;

const appHtml = path.resolve(__dirname, 'public/index.html');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js',
        bundle: ['babel-polyfill', APP_ENTRY_POINT],
        vendor: VENDOR_MODULES
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            inject: true,
            template: appHtml
        })
    ],
    resolve: {
        modules: [
            path.resolve(SRC, '*'),
            'node_modules'
        ],
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            // Support React Native Web
            // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
            'react-native': 'react-native-web'
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: SRC,
                use: [
                    { loader: 'babel-loader', options: { presets: ['env', 'react'] } },
                    { loader: 'eslint-loader' }
                ]
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'csslint-loader', 'less-loader'] },
            { test: /\.svg$/, use: ['svg-url-loader'] }
        ]
    }
};