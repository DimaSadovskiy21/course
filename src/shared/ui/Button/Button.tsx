import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted"
}

export enum SizeButton {
  M = "sizeM",
  L = "sizeL",
  XL = "sizeXl",
}

export type Props = {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = (props) => {
  const { className, theme, children, square, size, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [styles.square]: square,

  };

  return (
    <button
      className={classNames(styles.button, mods, [className, styles[theme], styles[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
