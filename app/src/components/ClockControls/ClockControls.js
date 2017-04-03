import React from 'react';
import ExerciseCount from './ExerciseCount';
import SetCount from './SetCount';

export default React.createClass({
    render() {
        return (
          <div className="clock-controls">
            <ExerciseCount />
            <SetCount />
          </div>
        );
    }
})
