import React, { useState } from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
import Icon from "../../../components/Icon";
import Checkbox from "../../../components/Checkbox";
import TextInput from "../../../components/TextInput";
import TextArea from "../../../components/TextArea";

const Form = ({ goNext }) => {
  // const [policy, setPolicy] = useState(true);

  return (
    <form className={styles.form}>
      <div className={styles.top}>
        <h3 className={cn("h3", styles.title)}>Get in Touch</h3>
        <div className={styles.info}>Enter your details for early access</div>
        {/* <div className={styles.btns}>
          <button className={cn("button", styles.button)}>
            <Icon name="google" size="16" />
            <span>Google</span>
          </button>
          <button className={cn("button-black", styles.button)}>
            <Icon name="apple" size="16" />
            <span>Apple</span>
          </button>
        </div> */}
      </div>
      {/* <div className={styles.info}>Or continue with email</div> */}
      <div className={styles.fieldset}>
        <TextInput
          className={styles.field}
          label="email"
          name="email"
          type="email"
          placeholder="Email address"
          required
        />
        <TextInput
          className={styles.field}
          label="Name"
          name="name"
          type="text"
          placeholder="Enter name"
          required
          view
        />
       <TextArea
        className={styles.field}
        label="Message"
        name="message"
        placeholder="Type your message here"
        required
      />
        {/* <Checkbox
          className={styles.checkbox}
          value={policy}
          onChange={() => setPolicy(!policy)}
          content="<span>By signing up I agree that I’m 18 years of age or older, to the <a href='/#' target='_blank' rel='noopener noreferrer'>User Agreements</a>, <a href='/#' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>, <a href='/#' target='_blank' rel='noopener noreferrer'>Cookie Policy</a>, <a href='/#' target='_blank' rel='noopener noreferrer'>E-Sign Consent</a>.<span>"
        /> */}
      </div>
      <button className={cn("button", styles.button)} onClick={goNext}>
        Send
      </button>
    </form>
  );
};

export default Form;
