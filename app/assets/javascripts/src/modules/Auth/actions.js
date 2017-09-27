import {createAction} from 'redux-actions';

const authToken = createAction('Auth/AuthToken');
const authLogin = createAction('Auth/AuthLogin');
const login = createAction('Auth/Login');
const logout = createAction('Auth/Logout');

export default {
  authToken,
  authLogin,
  login,
  logout,
};
