
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const HTML_WebpackPlugin = require('html-webpack-plugin')
const IsDev = NODE_ENV === 'development'

function setupDevTool() {
    if(IsDev) return 'eval';
    return 'false';
}

module.exports =  {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        }]
    },
    plugins: [
        new HTML_WebpackPlugin({template: path.resolve(__dirname, 'index.html')})
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: IsDev,
    },
    devtool: setupDevTool(),
};