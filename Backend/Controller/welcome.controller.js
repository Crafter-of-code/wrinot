/**
 * @param {import ("express").Request} req
 * @param {import ("express").Response} res
 */
import jwt from "jsonwebtoken";
export default function welcomeController(req, res) {
  const key = jwt.sign("hello", process.env.PRIVATE_KEY);
  console.log(key);
  res
    .status(200)
    .cookie("site", "wrinote", {
      httpOnly: true,
    })
    .cookie("location", "delhi", {
      httpOnly: true,
    })
    .send({ data: "seccessfully" });
}
