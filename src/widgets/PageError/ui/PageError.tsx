import { FC } from "react";
import { useTranslation } from "react-i18next";
import "app/styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/Button";
import styles from "./PageError.module.scss";

type Props = {
  className?: string;
};

const PageError: FC<Props> = (props) => {
  const { className } = props;

  const { theme } = useTheme();
  const { t } = useTranslation();

  const handleReloadPage = () => location.reload();

  return (
    <div
      className={classNames(styles.pageError, {}, ["app", theme, className])}
    >
      <p>{t("something went wrong")}</p>
      <Button onClick={handleReloadPage}>{t("reload page")}</Button>
    </div>
  );
};

export default PageError;
