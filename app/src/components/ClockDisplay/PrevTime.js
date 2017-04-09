import React from 'react';
import h from '../../helpers';

export default React.createClass({
  render() {
    let { pvHour, pvMin, pvSec } = this.props.prevTimer;
    pvHour = h.formatTime(pvHour);
    pvMin = h.formatTime(pvMin);
    pvSec = h.formatTime(pvSec);
    return (
      <div className='previous-set'>
        <span>Previous Set: </span>
        <span id='previous-time' className='time-font'>
          <span className='hour'>{pvHour}:</span>
          <span className='min'>{pvMin}:</span>
          <span className='sec'>{pvSec}</span>
        </span>
      </div>
    );
  }
})
