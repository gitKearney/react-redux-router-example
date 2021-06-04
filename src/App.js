import React from "react";

// import redux stuff
import {Provider} from "react-redux";
import loginStore from "./redux/stores/loginStore";

// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import SideBarRoutes from "./routes/SideBarRoutes";

function App() {
  return (
    <Provider store={loginStore}>
      <BrowserRouter>
        <div>
          <Sidebar/>
          <Header />
          <SideBarRoutes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export {
  App,
};
