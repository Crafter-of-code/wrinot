import React from "react";
export const Logincontext = React.createContext({
  user_name: "",
  user_password: "",
  setUser_name: () => {},
  setUser_password: () => {},
  login_handler: () => {},
});
export const SigninContext = React.createContext();

export function Logincontextprovider({ children }) {
  const [user_name, setUser_name] = React.useState("");
  const [user_password, setUser_password] = React.useState("");
  function login_handler(e) {
    e.preventDefault();
    console.log(user_name, user_password);
  }
  return (
    <Logincontext.Provider
      value={{
        user_name,
        setUser_name,
        user_password,
        setUser_password,
        login_handler,
      }}
    >
      {children}
    </Logincontext.Provider>
  );
}
export function Signicontextprovider({ children }) {}
