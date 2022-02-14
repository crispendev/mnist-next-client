import React from "react";
import Head from "../Head/Head";
import styles from "./Layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head />
      <div className={styles.layout}>{children}</div>;
    </div>
  );
};
export default Layout;
