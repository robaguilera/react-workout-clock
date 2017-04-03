import React from 'react';

export default React.createClass({
  render () {
    return (
      <div className='footer-inner'>
        <div className='clock-buttons'>
          <button className='btn-action'>Start</button>
          <button className='btn-inactive'>Stop</button>
        </div>
      </div>
    )
  }
})