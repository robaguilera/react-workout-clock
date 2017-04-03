import React from 'react';

export default React.createClass({
  getInitialState () {
      return {
          exerciseCount: 0
      }
  },
  incrementCount () {
    let count = this.state.exerciseCount;
    this.setState( { exerciseCount : count += 1 } );
  },
  decrementCount () {
    let count = this.state.exerciseCount;
    this.setState( { exerciseCount: Math.max(0, count -+ 1) } );
  },
  render () {
    return (
      <div className='control-row'>
        <button className='btn-transparent' onClick={this.incrementCount}>
            <i className='fa fa-fw fa-plus'></i>
        </button>
        <span className='action-text'>Exercise</span>
        <button className='btn-transparent' onClick={this.decrementCount}>
            <i className='fa fa-fw fa-minus'></i>
        </button>
        <span id='exercise-total' className="total-count">{this.state.exerciseCount}</span>
      </div>
    )
  }
});