import React from "react";
import {Route, Switch, } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Products from "../components/Products";

function SideBarRoutes() {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/login"><Login /></Route>
      <ProtectedRoutes path="/products"><Products /></ProtectedRoutes>
    </Switch>
  );
}

export default SideBarRoutes;
