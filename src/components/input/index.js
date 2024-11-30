import React from 'react';
import styles from './Inputfield.module.sass';

const InputField = ({ label, value,dropdown, onChange, inlineLabel, resizable }) => {
  return (
    <div className={styles.inputfield}>
      <label className={styles.inputlabel}>{label}</label>
      <div className="input-container">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={`input ${resizable ? 'resizable' : ''}`}
        />
        {dropdown && <div className={styles.dropdown}>{dropdown}</div>}
        {inlineLabel && <span className={styles.inlinelabel}>{inlineLabel}</span>}
      </div>
    </div>
  );
};

export default InputField;
