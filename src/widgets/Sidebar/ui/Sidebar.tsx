import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import ThemeSwitcher from "widgets/ThemeSwitcher";
import LangSwitcher, { LangSwitcherTheme } from "widgets/LangSwitcher";
import Button, { SizeButton, ThemeButton } from "shared/ui/Button/Button";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./Sidebar.module.scss";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";

type Props = {
  className?: string;
};

const Sidebar: FC<Props> = (props) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggleHandler = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="toggleBtn"
        className={styles.collapseBtn}
        onClick={onToggleHandler}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={SizeButton.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={styles.links}>
        <AppLink
          className={styles.link}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
        >
          <MainIcon className={styles.icon} />
          <span className={styles.textLink}>{t("main")}</span>
        </AppLink>

        <div>
          <AppLink
            className={styles.link}
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
          >
            <AboutIcon className={styles.icon} />
            <span className={styles.textLink}>{t("about")}</span>
          </AppLink>
        </div>
      </div>
      <div className={styles.swithersBlock}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} theme={LangSwitcherTheme.SECONDARY} />
      </div>
    </div>
  );
};

export default Sidebar;
