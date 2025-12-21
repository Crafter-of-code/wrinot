import { SigninContext } from "../../Store/Authcontext";
import style from "./Signin.module.css";
import { useContext } from "react";
export default function Signin() {
  const {
    fullName,
    setFullName,
    userEmail,
    setuserEmail,
    userPassword,
    setUserPassword,
    userConfirmPassword,
    setUserConfirmPassword,
    userPhone,
    setuserPhone,
    sign_handler,
  } = useContext(SigninContext);
  return (
    <main className={style.main_container}>
      <h1>Sign In</h1>
      <form className={style.form} onSubmit={sign_handler}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required={true}
        />

        <label htmlFor="userEmail">Email</label>
        <input
          type="userEmail"
          id="userEmail"
          placeholder="Enter your Email"
          value={userEmail}
          onChange={(e) => setuserEmail(e.target.value)}
          required={true}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required={true}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          value={userConfirmPassword}
          onChange={(e) => setUserConfirmPassword(e.target.value)}
          required={true}
        />

        <label htmlFor="userPhone">userPhone Number</label>
        <input
          type="tel"
          id="userPhone"
          placeholder="Enter userPhone number"
          value={userPhone}
          onChange={(e) => setuserPhone(e.target.value)}
          required={true}
        />

        <button type="submit">Sign In</button>
      </form>
    </main>
  );
}
