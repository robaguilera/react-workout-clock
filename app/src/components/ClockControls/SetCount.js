import React from 'react';

export default React.createClass({
  getInitialState () {
      return {
          setCount: 0
      }
  },
  incrementCount () {
    let count = this.state.setCount;
    this.setState( { setCount : count += 1 } );
  },
  decrementCount () {
    let count = this.state.setCount;
    this.setState( { setCount: Math.max(0, count -+ 1) } );
  },
  render () {
    return (
      <div className='control-row'>
        <button className='btn-transparent' onClick={this.incrementCount}>
            <i className='fa fa-fw fa-plus'></i>
        </button>
        <span className='action-text'>Set</span>
        <button className='btn-transparent' onClick={this.decrementCount}>
            <i className='fa fa-fw fa-minus'></i>
        </button>
        <span id='set-total' className="total-count">{this.state.setCount}</span>
      </div>
    )
  }
});