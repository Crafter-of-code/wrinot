import style from "./Welcome.module.css";
import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <>
      <div className={style.main_container}>
        <div className={style.heading_container}>
          <h2 className="text-white">Welcome to</h2>
          <h1>Wrinot</h1>
        </div>
        <div className={style.button_container}>
          <Link to={"login"}>
            <button id={style.button_1}>Log In</button>
          </Link>

          <Link to={"signin"}>
            <button id={style.button_2}>Sign In</button>
          </Link>
        </div>
      </div>
    </>
  );
}
