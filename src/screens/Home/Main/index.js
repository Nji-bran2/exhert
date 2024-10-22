import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Main.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import Cards from "./Cards";
import Form from "../Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTiktok, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"


const socials = [
  {
    title: faFacebook,
    size: "16",
    url: "https://www.facebook.com/profile.php?id=61561077623847",
  },
  {
    title: faTwitter,
    size: "18",
    url: "https://x.com/EXHERTexchange?t=s5Jd3JQUc8RNTCT8DVlO9g&s=08",
  },
  {
    title: faInstagram,
    size: "16",
    url: "https://www.instagram.com/exhertexchange?igsh=MTFrbDNtaXI4NDhpeQ==",
  },
  {
    title: faTiktok,
    size: "16",
    url: "https://www.tiktok.com/@exhert7?_t=8n7G9UteVaX&_r=1",
  },
  // {
  //   title: "behance",
  //   size: "20",
  //   url: "https://www.behance.net/ui8",
  // },
];

const Main = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("container", styles.container)}>
      <div className={styles.bg}>
          <img
            srcSet="/images/content/cards@2x.png 2x"
            src="/images/content/cards.png"
            alt="Cards"
          />
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            Where trading <br></br> 
            <span className={styles.txt} >Meets Innovation</span>
          </h2>
          <div className={styles.text}>
            Trade Bitcoin, Ethereum, USDT, and the top altcoins on the legendary
            crypto asset exchange.
          </div>
          {/* <Link className={cn("button", styles.button)} to="/sign-up">
            Get started now
          </Link>
          <ScrollButton
            onScroll={() =>
              scrollToRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className={styles.scroll}
          /> */}
          <Form/>
          <div className={styles.socialLink}>
          <div className={styles.tex}>
            Connect to:
          </div>
          <div className={styles.socials}>
            {socials.map((x, index) => (
              <a
                className={styles.social}
                href={x.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
              <FontAwesomeIcon icon={x.title} size={x.size} />
              </a>
            ))}
          </div>
          </div>
        </div>
      
        <Cards className={styles.cards} />
      </div>
    </div>
  );
};

export default Main;
