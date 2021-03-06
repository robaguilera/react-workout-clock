import React from 'react';

const AppHeader = () =>
  <header>
    <div className='header-item -left'>
      <i className='fa fa-fw fa-bars' aria-hidden="true"></i>
    </div>
    <div className='header-item -center'>
      <h3>Workout Timer</h3>
    </div>
    <div className='header-item -right'>
      <i className='fa fa-fw fa-clock-o'></i>
    </div>
  </header>

export default AppHeader;
