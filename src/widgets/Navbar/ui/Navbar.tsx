import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";

export type Props = {
  className?: string;
};

const Navbar: FC<Props> = (props) => {
  const { className } = props;

  return <div className={classNames(styles.navbar, {}, [className])} />;
};

export default Navbar;
