import React from "react";
import cn from "classnames";
import styles from "./Feature.module.sass";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import Card from "./Card";

const items = [
  {
    title: "Mobile Payment Make Easy",
    content:
      "Mobile payment has revolutionized the way we transact, offering convenience and efficiency.",
    button: "Buy crypto",
    image: "/images/fasttransfer1.png",
    image2x: "/images/fasttransfer.png",
    url: "/buy-crypto",
  },
  {
    title: "Security & Control Over Money",
    content:
      "Security and control over your money are paramount, and with our platform.",
    button: "Trade now",
    image: "/images/shield.png",
    image2x: "/images/shield.png",
    icon: "payement",
    url: "/exchange",
  },
  {
    title: "Transaction at low fee cost",
    content:
      "We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.",
    button: "Learn now",
    image: "/images/icon-1.png",
    image2x: "/images/icon-1.png",
    icon: "payement",
    url: "/learn-crypto",
  },
  {
    title: "Protect The Identity",
    content:
      "Safeguarding your identity is our top priority. With our platform, we employ state-of-the-art.",
    button: "Trade now",
    image: "/images/content/card-pic-2.png",
    image2x: "/images/content/card-pic-2@2x.png",
    icon: "payement",
    url: "/exchange",
  },
];

// const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
//   <button {...props}>{children}</button>
// );

const Feature = () => {
 

  return (
    <div className={cn("section section-mb0" ,styles.section )}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>
            Our Features
          </h2>
        </div>
        <div className={styles.wrapper}>
            {items.map((x, index) => (
              <Card className={styles.card} item={x} key={index} />
            ))}
        </div>
        {/* <div className={styles.btns}>
          <Link className={cn("button", styles.button)} to="/contact">
            Contact Us
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Feature;
