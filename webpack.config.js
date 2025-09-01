const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/assets/js/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },

  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    static: "./dist",
    open: true,
    hot: true,
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"], // 👈 traite les <img src="...">
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][hash][ext][query]", // copie dans /dist/images/
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // ton template de base
      filename: "index.html",       // généré dans /dist
    }),
  ],
};
