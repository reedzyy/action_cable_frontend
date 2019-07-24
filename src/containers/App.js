import React, { Component } from 'react';
import AppHeader from '../views/AppHeader/AppHeader';
import AppSidebar from '../views/AppSidebar/AppSidebar';
import AppContent from './AppContent';
import 'react-chat-elements/dist/main.css';
import '../styles/application.scss';
import { findActiveConversation } from '../utils/conversations';

class App extends Component {

  state = {
    activeConversation: null
  };

  handleClick = (conversations, id) => {
    this.setState({ activeConversation: findActiveConversation(conversations, id) });
  };

  render() {
    return (
      <div className="ch">
        <div className="ch-header">
          <AppHeader />
        </div>
        <div className="ch-page">
          <div className="ch-sidebar">
            <AppSidebar handleClick={this.handleClick} />
          </div>
          <div className="ch-content">        
            <AppContent activeConversation={this.state.activeConversation}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
