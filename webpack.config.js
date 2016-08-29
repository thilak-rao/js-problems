var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
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
