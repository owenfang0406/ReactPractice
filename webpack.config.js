const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },

  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
  },
  module: {
    rules: [
      {
        // 多一個 jsx 的解析
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
    },
    {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: "babel-loader",
    },
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};