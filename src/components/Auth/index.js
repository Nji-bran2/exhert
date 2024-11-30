
import React from 'react'
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Auth.module.sass";

const Auth = ({classSection, className, content, linkText, linkUrl, children }) => {
  return (
    <div className={cn(classSection, styles.section)}>
    <div className={cn(className, styles.container)}>
     <div
      className={styles.colleft}
      style={{
        backgroundImage: "url(/images/content/signpic.jpg)",
      }}
     >
        
     </div>  
     <div className={styles.colright}>
     <div className={styles.header}>
          <span>{content}</span>
          <Link className={styles.link} to={linkUrl}>
            {linkText}
          </Link>
        </div>
        <div className={styles.wrap}>{children}</div>
      </div>
     </div>   
    </div>
  )
}

export default Auth
