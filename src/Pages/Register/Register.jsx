import React, { useState } from "react";
import style from "./Register.module.css";
import { register_user } from "../../Service/User.Service";
import { useNavigate } from "react-router-dom";
import useContextHook from "../../Hooks/useContextHook";
const Register = () => {
  const navigate = useNavigate();
  const ctx = useContextHook();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const register = async () => {
    await register_user(
      { name: Name, email: Email, password: Password },
      (res, err) => {
        if (res) {
          localStorage.setItem("token", res?.token);
          ctx.setShowAlert(true);
          ctx.setAlertMessage(res?.message);
          navigate("/");
          return;
        }
        if (err) {
          ctx.setShowAlert(true);
          ctx.setAlertMessage(err?.error);
        }
      }
    );
  };
  return (
    <div className={style["main-container"]}>
      <div className={style["input-container"]}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          className="inputs-global"
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          className="inputs-global"
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          className="inputs-global"
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
        />
      </div>
      <div className={style["button-container"]}>
        <button className="button-global" onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
