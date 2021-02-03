const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./js/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.m&js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preser-env"],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              ["@babel/plugin-proposal-class-properties", { loose: true }],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./index.html",
      minify: false,
    }),
  ],
};
