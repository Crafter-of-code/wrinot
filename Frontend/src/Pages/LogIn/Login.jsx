import { Logincontext } from "../../Store/Authcontext";
import style from "./Login.module.css";
import React from "react";
export default function Login() {
  const {
    user_name,
    setUser_name,
    setUser_password,
    user_password,
    login_handler,
  } = React.useContext(Logincontext);
  return (
    <>
      <main className={style.main_container}>
        <h1>Login</h1>
        <form className={style.form}>
          <label htmlFor="user_name">User name</label>
          <input
            type="text"
            id="user_name"
            value={user_name}
            onChange={(e) => setUser_name(e.target.value)}
          />
          <label htmlFor="user_password">user password</label>
          <input
            type="password"
            id="user_password"
            value={user_password}
            onChange={(e) => setUser_password(e.target.value)}
          />
          <button type="submit" onClick={login_handler}>
            Login
          </button>
        </form>
      </main>
    </>
  );
}
