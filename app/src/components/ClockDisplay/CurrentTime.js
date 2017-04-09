import React from 'react';

export default React.createClass({
  getInitialState () {
    return {
      intervalID: null
    }
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.intervalID === null && this.props.isTimerRunning) {
      this.setState({ intervalID : setInterval(this.tick,1000) });
    } else if (this.state.intervalID !== null && !this.props.isTimerRunning) {
      clearInterval(this.state.intervalID);
      this.setState({ intervalID : null });
    }
  },
  tick () {
    console.log('hi')
  },
  render() {
    let { hour, min, sec } = this.props.currentTimer;
    hour = hour <= 9 ? `0${hour}` : hour;
    min = min <= 9 ? `0${min}` : min;
    sec = sec <= 9 ? `0${sec}` : sec;
    return (
      <div className='current-time'>
        <h2 className='time-font'>
          <span className='hour'>{hour}:</span>
          <span className='min'>{min}:</span>
          <span className='sec'>{sec}</span>
        </h2>
      </div>
    );
  }
})
