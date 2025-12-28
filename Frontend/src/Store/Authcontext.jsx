import React from "react";
import axios from "axios";
import { StatusHandlerContext } from "./StatusHandlerContentxt";
import { useNavigate, redirect } from "react-router-dom";
export const Logincontext = React.createContext({
  userName: "",
  userPassword: "",
  setUserName: () => {},
  setUserPassword: () => {},
  login_handler: () => {},
  showResponse: false,
  responseStatus: false,
  responseMessage: "",
});
export const SigninContext = React.createContext({
  fullName: "",
  setFullName: () => {},
  userEmail: "",
  setuserEmail: () => {},
  userPassword: "",
  setUserPassword: () => {},
  userConfirmPassword: "",
  setUserConfirmPassword: () => {},
  userPhone: "",
  setuserPhone: () => {},
  sign_handler: () => {},
  showResponse: false,
  responseStatus: false,
  responseMessage: "",
});

export function Logincontextprovider({ children }) {
  const navigation = useNavigate();
  const { setResponseMessage, setResponseStatus, setShowResponse } =
    React.useContext(StatusHandlerContext);

  const [userName, setUserName] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  async function login_handler(e) {
    e.preventDefault();
    setShowResponse(true);
    const data = {
      userName,
      userPassword,
    };
    console.log(userName, userPassword);
    if (userName == "" || userPassword == "") {
      console.log("if all the fields");
      setResponseStatus(false);
      setResponseMessage("Fill all the fields");
    } else {
      await axios
        .post("http://localhost:9090/login", data, { withCredentials: true })
        .then((response) => {
          setResponseStatus(true);
          setResponseMessage("You are Signed in");
          console.log(response.data);
          navigation(`/home/${response.data.userId}`);
        })
        .catch((err) => {
          console.log("it is facing some problem");
          console.log(err);
          setResponseStatus(false);
          setResponseMessage("We don't find any entry in the database");
          console.log(err);
        });
    }
    setTimeout(() => {
      setResponseMessage("");
      setShowResponse(false);
      setUserName("");
      setUserPassword("");
    }, 3000);
  }
  return (
    <Logincontext.Provider
      value={{
        userName,
        setUserName,
        userPassword,
        setUserPassword,
        login_handler,
      }}
    >
      {children}
    </Logincontext.Provider>
  );
}
export function Signicontextprovider({ children }) {
  const { setResponseMessage, setResponseStatus, setShowResponse } =
    React.useContext(StatusHandlerContext);
  const [fullName, setFullName] = React.useState("");
  const [userEmail, setuserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userConfirmPassword, setUserConfirmPassword] = React.useState("");
  const [userPhone, setuserPhone] = React.useState("");
  function sign_handler(e) {
    e.preventDefault();
    console.log(
      fullName,
      userEmail,
      // userName,
      userPassword,
      userConfirmPassword,
      userPhone
    );
    if (
      fullName == "" ||
      userEmail == "" ||
      userPassword == "" ||
      userConfirmPassword == "" ||
      userPhone == ""
    ) {
      setShowResponse(true);
      setResponseStatus(false);
      setResponseMessage("fill all the field");
      setTimeout(() => {
        setShowResponse(false);
        setResponseMessage("");
      }, 3000);
    } else {
      if (userPassword !== userConfirmPassword) {
        setShowResponse(true);
        setResponseStatus(false);
        setResponseMessage("password not match");
      } else {
        const data = {
          fullName,
          userEmail,
          userPassword,
          userPhone,
        };
        axios
          .post("http://localhost:9090/signin", data)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }
  return (
    <>
      <SigninContext.Provider
        value={{
          fullName,
          setFullName,
          userEmail,
          setuserEmail,
          // userName,
          // setUserName,
          userPassword,
          setUserPassword,
          userConfirmPassword,
          setUserConfirmPassword,
          userPhone,
          setuserPhone,
          sign_handler,
        }}
      >
        {children}
      </SigninContext.Provider>
      ;
    </>
  );
}
