import style from "./Signin.module.css";

export default function Signin() {
  return (
    <main className={style.main_container}>
      <h1>Sign In</h1>
      <form className={style.form}>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" placeholder="Enter your full name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Choose a username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter password" />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
        />

        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" />

        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Enter phone number" />

        <button type="submit">Sign In</button>
      </form>
    </main>
  );
}
