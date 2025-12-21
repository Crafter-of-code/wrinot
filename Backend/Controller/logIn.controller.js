import mySqlConntection from "../DB/mySql.connection.js";
export default function logInController(req, res) {
  console.log(req.body);
  res.send(req.body);
}
