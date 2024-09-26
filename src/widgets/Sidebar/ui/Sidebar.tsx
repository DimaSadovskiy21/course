import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import ThemeSwitcher from "widgets/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher";
import Button from "shared/ui/Button/Button";
import styles from "./Sidebar.module.scss";

type Props = {
  className?: string;
};

const Sidebar: FC<Props> = (props) => {
  const { className } = props;

  const { t } = useTranslation("translation");

  const [collapsed, setCollapsed] = useState(false);

  const onToggleHandler = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button data-testid="toggleBtn" onClick={onToggleHandler}>
        {t("toggle")}
      </Button>
      <div className={styles.swithersBlock}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
