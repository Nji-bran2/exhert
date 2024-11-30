import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown";
import TextInput from "../TextInput";
import styles from "./order.module.sass";
import cn from "classnames";
import BuySellTabs from "../Order"; // Import the provided BuySellTabs component
import Icon from "../Icon";

const OrderForm = ({ title }) => {

    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem("activeTab") || "Buy"; // Defaults to "Buy" if no value in localStorage
      });

  const [payValue, setPayValue] = useState(""); // XAF field value
  const [receiveValue, setReceiveValue] = useState(""); // Target currency field value
  const [currency, setCurrency] = useState("USDT"); // Default selected currency
  const exchangeRates = { USDT: 654, BTC: 64552078, ETH: 4378228 };

  const handleReceiveChange = (value) => {
    setReceiveValue(value);
    const rate = exchangeRates[currency];
    if (rate) {
      setPayValue((parseFloat(value) * rate).toFixed(2));
    }
  };

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);


  const handlePayChange = (value) => {
    setPayValue(value);
    const rate = exchangeRates[currency];
    if (rate) {
      setReceiveValue((parseFloat(value) / rate).toFixed(6));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${activeTab} submitted!`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.col}>
          <h2 className={cn("h4", styles.title)}>ASAP</h2>
          {/* Use the BuySellTabs component */}
          <BuySellTabs mode={activeTab} setMode={setActiveTab} />
          <div className={styles.info_section}>
            <p>
              Current rate: 1 {currency} = {exchangeRates[currency]} XAF
            </p>
            <p>Fee rate: 0.1000%</p>
          </div>
        </div>

        {/* Form */}
        <form className={styles.form} action="" onSubmit={handleSubmit}>
          <div className={styles.inputform}>
            <label className={styles.label}>You Pay</label>
            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                type="text"
                value={payValue}
                onChange={(e) => handlePayChange(e.target.value)}
                name="amount"
                placeholder="1500-200000"
                required
              />
              <span className={styles.result}>XAF</span>
            </div>
          </div>

          <div className={styles.inputform}>
            <label className={styles.label}>You Receive</label>
            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                type="text"
                value={receiveValue}
                onChange={(e) => handleReceiveChange(e.target.value)}
                name="amount"
                placeholder="235"
                required
              />
              <span className={styles.result}>USDT</span>
            </div>
          </div>
          <button
            className={cn(styles.button, {
              [styles.buyButton]: activeTab === "Buy",
              [styles.sellButton]: activeTab === "Sell",
            })}
          >
            {activeTab}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
