import React, { useState } from "react";
import cn from "classnames";
import { News } from "../../../assets";
import styles from "./News.module.sass";
import Form from "../../../components/Form";

const Newsletter = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    
      <div
        className="newsletter-section"
        style={{
          backgroundImage: `url(${News})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.gradientOverlay} >
        <div className={cn("container", styles.container)}>
          <div className={styles.col}>
            <div className={styles.category}>newsletter</div>
            <div className={styles.info}>
              Subscribe our newsletter to get more free design course and
              resource.
            </div>
            <Form
              className={styles.form}
              value={email}
              setValue={setEmail}
              onSubmit={() => handleSubmit()}
              placeholder="Enter your email"
              type="email"
              name="email"
              icon="arrow-next"
            />
          </div>
        </div>
      </div>
   </div>
  );
};

export default Newsletter;
