import { response } from "express";
import mySqlConnection from "../DB/mySql.connection.js";
export default function signInController(req, res) {
  const { fullName, userEmail, userPassword, userPhone } = req.body;
  const query =
    "insert into users (userName, userEmail, userPassword, userPhone) value (?,?,?,?)";
  mySqlConnection.query(
    query,
    [fullName, userEmail, userPassword, userPhone],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
}
