var path = require("path");
const webpack = require("webpack");
const publicPath = "/dist/build/";

module.exports = {
  entry: "./index.js",
  devtool: "cheap-module-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],

  output: {
    path: path.join(__dirname, publicPath),
    filename: "[name].bundle.js",
    publicPath: publicPath,
    sourceMapFilename: "[name].map"
  },

  devServer: {
    port: 3000,
    host: "localhost",
    historyApiFallback: true,
    noInfo: false,
    stats: "minimal",
    publicPath: "/",
    contentBase: path.join(__dirname, "/"),
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ["babel-loader"]
      }
    ]
  }
};
