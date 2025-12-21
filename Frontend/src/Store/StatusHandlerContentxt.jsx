import React from "react";
const StatusHandlerContext = React.createContext({
  showResponse: false,
  setShowResponse: () => {},
  responseStatus: true,
  setResponseStatus: () => {},
  responseMessage: "",
  setResponseMessage: () => {},
});

export default function StatusHandlerContextProvider({ children }) {
  const [showResponse, setShowResponse] = React.useState(false);
  const [responseStatus, setResponseStatus] = React.useState(true);
  const [responseMessage, setResponseMessage] = React.useState("");
  return (
    <>
      <StatusHandlerContext.Provider
        value={{
          showResponse,
          setShowResponse,
          responseStatus,
          setResponseStatus,
          responseMessage,
          setResponseMessage,
        }}
      >
        {children}
      </StatusHandlerContext.Provider>
    </>
  );
}
export { StatusHandlerContext };
