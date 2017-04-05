import React from 'react';

export default React.createClass({
  getInitialState () {
    return {
      sec: 0,
      min: 0,
      hour: 0,
      timerRunning: false
    }
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.props.timerHasStarted && !this.state.timerRunning) {
       this.intervalID = setInterval(this.tick, 1000);
    } else if (!this.props.timerHasStarted){
      clearInterval(this.intervalID);
    }
  },
  tick () {
    const newState = {
      sec: this.state.sec + 1,
      min: this.state.min,
      hour: this.state.hour,
      timerRunning: true
    };

    if (newState.sec > 59) {
      newState.sec = 0;
      newState.min += 1;
    }

    if (newState.min > 59) {
      newState.min = 0;
      newState.hour += 1;
    }

    this.setState( newState );
  },
  render() {
    let { hour, min, sec } = this.state;
    hour = hour <= 9 ? `0${hour}` : hour;
    min = min <= 9 ? `0${min}` : min; 
    sec = sec <= 9 ? `0${sec}` : sec;
    return (
      <div className="clock-display">
        <div className='time'>
          <h1>{this.props.timerHasStarted}</h1>
          <h2 className='time-font'>
            <span className='hour'>{hour}:</span>
            <span className='min'>{min}:</span>
            <span className='sec'>{sec}</span>
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
