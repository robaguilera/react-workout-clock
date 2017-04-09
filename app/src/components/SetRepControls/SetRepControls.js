import React from 'react';
import ExerciseCount from './ExerciseCount';
import SetCount from './SetCount';

const SetRepControls = () =>
  <div className="clock-controls">
    <ExerciseCount />
    <SetCount />
  </div>

export default SetRepControls;
