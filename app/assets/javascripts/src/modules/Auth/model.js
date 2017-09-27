import {Record} from 'immutable';

const AuthRecord = Record({
  isLoggedIn: false,
  isLoading: false,
});

export default class extends AuthRecord {
  authorize() {
    return this.merge({
      isLoading: true,
    });
  }

  login() {
    return this.merge({
      isLoggedIn: true,
      isLoading: true,
    });
  }

}
