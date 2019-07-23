import React, { Component } from 'react';
import { Navbar } from 'react-chat-elements';

class AppHeader extends Component {
  render() {
    return (
      <Navbar
        type='none'
        left={
            <div className='ch-header-logo'>Chat.io</div>
        }
        center={
            <div></div>
        }
        right={
            <div></div>
        }
      />
    );
  }
}

export default AppHeader;
