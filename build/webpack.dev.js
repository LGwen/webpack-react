const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const apiMocker = require('mocker-api');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // hot: false,
        // inline: true,
        contentBase: './dist',
        host: process.env.HOST,
        port: process.env.PORT && Number(process.env.PORT),
        compress: true,
        //Be possible go back pressing the "back" button at chrome
        historyApiFallback: true,
        noInfo: false,
        before(app) {
            apiMocker(app, path.resolve(__dirname, '../', 'mocker/api.js'), {
                proxy: {
                    '/api/*': 'https://api.github.com/',
                },
                changeHost: true,
            });
        },
        watchOptions: {
            poll: false
        },

    }
});