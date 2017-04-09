import React from 'react';
import CurrentTime from './CurrentTime';
import PrevTime from './PrevTime';

const ClockDisplay = (props) =>
  <div className="clock-display">
    <CurrentTime isTimerRunning={props.isTimerRunning} currentTimer={props.currentTime}/>
    <PrevTime prevTimer={props.prevTime}/>
  </div>

export default ClockDisplay;
