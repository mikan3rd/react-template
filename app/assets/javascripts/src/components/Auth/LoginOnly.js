import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

/**
 * ログインユーザー向け画面での親コンポーネント
 */
class LoginOnly extends React.Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.guestWillTransfer(this.props, this.context.router);
  }

  componentWillUpdate(nextProps) {
    this.guestWillTransfer(nextProps, this.context.router);
  }

  /**
   * ステータス変更時にログイン状態をチェックして、ログインしていない場合はlogin画面へ
   */
  guestWillTransfer(props, router) {
    if (!props.auth.isLoggedIn && !props.auth.isLoading) {
      router.replace('/login');
    }
  }

  render() {
    return (
      this.props.auth.isLoggedIn
      ? <div>{this.props.children}</div>
      : null
    );
  }
}

function mapStateToProps(state, props) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(LoginOnly);
