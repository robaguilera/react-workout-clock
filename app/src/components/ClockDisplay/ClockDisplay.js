import React from 'react';
import CurrentTime from './CurrentTime';
import PrevTime from './PrevTime';

export default React.createClass({
  render() {
    return (
      <div className="clock-display">
        <CurrentTime isTimerRunning={this.props.isTimerRunning} currentTimer={this.props.currentTime}/>
        <PrevTime prevTimer={this.props.prevTime}/>
      </div>
    );
  }
})
