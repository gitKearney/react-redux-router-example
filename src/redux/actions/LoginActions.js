import { LOGIN_SUCCESS } from "../types";

export function loginAction(loginInfo) {
  /*loginInfo['email'] = 'skip';
  loginInfo['pass'] = 'skip';

  let init = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(loginInfo),
  };

  const URI = `http://localhost:3003/auth/`;

  const request = new Request(URI, init);
  */
  return new Promise((resolve) => {
    resolve(loginSuccess({}));
  });

  // return fetch(request)
  //   .then(response => response.json())
  //   .then(response => {
  //     if (response.success) {
  //       return loginSuccess(response.results);
  //     }
  //     return loginFailed(response.results);
  //   });
};

function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}

/*
function loginFailed(data) {
  return {
    type: LOGIN_FAILED,
    payload: data,
  };
}
*/
