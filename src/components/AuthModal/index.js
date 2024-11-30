import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import OutsideClickHandler from "react-outside-click-handler";
import cn from "classnames";
import styles from "./Authmodal.module.sass";
import Icon from "../Icon";
import { Link, useHistory } from "react-router-dom";

const AuthModal = ({
  outerClassName,
  visible,
  onClose,
  children,
  title,
  content,
  linkText,
  linkUrl,
}) => {

//   const history = useHistory();
//   const escFunction = useCallback(
//     (e) => {
//       if (e.keyCode === 27) {
//         onClose();
//       }
//     },
//     [onClose]
//   );
  

//   const handleOnClick = () => {
//     console.log("Navigating back to home...");
//     history.push("/");
//   };

//   useEffect(() => {
//     document.addEventListener("keydown", escFunction, false);
//     return () => {
//       document.removeEventListener("keydown", escFunction, false);
//     };
//   }, [escFunction]);

//   useEffect(() => {
//     if (visible) {
//       const target = document.querySelector("#modal");
//       disableBodyScroll(target);
//     } else {
//       clearAllBodyScrollLocks();
//     }
//   }, [visible]);

//   return createPortal(
//     visible && (
//       <div id="modal" className={styles.modal}>
//         <div className={cn(styles.outer, outerClassName)}>
//           <OutsideClickHandler onOutsideClick={onClose}>
//             <div className={styles.modalContent}>
              
//               {/* Left Section for Image */}
//               <div className={styles.imageSection}>
//                 <img
//                   src="/images/content/signpic.jpg" // Update with the path to your image
//                   alt="Auth Modal"
//                   className={styles.image}
//                 />
//               </div>

//               {/* Right Section for Form */}
//               <div className={styles.formSection}>
//               <div className={styles.backHome}>
//                   <Link  className={styles.backButton}
//                   to = "/"
//                   onClick={handleOnClick}
//                   >
//                     Back to Home
//                   </Link>
//                 </div>
//                 <div className={styles.header}>
//                   <h3>{title}</h3>
//                   <span>{content}</span>
//                   <Link className={styles.link} to={linkUrl}>
//                     {linkText}
//                   </Link>
//                 </div>

//                 <div className={styles.wrap}>{children}</div>
//               </div>
//             </div>
//           </OutsideClickHandler>
//         </div>
//       </div>
//     ),
//     document.body
//   );
// };

// export default AuthModal;

// import React, { useEffect, useCallback } from "react";
// import { createPortal } from "react-dom";
// import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
// import { Link } from "react-router-dom";
// import OutsideClickHandler from "react-outside-click-handler";
// import cn from "classnames";
// import styles from "./AuthModal.module.sass";

// const AuthModal = ({ 
//   visible, 
//   onClose, 
//   title, 
//   content, 
//   children, 
//   imageUrl = "/images/content/signpic.jpg", 
//   linkText = "Learn More", 
//   linkUrl = "/" 
// }) => {
  // Close modal on ESC key
  const escFunction = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => document.removeEventListener("keydown", escFunction);
  }, [escFunction]);

  // Disable body scroll when modal is visible
  useEffect(() => {
    const target = document.querySelector("#modal");
    if (visible) {
      disableBodyScroll(target);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [visible]);

  // Conditional rendering of modal
  return createPortal(
    visible && (
      <div id="modal" className={styles.modal}>
        <div className={cn(styles.container)}>
          <OutsideClickHandler onOutsideClick={onClose}>
            {/* <div className={styles.modalContent}>
              {/* Image Section */}
              {/* <div className={styles.imageSection}>
                <img src="/images/content/signpic.jpg" alt="Modal" className={styles.image} />
              </div> */} 

              {/* Form Section */}
              <div className={styles.formSection}>
                <button className={styles.backButton} onClick={onClose}>
                  Back to Home
                </button>
                <div className={styles.header}>
                <div className={styles.logo} >
                  <img src="/images/logo.png" alt="Exhert" />
                  <img src="/images/logo-ex.png" alt="Exhert" />
                </div>
                  <h3>{title}</h3>
                </div>
                <div className={styles.wrap}>{children}</div>
                <div className={styles.footer}>
                  <p>{content}</p>
                  <Link className={styles.link} to={linkUrl}>
                    {linkText}
                  </Link>
                </div>
              </div>
            {/* </div> */}
          </OutsideClickHandler>
        </div>
      </div>
    ),
    document.body
  );
};

export default AuthModal;
