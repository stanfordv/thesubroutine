import React, { useState } from "react";
import styles from "./Tooltip.module.css"; // Create this file

const Tooltip = ({ children, content }) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      className={styles.tooltip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      {show && <div className={styles.tooltipContent}>{content}</div>}
    </div>
  );
};

export default Tooltip;
