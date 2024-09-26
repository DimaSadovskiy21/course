import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.scss";

export type Props = {
  className?: string;
};

const Navbar: FC<Props> = (props) => {
  const { className } = props;

  const { t } = useTranslation("translation");

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/">
        {t("main")}
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        {t("about")}
      </AppLink>
    </div>
  );
};

export default Navbar;
