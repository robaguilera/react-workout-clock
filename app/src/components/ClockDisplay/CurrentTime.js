import React from 'react';
import h from '../../helpers';

export default React.createClass({
  render() {
    let { hour, min, sec } = this.props.currentTimer;
    hour = h.formatTime(hour);
    min = h.formatTime(min);
    sec = h.formatTime(sec);
    return (
      <div className='current-time'>
        <h2 className='time-font'>
          <span className='hour'>{hour}:</span>
          <span className='min'>{min}:</span>
          <span className='sec'>{sec}</span>
        </h2>
      </div>
    );
  }
})
