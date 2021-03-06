var webpack = require ("webpack");
var path = require ("path");
var HtmlWebpackPlugin = require ("html-webpack-plugin");
var fs = require ("fs");

const ROOT = process.cwd ();
const packageJSON = JSON.parse (
  fs.readFileSync (path.resolve (ROOT, "package.json"), "utf8")
);

module.exports = {
  entry: ["babel-polyfill", path.resolve (ROOT, "src", "root.jsx")],
  output: {
    filename: "bundle.js",
    path: path.resolve (ROOT, "dist"),
    publicPath: ""
  },
  devtool: "source-map",
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin ({
      "process.env": {
        NODE_ENV: JSON.stringify (process.env.NODE_ENV || "production")
      }
    }),
    new HtmlWebpackPlugin ({
      title: packageJSON.name,
      favicon: path.resolve (ROOT, "resources", "favicon.ico"),
      template: path.resolve (ROOT, "src", "templates", "index.html"),
      inject: "body",
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(css|less)$/,
        loaders: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: "url-loader",
        options: {
          limit: "300000",
          name: "[name].[ext]",
          root: "."
        }
      }
    ]
  }
};
