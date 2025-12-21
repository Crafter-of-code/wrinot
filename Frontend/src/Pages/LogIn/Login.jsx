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
          <label htmlFor="userName">Email</label>
          <input
            type="email"
            id="userName"
            placeholder="Enter your user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="userPassword">Password</label>
          <input
            type="password"
            id="userPassword"
            placeholder="Enter your user password"
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
