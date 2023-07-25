import React from "react";
import style from "./FullScreenImage.module.css";
const FullScreenImage = ({ image }) => {
  return (
    <div className={style["image-container"]}>
      <img src={image} alt="" />
    </div>
  );
};

export default FullScreenImage;
