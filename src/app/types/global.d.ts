declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classnames: IClassNames;
  export = classnames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const SVG: FC<SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS__DEV__: boolean;
