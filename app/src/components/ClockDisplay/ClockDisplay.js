import React from 'react';

export default React.createClass({
  render() {
    let { hour, min, sec } = this.props.timer;
    hour = hour < 9 ? `0${hour}` : hour;
    min = min < 9 ? `0${min}` : min; 
    sec = sec < 9 ? `0${sec}` : sec;
    return (
      <div className="clock-display">
        <div className='time'>
          <h2 className='time-font'>
            <span className='hour'>{hour}:</span>
            <span className='min'>{min}:</span>
            <span className='sec'>{sec}</span>
          </h2>
        </div>
        <div className='previous-set'>
          <span>Previous Set: </span>
          <span id='previous-time' className='time-font'>
              <span className='pv-hour'>00:</span>
              <span className='pv-min'>00:</span>
              <span className='pv-sec'>00</span>
          </span>
        </div>
      </div>
    );
  }
})
