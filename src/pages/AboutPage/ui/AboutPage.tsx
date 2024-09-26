import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import "app/styles/index.scss";

const AboutPage = () => {
  const { t } = useTranslation("about");

  return <div className={classNames("wrapper", {}, [])}>{t("about us")}</div>;
};

export default AboutPage;
