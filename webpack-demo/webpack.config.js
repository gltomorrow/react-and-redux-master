/* eslint-env node */

const path = require('path');
const webpack = require('webpack');
const S3Plugin = require('webpack-s3-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/**
 * ROOT defines the directory containing all static resources.
 */
const ROOT = path.resolve(__dirname, 'static-content');

/**
 * SRC defines the location, within the ROOT directory, where your primary source/entry
 * point file is located.
 */
const SRC = path.resolve(ROOT, 'react');

/**
 * DEST defines the location where the output of the Webpack build goes.
 */
const DEST = path.resolve(__dirname, 'build/webpack/dist');

/**
 * APP_ENTRY_POINT defines the JavaScript file that will serve as the starting point from which Webpack
 * determines the files that will be included in the generated bundle.
 */
const APP_ENTRY_POINT = `${SRC}/Index.jsx`;

/**
 * VENDOR_MODULES defines the list of modules that should be added to the "vendor.js" bundle, seperate from
 * the source "bundle.js".
 */
const VENDOR_MODULES = ['react', 'react-dom', 'react-redux', 'redux', 'redux-logger', 'redux-thunk', 'moment'];

function getSourceMapType(env={}) {
    const isJenkins = (env.buildEnv === 'jenkins');
    if (isJenkins) {
        return 'cheap-module-source-map';
    }
    return 'source-map';
}

function getPlugins(env={}) {
    const plugins = [];
    const gitHash = env.gitHash || 'local';
    const isJenkins = (env.buildEnv === 'jenkins');

    if (isJenkins) {
        plugins.push(new webpack.DefinePlugin({
            /*
             * By setting process.env.NODE_ENV='production' Webpack will use the production builds
             * of libraries such as React to minimize bundle size.
             */
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }));

        plugins.push(new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                screw_ie8: true
            }
        }));

        plugins.push(new S3Plugin({
            include: /.*\.(css|js)/,
            s3Options: {
                accessKeyId: process.env.S3_ASSETS_ACCESS_KEY,
                secretAccessKey: process.env.S3_ASSETS_SECRET_KEY,
                region: ""
            },
            s3UploadOptions: {
                Bucket: "ewe-assets/epc/epc-compensation-rule-web/" + gitHash + "/assets",
                CacheControl: 'max-age=315360000, no-transform, public',
                ContentEncoding: 'gzip'
            },
            cdnizerOptions: {
                defaultCDNBase: 'https://s3.amazonaws.com'
            }
        }));

        plugins.push(new CompressionPlugin({
            asset: '[path][query]',
            algorithm: 'gzip',
            test: /\.js$|\.html$/,
            threshold: 0,
            minRatio: 0.8
        }));
    }

    plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

    // ONLY INCLUDE THE SUPPORTED LOCALES FROM MOMENT TO REDUCE BUNDLE SIZE
    plugins.push(new webpack.ContextReplacementPlugin(
        /moment[\\/]locale$/,
        /^\.\/(cs|da|de|el|en|en-gb|es|fi|fr|hr|hu|id|it|ja|ko|nl|nb|pl|pt|pt-br|ru|sv|th|tr|vi|zh-cn|zh-tw)$/
    ));

    plugins.push(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js',
        minChunks: function(module) {
            // this assumes your vendor imports exist in the node_modules directory
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }));

    plugins.push(new BundleAnalyzerPlugin({
        generateStatsFile: true,
        analyzerMode: 'static',
        openAnalyzer: false
    }));

    return plugins;
}

module.exports = function(env) {
    return {
        devtool: getSourceMapType(env),
        entry: {
            bundle: ['babel-polyfill', APP_ENTRY_POINT],
            vendor: VENDOR_MODULES
        },
        plugins: getPlugins(env),
        resolve: {
            modules: [
                path.resolve(ROOT, 'less'),
                path.resolve(ROOT, 'react'),
                'node_modules'
            ],
            extensions: ['.js', '.jsx']
        },
        output: {
            path: DEST,
            filename: '[name].js',
            publicPath: '/dist/'
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
};