import React from 'react';

export default React.createClass({
    render() {
        return (
            <div className="clock-controls">
                <div className='control-row'>
                    <button className='btn-transparent'>
                        <i className='fa fa-fw fa-plus'></i>
                    </button>
                    <span className='action-text'>Exercise</span>
                    <button className='btn-transparent'>
                        <i className='fa fa-fw fa-minus'></i>
                    </button>
                    <span id='exercise-total' className="total-count">0</span>
                </div>
                <div className='control-row'>
                    <button className='btn-transparent'>
                        <i className='fa fa-fw fa-plus'></i>
                    </button>
                    <span className='action-text'>Set</span>
                    <button className='btn-transparent'>
                        <i className='fa fa-fw fa-minus'></i>
                    </button>
                    <span id='set-total' className="total-count">0</span>
                </div>
            </div>
        );
    }
})
