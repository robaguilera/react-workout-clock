import React from 'react';
import AppHeader from './AppHeader/AppHeader';
import ClockDisplay from './ClockDisplay/ClockDisplay';
import ClockControls from './ClockControls/ClockControls';
import AppFooter from './AppFooter/AppFooter';

export default React.createClass({
  render() {
    return (
      <div className='workout-clock'>
        <AppHeader />      
        <ClockDisplay />
        <ClockControls />
        <AppFooter />
      </div>
    );
  }
})
