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
      timerRunning: false,
      intervalID: null
    }
  },
  toggleTimer () {
    this.setState({
      timerRunning: !this.state.timerRunning
    })
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.intervalID === null && this.state.timerRunning) {
      this.setState({ intervalID: setInterval(this.tick, 1000) });
    } else if (this.state.intervalID !== null && !this.state.timerRunning) {
      clearInterval(this.state.intervalID);
      this.setState({ intervalID : null });
    }
  },
  tick () {
    const newState = {
        sec: this.state.currentTime.sec + 1,
        min: this.state.currentTime.min,
        hour: this.state.currentTime.hour
    };

    if (newState.sec > 59) {
      newState.sec = 0;
      newState.min += 1;
    }

    if (newState.min > 59) {
      newState.min = 0;
      newState.hour += 1;
    }

    this.setState({ currentTime: newState });
  },
  render() {
    return (
      <div className='workout-clock'>
        <AppHeader />
        <ClockDisplay currentTime={this.state.currentTime} prevTime={this.state.prevTime} />
        <ClockControls />
        <TimerControls toggleTimer={this.toggleTimer} />
        <AppFooter />
      </div>
    );
  }
})
