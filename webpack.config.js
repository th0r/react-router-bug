var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: {
        main: __dirname + '/client.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public/scripts',
        publicPath: '/scripts'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx' }
        ]
    }
};
