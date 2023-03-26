import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { resolve, dirname, join } from "path";

export default {
  mode: "production",
  entry: {
    background: resolve(dirname(""), "src/js/core/background.js"),
    main: resolve(dirname(""), "src/js/core/main.js"),
  },
  output: {
    path: resolve(dirname(""), "dist"),
    filename: "[name].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(dirname(""), "src/index.html"),
    }),
    new HtmlWebpackPlugin({
      template: resolve(dirname(""), "src/popup.html"),
      inject: false,
      filename: "popup.html",
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: resolve(dirname(""), "src/vendor"), to: "vendor" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
