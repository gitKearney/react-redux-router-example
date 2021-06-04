import React, {useState, } from "react";
import {useHistory, useLocation} from "react-router-dom";
import {connect} from "react-redux";

// import redux action creators
import {loginAction} from "../redux/actions/LoginActions";

function mapStateToProps(state) {
  // when we call "combineReducers" in redux/reducers/rootReducer an object
  // is created that contains a property "login".
  // "login" calls the "LoginReducer" and gets the new state
  return {login: state['login']};
}

/**
 * @typedef {Object} LoginInfo
 * @property {string} email
 * @property {string} password
 */

/**
 * @param {function} dispatch
 * @return {{login_user: login_user}}
 */
function mapDispatchToProps(dispatch) {
  return {
    /**
     * calls the LoginAction method which sends an HTTP request,
     * then calls a redux action method which returns an object with 2
     * properties: "type" & "payload"
     *
     * we then pass that object to our reducer to update the state of the app
     * @param {LoginInfo} loginInfo
     * @param {function} callback
     */
    login_user: function(loginInfo, callback) {
      loginAction(loginInfo)
        .then(newState => {
          dispatch(newState);
          callback();
        });
    },
  }
}

/**
 * @description React Function component that renders the login page
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function Login(props) {
  let [password, setPassword] = useState('');
  let [email, setEmail] = useState('bob@example.com');
  let [fieldType, setFieldType] = useState('password')

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const login = (event) => {
    event.stopPropagation();

    const callback = () => {
      history.replace(from);
    }

    props.login_user({email, password}, callback);
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeFieldType = () => {
    if (fieldType === 'password') {
      setFieldType('text');
      return;
    }

    setFieldType('password');
  };

  return (
    <div className="w3-content">
      <div className="w3-container w3-card-4">
        <h2 className="w3-center">Login</h2>
        <p>
          <label htmlFor="email">User Name</label>
          <input className="w3-input w3-border"
                 name="email"
                 id="email"
                 type="text"
                 onChange={updateEmail}
                 value={email}
          />
        </p>
        <p>
          <label>
            Password
            <input className="w3-input w3-border" name="password" type={fieldType}
                   onChange={updatePassword}
                   value={password}
            />

            <label htmlFor="show-password">Show Password</label>
            <input
              type="checkbox"
              onChange={changeFieldType}
              name="show-password"
              className="w3-margin-left"/>
          </label>
        </p>
        <p>
          <button className="w3-btn w3-blue" onClick={login}>Login</button></p>
      </div>
    </div>
  );
}

const loginConnect = connect(mapStateToProps, mapDispatchToProps);
const LoginContainer = loginConnect(Login);
export default LoginContainer;
