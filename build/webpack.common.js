const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const extractCSS = new MiniCssExtractPlugin({
    filename: "[name]/index.min.css", //规定打包后css叫什么名称
    chunkFilename: 'style/[name].[hash].chunk.css',
    ignoreOrder: false, // Enable to remove warnings about conflicting order
});
// const extractLESS = new MiniCssExtractPlugin({
//     filename: "[name]/ven.min.css", //规定打包后css叫什么名称
//     // chunkFilename: 'chunk/[name].[hash].chunk.css',
//     ignoreOrder: false, // Enable to remove warnings about conflicting order
// });

function resolve(dir) {
    return path.resolve(__dirname, '../', dir)
}
module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        chunkFilename: 'chunk/[name].[hash].chunk.js',
        filename: '[name].bundle.js',
        path: resolve('dist')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@src': resolve('src')
        }
    },
    plugins: [
        // extractLESS,
        extractCSS,
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                chunks: ['app']
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
        }),
        // 配置全局变量
        new webpack.ProvidePlugin({
            _: 'lodash',
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
    module: {
        rules: [
            // {
            //     test: /\.(less)$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         "css-loader",
            //         {
            //             loader: "less-loader",
            //             options: {
            //                 javascriptEnabled: true,
            //                 importLoaders: 1,
            //                 modules: true
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.js|.jsx?$/,
                // exclude: /(node_modules)/,
                exclude: /(node_modules|bower_components)/,
                loaders: ["babel-loader"],
                include: [
                    resolve('src'),
                    resolve('node_modules')
                ],
            },

            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[contenthash].[ext]',
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name:'fonts/[contenthash].[ext]'
                }
            },
        ]
    }
};