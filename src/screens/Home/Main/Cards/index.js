import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Cards.module.sass";
import axios from "axios";
import {useState, useEffect} from 'react';


/* For reference

{x.positive && (
  <div className={styles.positive}>{x.positive}</div>
  )}
{x.negative && (
  <div className={styles.negative}>{x.negative}</div>
)} 

*/
//love();
/* Deprecated, No longer needed

const items = [
  {
    title: "BTC/USDT",
    price: "36,641.20",
    money: "36,641.20",
    negative: "-0.79%",
    image: "images/content/currency/bitcoin.svg",
    url: "/sign-up",
  },
  {
    title: "BTC/USDT",
    price: "36,641.20",
    money: "36,641.20",
    positive: "+0.79%",
    image: "images/content/currency/chainlink.svg",
    url: "/sign-up",
  },
  {
    title: "BTC/USDT",
    price: "36,641.20",
    money: "36,641.20",
    positive: "+0.79%",
    image: "images/content/currency/monero.svg",
    url: "/sign-up",
  },
  {
    title: "BTC/USDT",
    price: "36,641.20",
    money: "36,641.20",
    positive: "+0.79%",
    image: "images/content/currency/maid.svg",
    url: "/sign-up",
  },
];
*/

const Cards = ({ className }) => {
  const [coins, setCoins] = useState ([]);
  //const [search, setSearch] = useState('')

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false')
    .then(res=>{
      setCoins(res.data);
    }).catch(error => console.log(error));
  }, []);

  return (
    console.log(coins),
    <div className={cn(className, styles.cards)}>
      {coins.map((x, index) => (
        <Link className={styles.card} key={index} to={"/sign-up"}>
          <div className={styles.icon}>
            <img src={x.image} alt="Currency" />
          </div>
          <div className={styles.details}>
            <div className={styles.line}>
              <div className={styles.title}>{ x.id[0].toUpperCase() + x.id.slice(1) }</div>
              {x.price_change_percentage_24h > 0 && (
                <div className={styles.positive}>{"+" + Math.round(x.price_change_percentage_24h * 100) / 100  + "%"}</div>
              )}
              {x.price_change_percentage_24h < 0 && (
                <div className={styles.negative}>{Math.round(x.price_change_percentage_24h * 100) / 100 + "%"}</div>
              )}
              
            </div>
            <div className={styles.price}>{x.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
            <div className={styles.money}>{'$' + x.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
