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
      },
      timerHasStarted: false
    }
  },
  toggleTimer() {
    this.setState(prevState => ({
      timerHasStarted : !prevState.timerHasStarted
    }));
  },
  render() {
    return (
      <div className='workout-clock'>
        <AppHeader />      
        <ClockDisplay timerHasStarted={this.state.timerHasStarted} timer={this.state.time} />
        <ClockControls />
        <TimerControls timerHasStarted={this.state.timerHasStarted} toggleTimer={this.toggleTimer}/>
        <AppFooter />
      </div>
    );
  }
})
