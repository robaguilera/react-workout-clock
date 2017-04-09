import React from 'react';

export default React.createClass({
  render() {
    let { hour, min, sec } = this.props.currentTimer;
    hour = hour <= 9 ? `0${hour}` : hour;
    min = min <= 9 ? `0${min}` : min;
    sec = sec <= 9 ? `0${sec}` : sec;
    return (
      <div className='time'>
        <h1>{this.props.timerHasStarted}</h1>
        <h2 className='time-font'>
          <span className='hour'>{hour}:</span>
          <span className='min'>{min}:</span>
          <span className='sec'>{sec}</span>
        </h2>
      </div>
    );
  }
})
