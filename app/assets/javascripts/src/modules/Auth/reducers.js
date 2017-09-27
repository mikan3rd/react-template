import CounterActions from './actions';
import Auth from './model';
import {handleActions} from 'redux-actions';


export default handleActions({
  [CounterActions.authToken]: (state, action) => {
    return state.authorize();
  },
  [CounterActions.login]: (state, action) => {
    return state.login();
  },
  [CounterActions.logout]: (state, action) => {
    return new Auth();
  },
}, new Auth());
