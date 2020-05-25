'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptmizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

//const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: false
    },
    plugins: [
        // new CompressionWebpackPlugin({ //gzip 压缩
        //     test: /\.js(\?.*)?$/i,
        // })
        new ProgressBarPlugin({
            complete: '=',
            format: '  [:bar] ' + (':percent') + ' (:elapsed seconds)',
            clear: false,
        }),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                uglifyOptions: {
                    ie8: false,
                    compress: {
                        drop_console: true,
                        pure_funcs: ['console.log']
                    },
                    warnings: false,
                    output: {
                        comments: false,
                        beautify: false,
                    },
                    sourceMap: false
                },
            }),
            // css 压缩
            new OptmizeCssAssetsWebpackPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    safe: true,
                    discardComments: {
                        removeAll: true
                    }
                }
            })
        ],
        // runtimeChunk: true,
        namedModules: true,
        splitChunks: {
            chunks: "all",
            minSize: 0,
            cacheGroups: {
                styles: {
                    test: /\.css$/,
                    name: 'styles',
                    chunks: 'all',
                    priority: 1,
                    enforce: true
                },
                react: {
                    test: /[\\/]node_modules[\\/](react|redux|react-router)[\\/]$/,
                    name: 'react',
                    chunks: 'all',
                    priority: 1,
                    enforce: true
                },
                // lodash: {
                //     test: /[\\/]node_modules[\\/](lodash)[\\/].*\.js$/,
                //     name: 'lodash',
                //     chunks: 'all',
                //     priority: 3,
                //     enforce: true
                // },
                jq: {
                    test: /[\\/]node_modules[\\/](jquery)[\\/].*\.js$/,
                    name: 'jq',
                    chunks: 'all',
                    priority: 2,
                    enforce: true
                }
            }
        }
    }
});