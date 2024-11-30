import React, { Children, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./layout.module.sass";
import { IoAdd } from "react-icons/io5";
import { CiFileOn, CiBookmark, CiCircleMore  } from "react-icons/ci";
import cn from "classnames";

const Layout = ({children}) => {
  const location = useLocation(); 
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <div className={cn("container",styles.navbar)}>
        {/* Left Tabs */}
        <div className={styles.tabs}>
          <Link
            to="/p2p"
            className={`${styles.tabButton} ${
              location.pathname === "/p2p" ? styles.active : ""
            }`}
          >
            P2P
          </Link>
          <Link
            to="/asap"
            className={`${styles.tabButton} ${
              location.pathname === "/asap" ? styles.active : ""
            }`}
          >
            ASAP
          </Link>
        </div>

        {/* Right Buttons */}
        <div className={styles.buttons}>
          {/* Buttons for Larger Screens */}
          <div className={styles.desktopButtons}>
            <button className={styles.button}> <IoAdd size={20} /> Post Ad</button>
            <button className={styles.button}><CiFileOn size={20} /> My Ads</button>
            <button className={styles.button}>Orders</button>
            <button className={styles.button}><CiBookmark size={20} />History</button>
            <button
              className={styles.button}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <CiCircleMore size={20} />
              More
            </button>
          </div>

          {/* "More" Dropdown for Mobile Screens */}
          <div className={styles.mobileDropdown}>
            <button
              className={styles.moreButton}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <CiCircleMore />
              More
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <button className={styles.button}>Post Ad</button>
                <button className={styles.button}>My Ads</button>
                <button className={styles.button}>Orders</button>
                <button className={styles.button}>History</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className={styles.content}>
        {children} {/* Renders the active child route */}
      </div>
    </div>
  );
};

export default Layout;
