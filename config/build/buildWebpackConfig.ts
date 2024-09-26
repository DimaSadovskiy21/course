import { Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";
import { TBuildOptions } from "./types/config";

export const buildWebpackConfig = (options: TBuildOptions): Configuration => {
  const { mode, paths, isDev } = options;

  const { entry, build, html } = paths;

  return {
    mode: mode,
    entry,
    output: {
      filename: "[name].[contenthash].bundle.js",
      path: build,
      clean: true,
    },
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(paths.src),
    plugins: buildPlugins(html, isDev),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
