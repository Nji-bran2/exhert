import React, { useState } from "react";
import cn from "classnames";
import styles from "./Question.module.sass";
import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";
import TextInput from "../../../components/TextInput";
import TextArea from "../../../components/TextArea";
import axios from "axios";
import { toast } from 'react-toastify';

const optionsCurrency = [
  "Have a question about Bitcloud fees",
  "Have a question about Ethereum fees",
  "Have a question about Dogcoin fees",
];

const optionsCategory = [
  "Transactions and spending",
  "Transactions",
  "Spending",
];

const Question = () => {
  const [currency, setCurrency] = useState(optionsCurrency[0]);
  const [category, setCategory] = useState(optionsCategory[0]);
  const [topic, setTopic] = useState(true);

  

  const [formData,setFormData] = useState(
    {
    name: '',
    email: '',
    message: ''
    }
  );

  const handleChange = (e) => {
    setFormData({...formData , [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/subscribe/contact", formData);
     // const response = await axios.post("https://email.subscription-v64o.onrender.com/subscribe/contact", formData);
      console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error('There was an error sending the message!', error);
      toast.error(error.message)
    }
  };

   

  return (
    <div className={cn("section-bg section-mb0", styles.section)}>
      <div className={cn("container", styles.container)}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={cn("h2", styles.title)}>Get in touch</h2>
          <div className={styles.fieldset}>
            
            {/* <div className={styles.field}>
              <div className={styles.label}>Select a topic</div>
              <div className={styles.variants}>
                <label className={styles.radio}>
                  <input
                    className={styles.input}
                    type="radio"
                    name="topic"
                    onChange={() => setTopic(true)}
                    checked={topic}
                  />
                  <span className={styles.inner}>
                    <div
                      className={styles.icon}
                      style={{ backgroundColor: "#3772FF" }}
                    >
                      <Icon name="wallet" size="20" />
                    </div>
                    <span className={styles.text}>Wallet</span>
                  </span>
                </label>
                <label className={styles.radio}>
                  <input
                    className={styles.input}
                    type="radio"
                    name="topic"
                    onChange={() => setTopic(false)}
                    checked={!topic}
                  />
                  <span className={styles.inner}>
                    <div
                      className={styles.icon}
                      style={{ backgroundColor: "#9757D7" }}
                    >
                      <Icon name="candlesticks" size="20" />
                    </div>
                    <span className={styles.text}>Exchange</span>
                  </span>
                </label>
              </div>
            </div> */}
            {/* <div className={styles.field}>
              <Dropdown
                className={styles.dropdown}
                label="What is your issue about?"
                value={currency}
                setValue={setCurrency}
                options={optionsCurrency}
              />
            </div>
            <div className={styles.field}>
              <Dropdown
                className={styles.dropdown}
                label="What is your issue about?"
                value={category}
                setValue={setCategory}
                options={optionsCategory}
              />
            </div> */}
             <TextInput
              className={styles.field}
              label="name"
              name="name"
              type="text"
              onChange={handleChange}
              required
            />
            <TextInput
              className={styles.field}
              label="Email address"
              name="email"
              type="email"
              onChange={handleChange}
              required
            />
            <TextArea
              className={styles.field}
              label="message"
              name="message"
              placeholder="Say something"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.btns}>
            <button className={cn("button-small", styles.button)}>
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Question;
