import React from "react";
import { Logincontext } from "../../Store/Authcontext";
import style from "./statusHandler.module.css";
import { StatusHandlerContext } from "../../Store/StatusHandlerContentxt";
function StatusHandler() {
  const { showResponse, responseStatus, responseMessage } =
    React.useContext(StatusHandlerContext);

  return (
    <>
      {showResponse && (
        <div className={style.main_container}>
          <p className={responseStatus ? style.bg_green : style.bg_red}>
            {responseMessage}
          </p>
        </div>
      )}
    </>
  );
}
export default StatusHandler;
// {
//   if (showResponse) {
//     return <></>;
//   } else {
//     {
//     }
//   }
// }
