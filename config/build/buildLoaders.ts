import { RuleSetRule } from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildTSLoader } from "./loaders/buildTSLoader";
import { buildSVGRLoader } from "./loaders/buildSVGRLoader";

export const buildLoaders = (isDev: boolean): RuleSetRule[] => {
  const typescriptLoader = buildTSLoader();

  const styleLoader = buildCssLoader(isDev);

  const svgLoader = buildSVGRLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [typescriptLoader, styleLoader, svgLoader, fileLoader];
};
