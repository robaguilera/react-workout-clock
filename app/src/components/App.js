import React from 'react';
import AppHeader from './AppHeader/AppHeader';
import ClockDisplay from './ClockDisplay/ClockDisplay';
import ClockControls from './ClockControls/ClockControls';
import TimerControls from './TimerControls/TimerControls';
import AppFooter from './AppFooter/AppFooter';

export default React.createClass({
  getInitialState () {
    return {
      currentTime: {
        hour: 0,
        min: 0,
        sec: 0
      },
      prevTime: {
        pvHour: 0,
        pvMin: 0,
        pvSec: 0
      },
      timerRunning: false
    }
  },
  toggleTimer () {
    this.setState({
      timerRunning: !this.state.timerRunning
    })
  },
  render() {
    return (
      <div className='workout-clock'>
        <AppHeader />
        <ClockDisplay currentTime={this.state.currentTime} prevTime={this.state.prevTime} />
        <ClockControls />
        <TimerControls isTimerRunning={this.state.timerRunning} toggleTimer={this.toggleTimer} />
        <AppFooter />
      </div>
    );
  }
})
