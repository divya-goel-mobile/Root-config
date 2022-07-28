const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "app";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object

    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      new CopyPlugin({
        patterns: [
          { from: "importmap.json", to: "" },
          { from: "staticwebapp.config.json", to: "" },
        ],
      }),
    ],
  });
};
