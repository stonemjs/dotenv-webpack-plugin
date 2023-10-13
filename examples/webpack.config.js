const path = require('path')
const CopyPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DotenvWebpack } = require('../dist/index.js')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.mjs'),
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new DotenvWebpack({
      expand: true,
      path: './.env.public',
      ignoreProcessEnv: false,
      prefix: 'process.__env__',
    }),
    new CopyPlugin({
      patterns: [
        { from: './.env' },
        { from: './.env.public' },
      ],
    }),
  ],
  output: {
    libraryTarget: 'umd',
    filename: 'index.js',
    globalObject: 'this',
    library: 'StoneJSDotenvExample',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ]
  }
}
