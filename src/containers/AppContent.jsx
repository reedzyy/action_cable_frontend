import React, { Component } from 'react';
import MessagesArea from '../components/conversations/MessagesArea';

class AppContent extends Component {
  render() {
    return (
      false ? (<MessagesArea />): (<div className="ch-stub">Please select a chat to start messaging</div>)
    );
  }
}

export default AppContent;
