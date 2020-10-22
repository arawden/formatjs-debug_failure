const path = require("path");
const transform = require("@formatjs/ts-transformer").transform;

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.tsx"),
  },
  devtool: "inline-source-map",
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: "ts-loader",
        options: {
          getCustomTransformers() {
            return {
              before: [
                transform({
                  extractFromFormatMessageCall: true,
                  overrideIdFn: "[sha512:contenthash:base64:6]",
                  ast: true,
                }),
              ],
            };
          },
        },
      },],
      exclude: /node_modules/,
    },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
}