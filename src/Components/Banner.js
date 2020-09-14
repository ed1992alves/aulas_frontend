import React, { useEffect, useState } from "react";
import "../Style/banner.less";
import close from "../Style/images/close.svg";

export const Banner = props => {
  function closeBanner() {
    changeOpen(false);
  }

  const [open, changeOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        changeOpen(true);
      }, 2000);
    }
  }, [open]);

  return (
    <div className="notification-wrapper">
      <div
        className={`notification-banner ${props.status} ${
          open ? "open" : "close"
        }`}
      >
        <div className="content">{props.children}</div>
        <img onClick={closeBanner} src={close} className="close"></img>
      </div>
    </div>
  );
};
