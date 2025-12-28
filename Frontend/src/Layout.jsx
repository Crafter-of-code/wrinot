import { Outlet } from "react-router-dom";
import {
  Logincontextprovider,
  Signicontextprovider,
} from "./Store/Authcontext";
import StatusHandlerContextProvider from "./Store/StatusHandlerContentxt";
import StatusHandler from "./Component/statusHander/StatusHandler";
export default function Layout() {
  return (
    <>
      <StatusHandlerContextProvider>
        <Signicontextprovider>
          <Logincontextprovider>
            <div className="status_handler">
              <StatusHandler />
            </div>
            <Outlet />
          </Logincontextprovider>
        </Signicontextprovider>
      </StatusHandlerContextProvider>
    </>
  );
}
