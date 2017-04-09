import React from 'react';

export default React.createClass({
  render() {
    let { pvHour, pvMin, pvSec } = this.props.prevTimer;
    pvHour = pvHour <= 9 ? `0${pvHour}` : pvHour;
    pvMin = pvMin <= 9 ? `0${pvMin}` : pvMin;
    pvSec = pvSec <= 9 ? `0${pvSec}` : pvSec;
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
