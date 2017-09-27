import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

/**
 * 非ログインユーザー向け画面での親コンポーネント
 */
class GuestOnly extends React.Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.loginWillTransfer(this.props, this.context.router);
  }

  componentWillUpdate(nextProps) {
    this.loginWillTransfer(nextProps, this.context.router);
  }

  /**
   * ステータス変更時にログイン状態をチェックして、ログインしている場合はデフォルト画面へ
   */
  loginWillTransfer(props, router) {
    if (props.auth.isLoggedIn) {
      router.replace('/');
    }
  }

  render() {
    return (
      !this.props.auth.isLoggedIn && !this.props.auth.isLoading
      ? <div>{this.props.children}</div>
      : null
    );
  }
}

/**
 * stateの内容を全てpropsにコピーする
 */
function mapStateToProps(state, props) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(GuestOnly);
