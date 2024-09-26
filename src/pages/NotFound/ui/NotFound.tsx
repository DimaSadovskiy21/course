import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./NotFound.module.scss";

type Props = {
  className?: string;
};

const NotFound: FC<Props> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(styles.notFoundWrapper, {}, [className])}>
      {t("page not found")}
    </div>
  );
};

export default NotFound;
