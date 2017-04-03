import React from 'react';

export default React.createClass({
    render() {
        return (
          <div className="clock-display">
            <div className='time'>
              <h2 className='time-font'>
                <span className='hour'></span>00:<span className='min'>00</span>:00<span className='sec'></span>
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
