import {fork, take, put} from 'redux-saga/effects';

import {default as Actions} from './actions';

export default function* exeFork() {
  yield fork(handleAuthToken);
  yield fork(handleLogin);
}

/**
 * 認証トークンチェック
 */
function* handleAuthToken() {
  while (true) {
    yield take(Actions.authToken.toString());

    // TODO: ここにログイン処理を書く
    // ここに認証トークンチェック処理を書く
    // 現状はチェックOK

    // ログイン状態に変更
    yield put(Actions.login());
  }
}

/**
 * ログイン処理
 */
function* handleLogin() {
  while (true) {
    yield take(Actions.authLogin.toString());

    // TODO: ここにログイン処理を書く
    // 現状は全てログインさせる

    // ログイン状態に変更
    yield put(Actions.login());
  }
}
