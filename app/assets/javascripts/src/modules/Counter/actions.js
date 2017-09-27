import {createAction} from 'redux-actions';

const increment = createAction('Counter/Increment');
const decrement = createAction('Counter/Decrement');
const reset = createAction('Counter/Reset');

export default {
  increment,
  decrement,
  reset,
};
