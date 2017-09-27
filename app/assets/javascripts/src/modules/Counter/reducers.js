import Counter from './model';
import {handleActions} from 'redux-actions';
import {default as CounterActions}  from './actions';

export default handleActions({
  [CounterActions.increment]: (state, action) => {
    return state.increment();
  },
  [CounterActions.decrement]: (state, action) => {
    return state.decrement();
  },
  [CounterActions.reset]: (state, action) => {
    return state.reset();
  },
}, new Counter());
