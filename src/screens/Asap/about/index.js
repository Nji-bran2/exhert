import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./AboutUs.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import OrderForm from "../../../components/OrderForm";


const AboutUs = ({ scrollToRef }) => {
  return (
    <div className={cn("section-mb0", styles.download)}>
      <div className={cn("container", styles.container)}>
        
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>What is ExHert</h2>
          <div className={styles.info}>
            Anytime, anywhere. Trade crypto on your terms.
          </div>
        </div>
        <div className={styles.asap}>
          {/* <img
            srcSet="/images/content/download-pic@2x.png 2x"
            src="/images/content/download-pic.png"
            alt="Download"
          /> */}
          <OrderForm />
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
