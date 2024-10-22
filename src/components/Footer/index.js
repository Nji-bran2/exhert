import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Form from "../Form";
import Icon from "../Icon";
import Image from "../Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTiktok, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"



const menu = [
  // {
  //   title: "Exchange",
  //   url: "/exchange",
  // },
  // {
  //   title: "Buy crypto",
  //   url: "/buy-crypto",
  // },
  // {
  //   title: "Market",
  //   url: "/market",
  // },
  // {
  //   title: "Learn crypto",
  //   url: "/learn-crypto",
  // },
  {
    title: "Contact",
    url: "/contact",
  },
];

const socials = [
  {
    title: faFacebook,
    size: "24",
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

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <footer className={styles.footer}>
      {/* <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <img
                className={styles.picDesktop}
                src="images/logo2.png"
                alt="BitCloud"
              />
              <Image
                className={styles.picMobile}
                src="/images/logo2.png"
                srcDark="/images/logo2.png"
              />
            </Link>
            <div className={cn(styles.item, { [styles.active]: visible })}>
              <div
                className={styles.category}
                onClick={() => setVisible(!visible)}
              >
                footer nav
                <Icon name="arrow-down" size="24" />
              </div>
              <div className={styles.menu}>
                {menu.map((x, index) => (
                  <NavLink
                    className={styles.link}
                    activeClassName={styles.active}
                    to={x.url}
                    key={index}
                  >
                    {x.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>contact</div>
            <div className={styles.info}>
              <p>43252 Borer Mountains</p>
              <p>Zackerychester</p>
              <p>Bahamas</p>
              <p>732-528-4945</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>newsletter</div>
            <div className={styles.info}>
              Subscribe our newsletter to get more free design course and
              resource.
            </div>
            <Form
              className={styles.form}
              value={email}
              setValue={setEmail}
              onSubmit={() => handleSubmit()}
              placeholder="Enter your email"
              type="email"
              name="email"
              icon="arrow-next"
            />
          </div>
        </div>
      </div> */}
     
           
        <div className={cn("container", styles.container)}>
        {/* <div className={styles.foot}> */}
        <Link className={styles.logo} to="/">
        <img
                className={styles.picDesktop}
                src="images/logo-ex.png"
                alt="Exhert"
              />
              <Image
                className={styles.picMobile}
                src="/images/logo2.png"
                srcDark="/images/logo2.png"
              />
            </Link>
          <h1 className={cn("h1",styles.copyright)}>
            © 2024 Exhert. All rights reserved
          </h1>
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
      {/* </div> */}
    </footer>
  );
};

export default Footer;
