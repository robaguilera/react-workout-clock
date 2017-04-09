import React from 'react';
import CurrentTime from './CurrentTime';
import PrevTime from './PrevTime';

export default React.createClass({
  render() {
    // let { hour, min, sec } = this.props.currentTime;
    // let { pvHour, pvMin, pvSec } = this.props.prevTime;
    // // TODO: Create a time formater function
    // pvHour = pvHour <= 9 ? `0${pvHour}` : hour;
    // pvMin = pvMin <= 9 ? `0${pvMin}` : min;
    // pvSec = pvSec <= 9 ? `0${pvSec}` : sec;
    return (
      <div className="clock-display">
        <CurrentTime currentTimer={this.props.currentTime}/>
        <PrevTime prevTimer={this.props.prevTime}/>
      </div>
    );
  }
})
