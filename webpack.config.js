const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Uglfyjspl = require('uglifyjs-webpack-plugin')
const optmizeCSSAssetsWpPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
            new Uglfyjspl({
                cache: true,
                parallel: true
            }),
            new optmizeCSSAssetsWpPlugin({})
        ]
    },
    plugins: [ 
        new MiniCssExtractPlugin({
            filename: "estilo.css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/, //critério: loader só esta lendo arquivo .css (regEx) // 
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', //adiciona CSS a DOM injetando a tag <style>
                    'css-loader',//interpreta imports, url..
                    'sass-loader'
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [ 'file-loader' ]
            }
        ]
    }
}