import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {CounterActions} from '../modules/Counter';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
    };

    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    const {hidden} = this.state;
    this.setState({hidden: !hidden});
  }

  render() {
    const {
      hidden,
    } = this.state;
    const {
      counter,
      increment,
      decrement,
      reset,
    } = this.props;

    return (
      <div className="p-counter">
        <div className="p-counter__counter">
          {hidden ? null : <span>{counter.count}</span>}
        </div>
        <div className="p-counter__button-container">
          <button className="c-button" onClick={() => increment()}>increment</button>
          <button className="c-button" onClick={() => decrement()}>decrement</button>
          <button className="c-button--red" onClick={() => reset()}>reset</button>
          <button className="c-button--red" onClick={this.toggleHidden}>
            {hidden ? "show" : "hide"}
          </button>
        </div>
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
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
