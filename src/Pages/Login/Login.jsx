import React, { useState } from "react";
import style from "./Login.module.css";
import { login } from "../../Service/User.Service";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const LoginUser = async () => {
    await login(
      { name: Name, email: Email, password: Password },
      (res, err) => {
        if (res) {
          localStorage.setItem("token", res?.token);
          alert(res?.message);
          navigate("/");
          return;
        }
        if (err) {
          alert(err?.error);
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
        <button className="button-global" onClick={LoginUser}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
