import { Logincontext } from "../../Store/Authcontext";
import style from "./Login.module.css";
import React from "react";
export default function Login() {
  const {
    userName,
    setUserName,
    setUserPassword,
    userPassword,
    login_handler,
  } = React.useContext(Logincontext);
  return (
    <>
      <main className={style.main_container}>
        <h1>Login</h1>
        <form className={style.form}>
          <label htmlFor="userName">User name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="userPassword">user password</label>
          <input
            type="password"
            id="userPassword"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button type="submit" onClick={login_handler}>
            Login
          </button>
        </form>
      </main>
    </>
  );
}
