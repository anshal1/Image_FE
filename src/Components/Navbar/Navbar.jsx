import React, { useEffect } from "react";
import style from "./Navbar.module.css";
import { useNavigate, Link } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
  }, []);
  return (
    <div className={style["main-navbar-container"]}>
      <div className={style["heading"]}>
        <h1>Images</h1>
      </div>
      <div className={style["links"]}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          {localStorage.getItem("token") && (
            <li>
              <button className="button-global" onClick={Logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
