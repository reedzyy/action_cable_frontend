import React, { Component } from 'react';
import { SideBar } from 'react-chat-elements';
import ConversationsList from '../../components/conversations/ConversationsList';

class AppSidebar extends Component {
  render() {
    return (
      <SideBar
        type='light'
        top={
          <ConversationsList handleClick={this.props.handleClick}/>
        }
      />
    );
  }
}

export default AppSidebar;