import React from 'react';
import '../style/header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className='elipse'/>
        <h1>Sistema Solar</h1>
      </header>
    );
  }
}
