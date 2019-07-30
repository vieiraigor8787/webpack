const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.css$/, //critério: loader só esta lendo arquivo .css (regEx)
                use: [
                    'style-loader', //adiciona CSS a DOM injetando a tag <style>
                    'css-loader'//interpreta imports, url..
                ] 
            }
        ]
    }
}