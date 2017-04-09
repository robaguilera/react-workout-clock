import React from 'react';

export default React.createClass({
  render () {
    const buttonText = this.props.isTimerRunning ? 'Pause' : 'Start';
    return (
      <div className='timer-controls-wrapper'>
        <div className='clock-buttons'>
          <button className='btn-action' onClick={this.props.toggleTimer} >
            {buttonText}
          </button>
          <button className='btn-inactive' onClick={this.props.stopTimer} >Stop</button>
        </div>
      </div>
    )
  }
})
