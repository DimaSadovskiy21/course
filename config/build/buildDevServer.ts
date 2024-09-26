import { Configuration } from "webpack-dev-server";
import { TBuildOptions } from "./types/config";

export const buildDevServer = (options: TBuildOptions): Configuration => {
  const { port } = options;

  return { port, open: true, historyApiFallback: true };
};
