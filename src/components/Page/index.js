import React, { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./Page.module.sass";
import Header from "../Header";
import Footer from "../Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Page = ({ headerHide, children, footerHide, headerWide }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    clearAllBodyScrollLocks();
  }, [pathname]);

  return (
    <>
      <div className={styles.page}>
        {!headerHide && <Header headerWide={headerWide} />}
        <div className={styles.inner}>{children}</div>
        <ToastContainer/>
        {!footerHide && <Footer />}
      </div>
      
    </>
  );
};

export default withRouter(Page);
