import React from "react";
import style from "./Loader.module.css";
const NextPageLoader = () => {
  return (
    <div className={style["next-main-container"]}>
      <p className={style["loader"]}></p>
    </div>
  );
};

export default NextPageLoader;
