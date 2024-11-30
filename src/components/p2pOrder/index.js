import React from 'react'
import styles from "./ads.module.sass"

const items = [
    {
      title: "Account name",
      content: "Veum Cecilia",
    },
    {
      title: "Account number",
      content: "548422222221",
    },
    {
      title: "Address",
      content: "079 Dariana Knoll, CA",
    },
    {
      title: "SWIFT Code",
      content: "UI8",
    },
    {
      title: "Bank Address",
      content: "55416 Powlowski Spring, CA",
    },
  ];

const AdversDetails = () => {
  return (
    <div className={styles.details}>
        <div className={styles.info}>
            <div className={styles.transfer}>
            <div className={styles.list}>
            {items.map((x, index) => (
             <div className={styles.line} key={index}>
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.details}>
              <div className={styles.content}>{x.content}</div>
            </div>
          </div>
        ))}
      </div>
            </div>
            <div className={styles.about}>
               
            </div>
        </div>
        <div className={styles.transfer}>

        </div>
    </div>
  )
}

export default AdversDetails