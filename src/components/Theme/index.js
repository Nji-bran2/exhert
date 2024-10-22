import React, {useEffect} from "react";
import cn from "classnames";
import styles from "./Theme.module.sass";
import useDarkMode from "use-dark-mode";
import Icon from "../Icon";

const Theme = ({ className, icon, small }) => {
  // Initialize dark mode with default value as true
  const darkMode = useDarkMode(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode.value ? 'dark' : 'light');
  }, [darkMode.value]);

  return (
    <label className={cn(className, styles.theme, { [styles.small]: small })}>
      <input
        className={styles.input}
        checked={darkMode.value}
        onChange={darkMode.toggle}
        type="checkbox"
      />
      {icon ? (
        <div className={styles.icon}>
          <Icon name="theme-light" size="24" />
          <Icon name="theme-dark" size="24" />
        </div>
      ) : (
        <span className={styles.inner}>
          <span className={styles.box}></span>
        </span>
      )}
    </label>
  );
};

export default Theme;
