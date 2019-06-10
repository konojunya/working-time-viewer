const path = require("path");
const { DefinePlugin } = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const WorkerPlugin = require("worker-plugin");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  mode: IS_PRODUCTION ? "production" : "development",
  devtool: IS_PRODUCTION ? false : "#source-map",
  entry: {
    bootstrap: path.join(__dirname, "./src/index.tsx"),
    content_script: path.join(__dirname, "./src/extentions/content_script.ts"),
    background: path.join(__dirname, "./src/extentions/background.ts")
  },
  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js",
    sourceMapFilename: "[name].[hash].js.map",
    path: path.join(__dirname, "./dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".wasm"],
    modules: [path.join(__dirname, "node_modules")]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /dist/],
        loader: "ts-loader"
      },
      {
        test: /\.worker.ts$/,
        loader: "worker-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: ["source-map-loader"]
      }
    ]
  },
  plugins: [
    new WasmPackPlugin({ crateDirectory: path.join(__dirname, "wasm") }),
    new WorkerPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      chunks: ["bootstrap"]
    }),
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "local")
      }
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          compress: {
            warnings: false
          }
        }
      })
    ],
    concatenateModules: true
  }
};
