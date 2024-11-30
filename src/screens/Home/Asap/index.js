import React, { useState, useEffect } from 'react';
import styles from "./Exhertbuys.module.sass";
import cn from "classnames";
import BuySellTabs from '../../../components/Order';


const selector = [
    "USDT",
    "BTC",
    "ETH",
    "BNB",
  ];

const Asap = () => {
    const [activeTab, setActiveTab] = useState('buy'); // 'buy' or 'sell'
    const [selectedCurrency, setSelectedCurrency] = useState('usdt'); // 'usdt', 'btc', 'bnb'
    const [orders, setOrders] = useState([]);
  
    // Simulated backend fetch
    useEffect(() => {
      const fetchOrders = () => {
        const dummyOrders = [
          { merchant: 'Merchant#1', price: '40.29 XAF', limit: '30-654 USDT' },
          { merchant: 'Merchant#2', price: '40.30 XAF', limit: '50-1000 USDT' },
          { merchant: 'Merchant#3', price: '40.31 XAF', limit: '20-500 USDT' },
        ];
        setOrders(dummyOrders);
      };
      fetchOrders();
    }, [activeTab, selectedCurrency]);
  
    return (
      <div className={cn("section", styles.section)}>
        {/* Tabs */}
        <div className="tabs">
          {/* <button
            className={`tab ${activeTab === 'buy' ? 'active' : ''}`}
            onClick={() => setActiveTab('buy')}
          >
            Buy
          </button>
          <button
            className={`tab ${activeTab === 'sell' ? 'active' : ''}`}
            onClick={() => setActiveTab('sell')}
          >
            Sell
          </button> */}
          <BuySellTabs tab={activeTab}  setactive={setActiveTab} />

        </div>
  
        {/* Currency Selector */}
        <div className={"scurrency-selector"}>
          {/* For larger screens */}
          <div className="currency-buttons">
            <button
              className={`currency-btn ${selectedCurrency === 'usdt' ? 'active' : ''}`}
              onClick={() => setSelectedCurrency('usdt')}
            >
              USDT
            </button>
            <button
              className={`currency-btn ${selectedCurrency === 'btc' ? 'active' : ''}`}
              onClick={() => setSelectedCurrency('btc')}
            >
              BTC
            </button>
            <button
              className={`currency-btn ${selectedCurrency === 'bnb' ? 'active' : ''}`}
              onClick={() => setSelectedCurrency('bnb')}
            >
              BNB
            </button>
          </div>
          {/* Dropdown for mobile */}
          <select
            className="currency-dropdown"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value="usdt">USDT</option>
            <option value="btc">BTC</option>
            <option value="bnb">BNB</option>
          </select>
        </div>
      </div>
    );
  };

export default Asap;
