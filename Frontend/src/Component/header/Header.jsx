import React from "react";
import style from "./Header.module.css";
export default function Header() {
  return (
    <React.Fragment>
      <header className={style.header}>
        <div className={style.logo_container}>
          <h1>Logo</h1>
        </div>
      </header>
    </React.Fragment>
  );
}
