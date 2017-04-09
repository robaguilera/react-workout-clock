import React from 'react';

export default React.createClass({
  render() {
    let { hour, min, sec } = this.props.currentTime;
    let { pvHour, pvMin, pvSec } = this.props.prevTime;
    // TODO: Create a time formater function
    hour = hour <= 9 ? `0${hour}` : hour;
    min = min <= 9 ? `0${min}` : min;
    sec = sec <= 9 ? `0${sec}` : sec;
    pvHour = pvHour <= 9 ? `0${pvHour}` : hour;
    pvMin = pvMin <= 9 ? `0${pvMin}` : min;
    pvSec = pvSec <= 9 ? `0${pvSec}` : sec;
    return (
      <div className="clock-display">
        <div className='time'>
          <h1>{this.props.timerHasStarted}</h1>
          <h2 className='time-font'>
            <span className='hour'>{hour}:</span>
            <span className='min'>{min}:</span>
            <span className='sec'>{sec}</span>
          </h2>
        </div>
        <div className='previous-set'>
          <span>Previous Set: </span>
          <span id='previous-time' className='time-font'>
              <span className='pv-hour'>{pvHour}:</span>
              <span className='pv-min'>{pvMin}:</span>
              <span className='pv-sec'>{pvSec}</span>
          </span>
        </div>
      </div>
    );
  }
})
