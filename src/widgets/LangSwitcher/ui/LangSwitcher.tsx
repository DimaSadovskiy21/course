import { FC } from "react";
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./LangSwitcher.module.scss";

export enum LangSwitcherTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type Props = {
  className?: string;
  theme?: LangSwitcherTheme;
  short?: boolean
};

const LangSwitcher: FC<Props> = (props) => {
  const { className, theme = LangSwitcherTheme.PRIMARY, short } = props;
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = async () =>
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

  return (
    <Button
      className={classNames(styles.langSwitcher, {}, [
        className,
        styles[theme],
      ])}
      theme={ThemeButton.CLEAR}
      onClick={handleChangeLanguage}
    >
      {t(short ? "short-language" : "language")}
    </Button>
  );
};

export default LangSwitcher;
