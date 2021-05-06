const path = require('path');

module.exports = {
    mode: 'production', // 因为默认是production 默认会进行压缩
    entry: './src/index.js',
    externals: ['lodash'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        // libraryTarget: 'commonjs2',
        libraryTarget: 'umd',
        library: 'utils-js',
      },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
          },
        ]
    },
}
