import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

export type Props = {
  className?: string;
  theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = (props) => {
  const { className, theme, children, ...otherProps } = props;

  return (
    <button
      className={classNames(styles.button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
