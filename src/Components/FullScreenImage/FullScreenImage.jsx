import React, { useEffect, useState } from "react";
import style from "./FullScreenImage.module.css";
const FullScreenImage = ({ image, show, handleClose }) => {
  useEffect(() => {
    if (show) document.body.style.overflowY = "hidden";
    if (!show) document.body.style.overflowY = "auto";
  }, [show]);
  return (
    <div className={style[show ? "image-container" : "image-container-hide"]}>
      <div className={style["close-btn"]}>
        <button className="button-global" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="28"
            viewBox="0 -960 960 960"
            width="28"
            fill="#fff"
          >
            <path d="M333-200v-133H200v-60h193v193h-60Zm234 0v-193h193v60H627v133h-60ZM200-567v-60h133v-133h60v193H200Zm367 0v-193h60v133h133v60H567Z" />
          </svg>
        </button>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default FullScreenImage;
