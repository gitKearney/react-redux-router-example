import React from "react";

// import redux stuff
import {Provider} from "react-redux";
import loginStore from "./redux/stores/loginStore";

// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import SideBarRoutes from "./routes/SideBarRoutes";
import Carousel from "./components/Carousel";


function App() {
  return (
    <Provider store={loginStore}>
      <BrowserRouter>
          <Sidebar/>
          <Header />
          <Carousel />
          <SideBarRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export {
  App,
};
