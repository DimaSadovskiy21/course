import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export type Props = {
  className?: string;
  theme?: AppLinkTheme;
} & LinkProps;

const AppLink: FC<Props> = (props) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      className={classNames(styles.appLink, {}, [className, styles[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;