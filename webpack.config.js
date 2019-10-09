const path = require("path");
const webpack = require("webpack");
const HTMLwebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./frontend/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public/"),
    port: 8080,
    // publicPath: "http://localhost:3000",
    compress:true,
    proxy: {
     "/": 'http:/localhost:3000'
    },
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  new HTMLwebpackPlugin({
    template:'index.html'
  })]
};