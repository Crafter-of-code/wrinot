import "dotenv/config";
import mysql from "mysql2";

const mySqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: true,
  },
});

mySqlConnection.connect((err) => {
  if (err) {
    console.error("❌ Connection error:", err.message);
  } else {
    console.log("✅ Connected to remote database successfully");
  }
});

export default mySqlConnection;
