import React, { useState, useEffect } from 'react';
import styles from "./Market.module.sass";
import cn from "classnames";
import BuySellTabs from '../../components/Order';
// import { Link } from "react-router-dom";
import { AiTwotoneLike } from "react-icons/ai";
import { RiTimerLine } from "react-icons/ri";
import Dropdown from "../../components/Dropdown";
import Loader from '../../components/Loader/index'; 
import { FaHeart } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { CiFilter } from "react-icons/ci";
import TextInput from '../../components/TextInput';
import UserPaymentModal from '../Payement';

const navigation = ["USDT", "BTC", "ETH", "BNB"];

const dummyData = [
  {
    id: 1,
    title: "Merchant#1",
    currency: "BTC",
    price: "645 XAF",
    available: "5000 USDT",
    orderLimit: "5500-150000",
    type: "buy",
    image: "/images/content/currency/bitcoin.svg",
    url: "/exchange",
    orders: "50",
    percentage: "98",
    like: "100",
    time: "15",
    merchantId: 1
    
  },
  {
    id: 2,
    title: "Merchant#2",
    currency: "USDT",
    price: "645 XAF",
    available: "5000 USDT",
    orderLimit: "5500-150000",
    type: "buy",
    image: "/images/content/currency/ethereum.svg",
    url: "/exchange",
    orders: "50",
    percentage: "98",
    like: "100",
    time: "15",
    merchantId: 2
  },
  {
    id: "3",
    title: "Merchant#3",
    currency: "USDT",
    price: "645 XAF",
    available: "5000 USDT",
    orderLimit: "5500-150000",
    type: "buy",
    image: "/images/content/currency/bitcoin-cash.svg",
    url: "/exchange",
    orders: "50",
    percentage: "98",
    like: "100",
    time: "15",
    merchantId: 3
  },
  {
    id: 4,
    title: "Merchant#4",
    currency: "BNB",
    price: "645 XAF",
    available: "5000 USDT",
    type: "buy",
    orderLimit: "5500-150000",
    image: "/images/content/currency/ripple.svg",
    url: "/exchange",
    orders: "50",
    percentage: "98",
    like: "100",
    time: "15",
    merchantId: 4
  },
  {
    id: 5,
    title: "Merchant#5",
    currency: "USDT",
    price: "645 XAF",
    available: "5000 USDT",
    type: "sell",
    orderLimit: "5500-150000",
    image: "/images/content/currency/ripple.svg",
    url: "/exchange",
    orders: "50",
    percentage: "98",
    like: "100",
    time: "15",
    merchantId: 5
  },
];

const merchants = [
  {
    id: 1,
    name: "Merchant#1",
    fillRate: "98%",
    trades: "120",
    totalVolume: "50000 USDT",
    available: "5000 USDT",
    positiveFeedback: "90%",
    about: "Experienced and trustworthy.",
  },
  {
    id: 2,
    name: "Merchant#2",
    fillRate: "95%",
    trades: "200",
    totalVolume: "100000 USDT",
    available: "10000 USDT",
    positiveFeedback: "92%",
    about: "Highly rated merchant with great feedback.",
  },
  {
    id: 3,
    name: "Merchant#3",
    fillRate: "95%",
    trades: "200",
    totalVolume: "100000 USDT",
    available: "10000 USDT",
    positiveFeedback: "92%",
    about: "Highly rated merchant with great feedback.",
  },
  {
    id: 4,
    name: "Merchant#4",
    fillRate: "95%",
    trades: "200",
    totalVolume: "100000 USDT",
    available: "10000 USDT",
    positiveFeedback: "92%",
    about: "Highly rated merchant with great feedback.",
  },
  {
    id: 5,
    name: "Merchant#5",
    fillRate: "95%",
    trades: "200",
    totalVolume: "100000 USDT",
    available: "10000 USDT",
    positiveFeedback: "92%",
    about: "Highly rated merchant with great feedback.",
  },
 
];

