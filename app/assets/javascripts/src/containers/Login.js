import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {AuthActions} from '../modules/Auth';

class Counter extends React.Component {
  render() {
    const {
      authLogin,
    } = this.props;

    return (
      <div>
        <button onClick={() => authLogin()}>ログイン</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(AuthActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
