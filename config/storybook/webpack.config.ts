import { buildSVGRLoader } from "../build/loaders/buildSVGRLoader";
import { Configuration, RuleSetRule } from "webpack";
import { resolve } from "path";

import { TBuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildTSLoader } from "../build/loaders/buildTSLoader";

export default ({ config }: { config: Configuration }) => {
  const paths: TBuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: resolve(__dirname, "..", "..", "src"),
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module?.rules.push(buildTSLoader(true));
  config.module?.rules.push(buildSVGRLoader());
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");
  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
