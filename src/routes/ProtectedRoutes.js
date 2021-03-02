import React from "react";
import {Route, Redirect} from "react-router-dom";

// import redux stuff
import {connect} from "react-redux";

function mapStateToProps(state) {
  // when we call "combineReducers" in redux/reducers/rootReducer an object
  // is created that contains a property "login".
  // "login" calls the "LoginReducer" and gets the new state
  return {login: state['login']};
}

function ProtectedRoutes(props) {
  let auth = props.login.is_auth;
  let { location, } = props;

  const renderComponent = () => {
    return props.children;
  };

  if (auth) {
    return (
      <Route render={renderComponent}/>
    );
  }

  let redirectTo = {
    pathname: "/login",
    state: { from: location },
  };

  return (
    <Route>
      <Redirect to={redirectTo} />
    </Route>
  );
}


// we don't need to call mapDispatchToProps because we don't need it, so we
// can leave it out of our call to "connect"
const routeConnect = connect(mapStateToProps);
const ProtectedRoutesContainer = routeConnect(ProtectedRoutes);
export default ProtectedRoutesContainer;
