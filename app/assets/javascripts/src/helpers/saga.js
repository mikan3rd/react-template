import {fork} from 'redux-saga/effects';
import {AuthOperations} from '../modules/Auth';

function* rootSaga() {
  yield fork(AuthOperations);
}

export default rootSaga;
