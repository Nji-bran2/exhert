import React from "react";
import Modal from "../../components/Modal/index";
import styles from "./paymentdetails.module.sass";


const UserPaymentModal = ({ visible, onClose, selectedMerchant }) => {
  return (
    <Modal visible={visible} onClose={onClose} title=""
    outerClassName={styles.customModal}
    >
      {/* Main Container: Flexbox layout */}
      <div className={styles.container}>
        
        {/* First Section: Header, User Details, and About Merchant */}
        <div className={styles.sectionLeft}>
          {/* Header Section */}
          <div className={styles.header}>
            <div className={styles.info}>
              <div className={styles.avatar}>
                <span>{selectedMerchant?.name.charAt(0)}</span>
              </div>
              <div>
                <h3>{selectedMerchant?.name}</h3>
                <p>{selectedMerchant?.fillRate} Fill Rate</p>
              </div>
            </div>
            {/* Close Button (only visible on mobile) */}
            {/* <button className={styles.closeButton} onClick={onClose}>
              ✕
            </button> */}
          </div>

          {/* User Details Section */}
          <div className={styles.details}>
  <p className={styles.infoItem}>
    <strong>Number of Trades:</strong>
    <span>{selectedMerchant?.trades}</span>
  </p>
  <p className={styles.infoItem}>
    <strong>Total Traded Volume:</strong>
    <span>{selectedMerchant?.totalVolume}</span>
  </p>
  <p className={styles.infoItem}>
    <strong>Available:</strong>
    <span>{selectedMerchant?.available}</span>
  </p>
  <p className={styles.infoItem}>
    <strong>Positive Feedback:</strong>
    <span>{selectedMerchant?.positiveFeedback}</span>
  </p>
</div>


          {/* About Merchant Section */}
          <div className={styles.about}>
            <h4>About Merchant</h4>
            <p>{selectedMerchant?.about}</p>
          </div>
        </div>

        {/* Second Section: Form and Buttons */}
        <div className={styles.sectionRight}>
          {/* Form Section */}
          <div className={styles.form}>
            <label>You Sell</label>
            <input type="number" placeholder="Amount in USDT" />
      
            <label>You Receive</label>
            <input type="text" placeholder="Amount in XAF" readOnly />
      
            {/* Actions: Sell and Cancel */}
            <div className={styles.actions}>
              <button className={styles.sellButton} onClick={() => alert("USDT Sold!")}>
                Sell USDT
              </button>
              <button className={styles.close} onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserPaymentModal;
