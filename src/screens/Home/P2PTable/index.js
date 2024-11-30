import React, { useState, useEffect } from "react";
import styles from "./p2p.module.sass";
import cn from "classnames";
import { Link } from "react-router-dom";
import Adverts from "../../p2p";

const P2PMarket = ({ title }) => {
      
  const [payValue, setPayValue] = useState(""); // XAF field value
  const [receiveValue, setReceiveValue] = useState(""); // Target currency field value
  const [currency, setCurrency] = useState("USDT"); // Default selected currency
  const exchangeRates = { USDT: 654, BTC: 64552078, ETH: 4378228 };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
          <h2 className={cn("h4", styles.title)}>ASAP</h2>
          <Link className={cn("button-stroke", styles.button)} to="/p2p">
            View more
          </Link>
        </div> 
        <div className={styles.table}>
            <Adverts/>
        </div>      
    </div>
  );
};

export default P2PMarket;
