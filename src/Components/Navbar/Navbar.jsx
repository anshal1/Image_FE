import React from "react";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={style["main-navbar-container"]}>
      <div className={style["heading"]}>
        <h1>Images</h1>
      </div>
      <div className={style["links"]}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/upload">Upload</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
