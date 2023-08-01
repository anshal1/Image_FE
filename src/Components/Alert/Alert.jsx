import React from "react";
import style from "./Alert.module.css";
import useContextHook from "../../Hooks/useContextHook";
const Alert = () => {
  const ctx = useContextHook();
  return (
    <div className={style[ctx?.ShowAlert ? "main-container" : "hide-alert"]}>
      <p>{ctx.AlertMessage}</p>
    </div>
  );
};

export default Alert;
