import React from 'react';
import FooterClockButtons from './FooterClockButtons';
import FooterMenu from './FooterMenu';

export default React.createClass({
  render() {
    return (
      <footer>
        <FooterClockButtons /> 
        <FooterMenu />
      </footer>
    )
  }  
})