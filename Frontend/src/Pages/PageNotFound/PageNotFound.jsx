import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.main_container}>
      <div className={styles.heading_container}>
        <h2>Oops! Page not found</h2>
        <h1>404</h1>
      </div>
      <p className={styles.message}>
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <div className={styles.button_container}>
        <button className={styles.button_primary} onClick={() => navigate("/")}>
          Go Home
        </button>
        <button
          className={styles.button_secondary}
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
