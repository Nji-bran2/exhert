import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import OutsideClickHandler from "react-outside-click-handler";
import cn from "classnames";
import styles from "./Modal.module.sass";  // Assuming you have some basic modal styles
import Icon from "../Icon";

const Modal = ({ outerClassName, visible, onClose, children, title, style }) => {
  const escFunction = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  useEffect(() => {
    const target = document.querySelector("#modal");

    if (visible) {
      disableBodyScroll(target);
    } else {
      clearAllBodyScrollLocks();
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [visible]);

  return createPortal(
    visible && (
      <div id="modal" className={styles.modal}>
        <div className={cn(styles.outer, outerClassName)} style={style}>
          <OutsideClickHandler onOutsideClick={onClose}>
            {title && (
              <div className={cn("h4", styles.title)}>
                <Icon name="arrow-left" size="32" />
                {title}
              </div>
            )}
            {children}
            <button className={styles.close} onClick={onClose}>
              <Icon name="close" size="24" />
            </button>
          </OutsideClickHandler>
        </div>
      </div>
    ),
    document.body
  );
};

export default Modal;
