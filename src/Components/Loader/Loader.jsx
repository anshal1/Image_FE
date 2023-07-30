import React from "react";
import style from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={style["main-container"]}>
      <p className={style["loader"]}></p>
    </div>
  );
};

export default Loader;
