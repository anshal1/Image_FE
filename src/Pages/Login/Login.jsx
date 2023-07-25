import React from "react";
import style from "./Login.module.css";
const Login = () => {
  return (
    <div className={style["main-container"]}>
      <div className={style["input-container"]}>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" className="inputs-global" name="name" />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" className="inputs-global" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" className="inputs-global" name="password" />
      </div>
      <div className={style["button-container"]}>
        <button className="button-global">Login</button>
      </div>
    </div>
  );
};

export default Login;
