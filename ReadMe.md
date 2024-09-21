#How to Install Webpack

- npm init -y
- npm install --save-dev webpack webpack-cli
- Create a "SRC" folder
- Create an index.js in SRC
- Create a webpack.config.js
  "// webpack.config.js
  const path = require("path");

module.exports = {
mode: "development",
entry: "./src/index.js",
output: {
filename: "main.js",
path: path.resolve(\_\_dirname, "dist"),
clean: true,
},
};
"
-npx webpack
-npm install --save-dev html-webpack-plugin
"// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
mode: "development",
entry: "./src/index.js",
output: {
filename: "main.js",
path: path.resolve(\_\_dirname, "dist"),
clean: true,
},
plugins: [
new HtmlWebpackPlugin({
template: "./src/index.html",
}),
],
};
"

- npm install --save-dev style-loader css-loader
  "// webpack.config.js
  const path = require("path");
  const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
mode: "development",
entry: "./src/index.js",
output: {
filename: "main.js",
path: path.resolve(\_\_dirname, "dist"),
clean: true,
},
plugins: [
new HtmlWebpackPlugin({
template: "./src/index.html",
}),
],
module: {
rules: [
{
test: /\.css$/i,
use: ["style-loader", "css-loader"],
},
],
},
};
"

- npm install --save-dev html-loader

"// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
mode: "development",
entry: "./src/index.js",
output: {
filename: "main.js",
path: path.resolve(\_\_dirname, "dist"),
clean: true,
},
plugins: [
new HtmlWebpackPlugin({
template: "./src/index.html",
}),
],
module: {
rules: [
{
test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
loader: "html-loader",
},
{
test: /\.(png|svg|jpg|jpeg|gif)$/i,
type: "asset/resource",
},
],
},
};
"

- npm install --save-dev webpack-dev-server

"// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
mode: "development",
entry: "./src/index.js",
output: {
filename: "main.js",
path: path.resolve(\_\_dirname, "dist"),
clean: true,
},
devtool: "eval-source-map",
devServer: {
watchFiles: ["./src/index.html"],
},
plugins: [
new HtmlWebpackPlugin({
template: "./src/index.html",
}),
],
module: {
rules: [
{
test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
loader: "html-loader",
},
{
test: /\.(png|svg|jpg|jpeg|gif)$/i,
type: "asset/resource",
},
],
},
};
"
