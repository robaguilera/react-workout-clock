import React from 'react';
import AppHeader from './AppHeader/AppHeader';
import ClockDisplay from './ClockDisplay/ClockDisplay';
import ClockControls from './ClockControls/ClockControls';
import TimerControls from './TimerControls/TimerControls';
import AppFooter from './AppFooter/AppFooter';

export default React.createClass({
  getInitialState () {
    return {
      time: {
        hour: 0,
        min: 0,
        sec: 0
      }
    }
  },
  render() {
    return (
      <div className='workout-clock'>
        <AppHeader />      
        <ClockDisplay timer={this.state.time} />
        <ClockControls />
        <TimerControls />
        <AppFooter />
      </div>
    );
  }
})
