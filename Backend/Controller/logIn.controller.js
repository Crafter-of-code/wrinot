/**
 * @param {import ("express").Request} req
 * @param {import ("express").Response} res
 */
import mySqlConntection from "../DB/mySql.connection.js";
export default function logInController(req, res) {
  console.log(req.body);
  // res.send(req.body);
  const { userName, userPassword } = req.body;
  const query =
    "select userId from users where userEmail = ? And userPassword = ?";
  mySqlConntection.query(query, [userName, userPassword], (err, result) => {
    if (err) {
      console.log(err);
      res.status(401).send("unauthorised");
    } else {
      console.log(result[0]);
      if (result[0] == undefined) {
        console.log("user name is not found");
        res.status(401).send("unauthorised");
        return;
      } else {
        console.log("user name is found");
        res.status(201).send(result[0]);
      }
    }
  });
}
