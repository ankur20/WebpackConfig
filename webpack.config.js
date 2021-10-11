module.exports = {
  mode: "development",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    static: "./dist", // in V3 (old webpack cli) you can use contentBase instead of static, live reloading.
  },
};
