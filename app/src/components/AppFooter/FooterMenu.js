import React from 'react';

export default React.createClass({
  render () {
    return (
      <ul className='menu'>
        <li>
          <i className='fa fa-fw fa-line-chart' aria-hidden="true"></i>
        </li>
        <li>
          <i className='fa fa-fw fa-heart-o' aria-hidden="true"></i>
        </li>
        <li className="active">
          <i className='fa fa-fw fa-bell-o' aria-hidden="true"></i>
        </li>
        <li>
          <i className='fa fa-fw fa-cutlery' aria-hidden="true"></i>
        </li>
        <li>
          <i className='fa fa-fw fa-bullseye' aria-hidden="true"></i>
        </li>
      </ul>
    )
  }
})