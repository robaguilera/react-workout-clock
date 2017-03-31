import React from 'react';

export default React.createClass({
  render() {
      return (
          <footer>
              <div className='footer-inner'>
                  <div className='clock-buttons'>
                    <button className='btn-action'>Start</button>
                    <button className='btn-inactive'>Stop</button>
                  </div>
              </div>
              <ul className='menu'>
                  <li className='fa fa-fw fa-line-chart' aria-hidden="true"></li>
                  <li className='fa fa-fw fa-heart-o' aria-hidden="true"></li>
                  <li className='fa fa-fw fa-bell-o active' aria-hidden="true"></li>
                  <li className='fa fa-fw fa-cutlery' aria-hidden="true"></li>
                  <li className='fa fa-fw fa-bullseye' aria-hidden="true"></li>
              </ul>
          </footer>
      )
  }  
})