const Adverts = () => {
  const [orders, setOrders] = useState([]);
  const [value, setValue] = useState("");
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "Buy"; // Defaults to "Buy" if no value in localStorage
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [sorting, setSorting] = useState(navigation[0]);
  const [activeCurrency, setActiveCurrency] = useState("USDT");
  const [isLoading, setIsLoading] = useState(false); // State to manage loading
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMerchant, setSelectedMerchant] = useState(null);


  useEffect(() => {
    // Fetch orders based on activeCurrency and activeTab
    fetchOrders(activeCurrency, activeTab);
  }, [activeCurrency, activeTab]);

  const fetchOrders = (currency, type) => {
    console.log(`Fetching orders for ${type} ${currency}`); // Debugging line
    const filteredOrders = dummyData.filter(order => 
      order.currency.toUpperCase() === currency.toUpperCase() && 
      order.type.toLowerCase() === type.toLowerCase()
    );

    console.log("Filtered Orders:", filteredOrders); // Debugging line

    setOrders(filteredOrders);
  };
  

  const loadData = async () => {
    setIsLoading(true); // Show loader
    const fetchedOrders = await fetchOrders(activeCurrency, activeTab);
    setOrders(fetchedOrders);
    setIsLoading(false); // Hide loader
  };

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);


  const handleCurrencyChange = (currency, index) => {
    setActiveCurrency(currency);
    setActiveIndex(index);
  };

  const handleOrderTypeChange = (type) => {
    setActiveTab(type);
  };

  const handleKeyPress = (event) => {
    // Allow only numeric input (numbers 0-9)
    const regex = /^[0-9]$/;
    if (!regex.test(event.key)) {
      event.preventDefault(); 
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getMerchantById = (merchantId) => {
    return merchants.find(merchant => merchant.id === merchantId);
  };

  const openModal = (order) => {
    // Ensure the order has a valid associated merchant
    const merchant = getMerchantById(order.merchantId);
    if (merchant) {
      setSelectedMerchant(merchant);  // Set the selected merchant data
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setSelectedMerchant(null);
    setModalVisible(false);
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={styles.container}>
        {/* Tabs */}
        <div className="tabs">
          <BuySellTabs mode={activeTab} setMode={handleOrderTypeChange} />
        </div>

        {/* Currency Selector */}
        <div className={styles.nav}>
          {navigation.map((currency, index) => (
            <button
              className={cn(styles.link, {
                [styles.active]: index === activeIndex,
              })}
              onClick={() => handleCurrencyChange(currency, index)}
              key={currency}
            >
              {currency}
            </button>
          ))}
        </div>

       
      <div className={styles.filter}>
      
        <div className={styles.left_filter}>
        <div className={styles.dropdown}>
          <Dropdown
            className={{height: "40px", lineHeight: "40px"}}
            value={sorting}
            setValue={setSorting}
            options={navigation}
          />
        </div>
        <div  className={styles.amount}>
        <input 
          className={styles.field}
          type="text" 
          value={value} 
          onChange={handleChange}
          onKeyPress={handleKeyPress} 
          placeholder="Transaction Amount"
        />    
        <span className={styles.xaf} >XAF</span>
        </div>
        <button className={styles.filter_btn}>
        <CiFilter />
        </button>
        </div>
        <div className={styles.right_filter}>
        <button className={styles.refresh_btn}>
          <HiRefresh className={styles.refresh}/>
           <span>Refresh Ads</span>
        </button>
        </div>
        </div>
        {/* Show loader while data is being fetched */}
        {isLoading ? (
          <Loader /> // Show loader if isLoading is true
        ) : (
          <div className={styles.table}>
            <div className={styles.row}>
              <div className={styles.col}>Merchants</div>
              <div className={styles.col}>Price</div>
              <div className={styles.col}>Available/Order Limit</div>
              <div className={styles.col}>Trade</div>
            </div>
            {orders.length === 0 ? (
              <div className={styles.row}>
                <div className={styles.col}>No ads found</div>
              </div>
            ) : (
              orders.map((order, index) => (
                <div className={styles.row} to={order.url} key={index}>
                  <div className={styles.col}>
                    <div className={styles.items}>
                      <div className={styles.profile}>
                        <div className={styles.icon}>
                          <img src={order.image} alt="Currency" />
                        </div>
                          <span className={styles.subtitle}>{order.title}</span>
                      </div>
                      <div className={styles.percent}>
                        <span className={styles.order}>{order.orders} orders</span>
                        <span>{order.percentage}% completion</span>
                      </div>
                      <div className={styles.time} >
                      <div className={styles.like} >
                        <FaHeart />
                        <span >{order.like}%</span>
                      </div>
                      <div>
                        <RiTimerLine />
                        <span >{order.time} min</span>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col}>{order.price}</div>
                  <div className={styles.col}>
                    <div >
                    <span className={styles.currency}>{order.available}</span>
                    <span className={styles.currency}>{order.orderLimit}</span>
                  </div>
                  </div>
                  <div className={styles.col}>
                    <button 
                     className={cn("button",styles.button, {
                      [styles.buyButton]: activeTab === "Buy",
                      [styles.sellButton]: activeTab === "Sell",
                    })}
                    onClick={() => openModal(order)}
                    >
                      {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} {activeCurrency}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      {isModalVisible && selectedMerchant && (
        <UserPaymentModal
          visible={isModalVisible}
          onClose={closeModal}  // Close modal when user clicks close
          selectedMerchant={selectedMerchant}  // Pass selected merchant data to the modal
        />
      )}
    </div>
  );
};

export default Adverts;
