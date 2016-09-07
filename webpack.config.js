var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: {
        app: './main.js'
    },
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    plugins: [
        new LiveReloadPlugin({
            appendScriptTag: true
        })
    ]
};
