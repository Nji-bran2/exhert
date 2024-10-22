import React from "react";
import cn from "classnames";
import styles from "./Card.module.sass";
import Icon from "../../../../components/Icon";
// import { Link } from "react-router-dom";

const Card = ({ className, item }) => {
  return (
    <div className={cn(className, styles.card)}>
      <div className={styles.preview}>
        <div className={styles.icons}>
        </div>
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
      </div>
      <div className={styles.text}>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.content}>{item.content}</div>
      </div>
      {/* <Link
        className={cn("button-stroke button-small", styles.button)}
        to={item.url}
      >
        {item.button}
      </Link> */}
    </div>
  );
};

export default Card;