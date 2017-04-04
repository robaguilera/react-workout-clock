import React from 'react';

export default React.createClass({
  render () {
    const hasStarted = this.props.timerHasStarted;
    const buttonText = hasStarted ? 'Pause' : 'Start'; 
    return (
      <div className='timer-controls-wrapper'>
        <div className='clock-buttons'>
          <button className='btn-action' onClick={this.props.toggleTimer}>
            {buttonText}
          </button>
          <button className='btn-inactive'>Stop</button>
        </div>
      </div>
    )
  }
})