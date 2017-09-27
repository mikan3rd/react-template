import {combineReducers} from 'redux';
import Auth from '../modules/Auth';
import Counter from '../modules/Counter';

export default combineReducers({
  auth: Auth,
  counter: Counter,
});
