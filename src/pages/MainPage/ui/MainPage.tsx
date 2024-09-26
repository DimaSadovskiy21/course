import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { BugButton } from "app/providers/ErrorBoundary";
import "app/styles/index.scss";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <div className={classNames("wrapper", {}, [])}>
      <BugButton />
      {t("main page")}
    </div>
  );
};

export default MainPage;
