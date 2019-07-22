import React, { Component } from 'react';
import ConversationsList from '../components/conversations/ConversationsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConversationsList />
      </div>
    );
  }
}

export default App;
