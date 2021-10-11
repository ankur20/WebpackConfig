module.exports = {
  mode: "development",
  devtool: false,
  devServer: {
    static: "./dist", // in V3 (old webpack cli) you can use contentBase instead of static, live reloading.
  },
};
