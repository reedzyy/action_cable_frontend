import React, { Component } from 'react';
import AppHeader from '../views/AppHeader/AppHeader';
import AppSidebar from '../views/AppSidebar/AppSidebar';
import AppContent from './AppContent';
import 'react-chat-elements/dist/main.css';
import '../styles/application.scss';

class App extends Component {
  render() {
    return (
      <div className="ch">
        <div className="ch-header">
          <AppHeader />
        </div>
        <div className="ch-page">
          <div className="ch-sidebar">
            <AppSidebar />
          </div>
          <div className="ch-content">        
            <AppContent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
