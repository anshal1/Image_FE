import React, { useState } from "react";
import style from "./FullScreenImage.module.css";
const FullScreenImage = ({ image, show, handleClose }) => {
  return (
    <div className={style[show ? "image-container" : "image-container-hide"]}>
      <div className={style["close-btn"]}>
        <button className="button-global" onClick={handleClose}>
          Close
        </button>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default FullScreenImage;
