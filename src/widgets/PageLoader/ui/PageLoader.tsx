import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import Loader from "shared/ui/Loader";
import styles from "./PageLoader.module.scss";

type Props = {
  className?: string;
};

const PageLoader: FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.pageLoaderWrapper, {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
