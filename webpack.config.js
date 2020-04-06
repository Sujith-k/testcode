const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8031
    },
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          } 
        ]
    },
    plugins: [
      new CopyPlugin([
        { from: 'src/assets/', to: 'dist' }
      ]),
    ],
}