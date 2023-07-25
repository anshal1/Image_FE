import React from "react";
import style from "./Card.module.css";
const Card = ({ img }) => {
  return (
    <div className={style["main-card-container"]}>
      <img src={img} alt="" />
      <span className={style["like"]} role="button">
        23
      </span>
      <span className={style["time"]}>3 hours ago.</span>
    </div>
  );
};

export default Card;
