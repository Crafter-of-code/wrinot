import style from "./Welcome.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Welcome() {
  axios
    .get("http://localhost:9090/", {
      withCredentials: true,
    })
    .then(() => {
      console.log("The connection is seccessfullly");
    })
    .catch(() => {
      console.log("The connection is failure");
    });
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
